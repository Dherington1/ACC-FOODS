const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs');

class User extends Model {
  // Method to compare entered password with hashed password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'customer',
      validate: {
        isIn: [['customer', 'owner', 'employee']]
      }
    },
  },
  {
    hooks: {
      // beforeCreate lifecycle hook is used to hash password before a User is created
      async beforeCreate(newUser) {
        newUser.password = await bcrypt.hash(newUser.password, 12);
        return newUser;
      },
      // beforeUpdate lifecycle hook is used to hash password before a User is updated
      async beforeUpdate(updatedUser) {
        if (updatedUser.changed('password')) {
          updatedUser.password = await bcrypt.hash(updatedUser.password, 12);
        }
        return updatedUser;
      }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
    timestamps: false,
  }
);

module.exports = User;
