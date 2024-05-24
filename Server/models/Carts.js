const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Adjust the path as needed

class Cart extends Model {}

Cart.init(
  {
    carts_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id',
      },
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts',
    timestamps: false,
  }
);

module.exports = Cart;
