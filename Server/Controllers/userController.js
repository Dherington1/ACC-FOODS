const User = require('../models/Users'); 
const catchAsync = require('../utilities/catchAsync')
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// register
exports.register = catchAsync(async (req, res, next) => {
    const { name, email, password } = req.body;
    console.log('username ', name);

    User.create({ name, email, password })
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
        if (err.name === 'SequelizeUniqueConstraintError') {
            const errors = err.errors.map(error => error.message);
            return res.status(400).json({
                status: 'fail',
                message: 'Validation error',
                errors: errors
            });
        } else if (err.name === 'SequelizeValidationError') {
            const errors = err.errors.map(error => error.message);
            return res.status(400).json({
                status: 'fail',
                message: 'Validation error',
                errors: errors
            });
        } else {
            return next(err);
        }
    });
});

// login a user
exports.login = catchAsync(async (req, res, next) => {
    const {name, password} = req.body;

    // Fetch the user
    const user = await User.findOne({ where: { name } });

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

    // get rid of password when sending back 
    const userWithoutPassword = {...user.get({ plain: true })};
    delete userWithoutPassword.password;

    // Send status
    res.status(200).json({
        status: 'success',
        token,
        data: {
            user: userWithoutPassword
        }
    });
});















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