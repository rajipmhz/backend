const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // your Sequelize instance

const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  item_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  no_of_items: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    defaultValue: 'pending',
  },
}, {
  tableName:'carts',
  timestamps: true,
});

module.exports = Cart;
