const { 
    User,
    Product,
    Cart,
    ProductInCart,
    Order,
    ProductInOrder,
} = require("./index");

const initModels = () => {
    User.hasMany(Product, { foreignKey: "user_id"});
    Product.belongsTo(User, { foreignKey: "user_id"});

    User.hasOne(Cart);
    Cart.belongsTo(User);

    User.hasMany(Order, {as:"order", foreignKey: "user_id"});
    Order.belongsTo(User, {as:"purchase", foreignKey: "user_id"});

    Product.belongsToMany(Order, {through: ProductInOrder});
    Order.belongsToMany(Product, {through: ProductInOrder });

    Product.hasMany(ProductInOrder);
    ProductInOrder.belongsTo(Product);
    Order.hasMany(ProductInOrder);
    ProductInOrder.belongsTo(Order);

    Product.belongsToMany(Cart, {through:ProductInCart});
    Cart.belongsToMany(Product, {through: ProductInCart});

    Product.hasMany(ProductInCart);
    ProductInCart.belongsTo(Product);
    Cart.hasMany(ProductInCart);
    ProductInCart.belongsTo(Cart);

};

module.exports = initModels;