const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Order = db.define( "order",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            },
        totalPrice:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id"
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }
);

module.exports = Order;