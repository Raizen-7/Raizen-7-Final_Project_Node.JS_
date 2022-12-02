const {Router} = require('express');
const authenticate = require ('../middlewares/auth.middleware');
const { userRegister, getAllUsers } = require('../controllers');


const router = Router();


router.post('/users/register', userRegister);
router.get('/users', authenticate, getAllUsers);


module.exports = router;