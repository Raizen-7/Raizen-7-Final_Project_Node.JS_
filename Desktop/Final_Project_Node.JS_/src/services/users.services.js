const { User, Cart } = require ('../models');

class UserServices{
    static async create (newUser){
        try {
            const result = await User.create(newUser);
            
            const createCart = await Cart.create( {
                totalPrice: 0,
                userId: result.id,
              })
            return result;
            
        } catch (error) {
            throw error;
        }
    }

    static async getOneUser (userId){
        try {
            const userData = await User.findOne({where: {id: userId}})
            return userData
        } catch (error) {
            throw error
        }
    }

    static async getAll(){
        try {
            const result = await User.findAll();
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices;