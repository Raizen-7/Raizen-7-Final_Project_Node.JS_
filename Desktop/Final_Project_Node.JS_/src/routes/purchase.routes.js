const {Router} = require('express');
const authenticate = require('../middlewares/auth.middleware');
const { purchase, getAll } = require('../controllers');


const router = Router();


router.post('/purchases/:userId', authenticate, purchase);
router.get('/purchases/:userId', authenticate,  getAll);



module.exports = router;