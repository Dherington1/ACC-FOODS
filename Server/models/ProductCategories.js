const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductCategories extends Model {}

ProductCategories.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products', 
        key: 'id',
      },
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_categories',
    timestamps: false, 
  }
);

module.exports = ProductCategories;
