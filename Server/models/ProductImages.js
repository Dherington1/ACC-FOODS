const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductImages extends Model {}

ProductImages.init(
  {
    // Define columns here
    image_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products', 
        key: 'id'
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_images' 
  }
);

module.exports = ProductImages;
