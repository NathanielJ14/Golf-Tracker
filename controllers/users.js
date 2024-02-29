//Acquire user model
const User = require('../models/user');

//Render register user page
module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

//Register user
module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        //Login user after creating an account
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash("success", "Welcome to Golf Tracker!");
            res.redirect('/games');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

//Render login page
module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

//Login user
module.exports.login = (req, res) => {
    req.flash('success', 'Welcome Back!');
    const redirectUrl = res.locals.returnTo || '/games';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

//Logout user
module.exports.logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/');
    });
}