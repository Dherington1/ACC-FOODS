const express = require('express');
const Product = require('../models/Products');
const catchAsync = require('../utilities/catchAsync')
const sequelize = require('sequelize'); // Import the Op symbol for operators

exports.getSearchProducts = async (req, res, next) => {
    const { title } = req.query;

    if (!title) {
        res.status(400).send({ message: "No search term provided" });
        return;
    }

    try {
        const products = await Product.findAll({
            where: sequelize.where(
                sequelize.fn('LOWER', sequelize.col('name')),
                'LIKE',
                '%' + title.toLowerCase() + '%'
            )
        });
        

        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send({ message: "Error fetching products" });
    }
};
