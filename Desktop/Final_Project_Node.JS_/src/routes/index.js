const authRoutes = require ('./auth.routes.js');
const usersRoutes = require('./users.routes.js');
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');
const purchaseRoutes =  require('./purchase.routes')

module.exports={
    authRoutes,
    usersRoutes,
    productRoutes,
    cartRoutes,
    purchaseRoutes
};