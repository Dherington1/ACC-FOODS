const express = require('express');
const userController = require('../Controllers/userController')

const router = express.Router();

router.get('/allUserData', userController.allUserData)
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/getUserById', userController.getUserById);
router.get('/logout', userController.logoutUser);


module.exports = router;
