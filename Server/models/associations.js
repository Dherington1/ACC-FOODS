// Assuming you import models as needed
const Product = require('../models/Products');
const Category = require('../models/Categories');
const ProductCategory = require('../models/ProductCategories');
const User = require('./User');
const Carts = require('./Carts');
const CartItem = require('./CartItems')

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


User.hasMany(Carts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Carts.belongsTo(User, {
  foreignKey: 'user_id',
});


Carts.hasMany(CartItem, {
  foreignKey: 'cart_id',
  onDelete: 'CASCADE',
});

CartItem.belongsTo(Carts, {
  foreignKey: 'cart_id',
});

Product.hasMany(CartItem, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

CartItem.belongsTo(Product, {
  foreignKey: 'product_id',
});

module.exports = { User, Carts, Product, CartItem };
