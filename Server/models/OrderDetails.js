const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderDetails extends Model {}

OrderDetails.init(
  {
    order_details_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders', 
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products', 
        key: 'product_id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1 
      }
    },
    price_per_unit: {
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderdetails' 
  }
);

module.exports = OrderDetails;




// Carts -> User -> check out -> Orders -> User
//   ^
//   |
// Cart Items 
//   ^
//   |
// Products 