const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input (you may want to use a validation library)
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        const newUser = new User({ username, email, password: hashedPassword });

        // Save the user to the database
        await newUser.save();

        // Generate JWT
        const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', { expiresIn: '1h' });

        // Store the token in the session
        req.session.token = token;

        // Respond with the created user and token
        res.status(201).json({ user: newUser, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Logout user
exports.logoutUser = (req, res) => {
    // Log session before logout
    console.log('Session before logout:', req.session);

    // Clear the session
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            // Log session after logout
            console.log('Session after logout:', req.session);

            // Send a response indicating successful logout
            res.json({ message: 'Logout successful' });
        }
    });
};

// Login user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // Check if the user exists
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

        // Store the token in the session
        req.session.token = token;

        // Respond with the user and token
        res.json({ user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};