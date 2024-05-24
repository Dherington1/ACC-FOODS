const express = require('express');
const cartController = require('../Controllers/CartController')
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); 

router.post('/addToCart', authMiddleware, cartController.addToCart);
router.get('/getCartItems', authMiddleware, cartController.getCartItems);

module.exports = router;