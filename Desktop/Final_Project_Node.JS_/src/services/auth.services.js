const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthServices{
    static async authenticate (credentials){
        try {
            const { email, password } = credentials;
            const result = await User.findOne({
                where:{email}
            })
            
            if (result){
                const isValid = bcrypt.compareSync( password, result.password);
                return isValid ? { isValid, result} : isValid 
            }else{
                return isValid
            }
            
        } catch (error) {
            throw error
        }
    }
    static getToken (data){
        try {
            const token = jwt.sign( data, process.env.SECRET, {
            algorithm:'HS512',
            expiresIn: '300'
            } );
            return token
        } catch (error) {
            throw error
            
        }

    }
}

module.exports = AuthServices;