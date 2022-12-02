const {Router} = require ('express');
const authenticate = require ('../middlewares/auth.middleware');
const { addToCart, getAllProductsInCart } = require('../controllers');

const router = Router ();


router.post('/cart/:userId',authenticate, addToCart);
router.get('/cart/products/:userId',authenticate, getAllProductsInCart);


module.exports = router;