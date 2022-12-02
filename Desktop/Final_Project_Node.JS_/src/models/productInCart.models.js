const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ProductInCart = db.define(
    "productInCart", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "cart_id"
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "product_id"
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, 
{timestamps:false}
);

module.exports = ProductInCart;