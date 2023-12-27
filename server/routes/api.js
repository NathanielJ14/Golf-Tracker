const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/users', userController.createUser);

// Logout user
router.get('/logout', userController.logoutUser);

// Login user
router.post('/login', userController.loginUser);

module.exports = router;
