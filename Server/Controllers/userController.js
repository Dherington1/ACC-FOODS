const User = require('../models/Users'); 
const catchAsync = require('../utilities/catchAsync')
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// register
exports.register = catchAsync(async (req, res, next) => {
    const { first_name, last_name, email, password } = req.body;
    console.log('first_name, last_name, ', first_name, last_name,);

    User.create({ first_name, last_name, email, password })
    .then(user => {
        // Create JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        
        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: user
            }
        });
        
    })
    .catch(err => {
        console.log(err.message);
        return res.status(500).json({
            status: 'error',
            message: 'An error occurred during registration.'
        });
    });
});

// login a user
exports.login = catchAsync(async (req, res, next) => {
    const {email, password} = req.body;

    // Fetch the user
    const user = await User.findOne({ where: { email } });

    if (!user) {
        return res.status(404).json({
            status: 'fail',
            message: 'User not found'
        });
    }

    // Compare passwords
    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
        return res.status(401).json({
            status: 'fail',
            message: 'Incorrect password'
        });
    }

    // Create JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    // Set the token in an HTTP-only cookie
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Send over https in production
        sameSite: 'strict', // Strictly limit cookie to your site's requests
        expiresIn: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
    });

    // Get rid of password when sending back the user data
    const userWithoutPassword = {...user.get({ plain: true })};
    delete userWithoutPassword.password;

    // Send success response without the token in the body
    res.status(200).json({
        status: 'success',
        data: {
            user: userWithoutPassword
        }
    });
});


// get user by ID
exports.getUserById = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            res.status(401).json({
                status: 'fail',
                message: 'you are not logged in'
            })
        }

        // Verify and decode the token to extract the user ID or other payload data
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // With the decoded ID, you can now fetch the user details
        // Assuming the decoded token includes the user ID
        const userId = decoded.id;
        const user = await User.findById(userId);

        // Return the user information, excluding sensitive data like passwords
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });

    } catch (err) {
        console.log(err.message);
    }
}

// logout user
exports.logoutUser = (req, res) => {
    res.clearCookie('token', { 
        httpOnly: true, 
        secure: process.env.NODE_ENV !== 'development', // Use 'secure' in production
        sameSite: 'strict',
    });
    res.status(200).json({ message: 'Logged out successfully' });
};



// get all users http://localhost:8080/api/v1/users/allUserData
exports.allUserData = async (req, res, next) => {
  const users = await User.findAll({
    attributes: { exclude: ['hashed_password', 'created_at', 'updated_at'] } 
  });

  // Check if users were found
  if (users.length === 0) {
    return res.status(404).json({
      status: 'fail',
      message: 'No users found'
    });
  }

  // Send back the user data
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
};