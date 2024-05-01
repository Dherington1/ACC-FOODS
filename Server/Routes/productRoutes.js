const express = require('express');
const productController = require('../Controllers/productController');

const router = express.Router();

router.get('/search', productController.getSearchProducts);

module.exports = router;
