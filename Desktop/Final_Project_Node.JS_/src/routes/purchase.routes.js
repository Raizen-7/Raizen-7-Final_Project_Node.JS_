const {Router} = require('express');
const { purchase, getAll } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();


router.post('/purchases/:userId', authenticate, purchase);
router.get('/purchases/:userId', authenticate,  getAll);



module.exports = router;