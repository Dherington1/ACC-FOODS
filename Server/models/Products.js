const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    store: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false,
      validate: {
        isDecimal: true, 
        min: 0 
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true 
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'products',
    timestamps: false
  }
);

module.exports = Product;
