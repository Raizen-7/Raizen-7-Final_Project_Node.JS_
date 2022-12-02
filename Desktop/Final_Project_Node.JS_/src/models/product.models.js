const db = require("../utils/database.utils");
const { DataTypes } = require("sequelize");


const Product = db.define( "product",
  {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
     name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productImage:{
        type: DataTypes.STRING,
        field: "product_image",
        allowNull: true
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      userId: {
      field: "user_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }
);
  
  module.exports = Product;