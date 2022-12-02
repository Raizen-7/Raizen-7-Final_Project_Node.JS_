const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ProductInOrder = db.define( "productInOrder",
{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "order_id"
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
  }
},
{timestamps:false}
);

module.exports = ProductInOrder;