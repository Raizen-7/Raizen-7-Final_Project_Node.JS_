const {Router} = require ('express');
const authenticate = require ('../middlewares/auth.middleware');
const { getStock, create, createProduct } = require('../controllers');

const router = Router ();


router.post('/products/create',authenticate, createProduct);
router.get('/products',authenticate, getStock);


module.exports = router;