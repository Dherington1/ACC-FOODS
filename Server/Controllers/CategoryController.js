const express = require('express');
const Category = require('../models/Categories');
const Product = require('../models/Products');
const catchAsync = require('../utilities/catchAsync')
const sequelize = require('sequelize'); 


exports.getPickedCategory = catchAsync(async (req, res, next) => {
    const { name } = req.query;  

    try {
        const categoryWithProducts = await Category.findOne({
            where: { name: name }, 
            include: [{
                model: Product,
                through: {
                    attributes: []  
                }
            }]
        });
        console.log('categoryWithProducts ', categoryWithProducts.products);

        if (!categoryWithProducts) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Respond with the products of the found category
        res.status(200).json(categoryWithProducts.products);
    } catch (error) {
        // Handle errors and send response
        res.status(500).json({ error: error.message });
    }
});

