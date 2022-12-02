const { token } = require('morgan');
const {AuthServices} = require('../services')

const userLogin = async (req, res, next) => {
    try {
        const credentials = req.body;
        const serviceResult = await AuthServices.authenticate(credentials);
        if(serviceResult){
            const { firstName, lastName, email, id } = serviceResult.result;
            const user = { firstName, lastName, email, id }
            const token = AuthServices.getToken(user)
            res.status(200).json({token, user});
        }else{
            res.status(400).json({message:'information not valid'});
        }
    } catch (error) {
        next({
            status: 400,
      errorContent: error,
      message: "Invalid Credentials",
        });
    }

}

module.exports = userLogin;