const jwt = require('jsonwebtoken');
require('dotenv').config();
const authenticate = ( req, res, next) => {
    const bearertoken = req.headers.authorization;
    if(bearertoken){
        const token = bearertoken.split("Bearer ")[1];
        try {
            const decoded = jwt.verify(token, process.env.SECRET, 'HS512')
            next();
        } catch (error) {
            next({
                status: 400,
                errorContent: error,
                message: 'The token is invalid'
            });
        }
    }

}

module.exports = authenticate;