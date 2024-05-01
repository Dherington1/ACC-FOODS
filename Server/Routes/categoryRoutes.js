const express = require('express');
const categoryController = require('../Controllers/CategoryController');
const router = express.Router();

router.get('/chosen', categoryController.getPickedCategory);

module.exports = router;