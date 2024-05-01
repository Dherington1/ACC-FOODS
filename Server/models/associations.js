// Assuming you import models as needed
const Product = require('../models/Products');
const Category = require('../models/Categories');
const ProductCategory = require('../models/ProductCategories');

// Product to ProductCategory
Product.belongsToMany(Category, {
  through: ProductCategory,
  foreignKey: 'product_id',
  otherKey: 'category_id'
});

// Category to ProductCategory
Category.belongsToMany(Product, {
  through: ProductCategory,
  foreignKey: 'category_id',
  otherKey: 'product_id'
});
