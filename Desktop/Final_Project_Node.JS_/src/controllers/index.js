const userLogin = require('./auth.controllers.js');
const  { userRegister, getAllUsers } = require('./user.controllers.js');
const { getStock,createProduct } = require('./product.controllers');
const { addToCart, getAllProductsInCart } = require('./cart.controllers');
const { purchase, getAll } = require('./purchase.controllers')



module.exports = {
    userLogin,
    userRegister,
    getAllUsers,
    getStock,
    createProduct,
    addToCart,
    getAllProductsInCart,
    purchase,
    getAll
};