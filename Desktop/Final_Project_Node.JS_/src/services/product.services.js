const { token } = require('morgan');
const { Product, User } = require ('../models');

class ProductServices{
    static async getStock (){
        try {
            const result = await Product.findAll({
                attributes:{
                    exclude:["createdAt", "updatedAt"]
                },
                include:{
                    model:User,
                    attributes:["username"]
                },
            });
            console.log(result)
            const stock= []
            result.map((product)=>{
                if(product.availableQty > 0 ){
                    stock.push(product)
                }else{
                    return "Empty Stock"
                }
            });
            
            return stock
        } catch (error) {
            throw error
            
        }
    }

    static async create (data){
        try {
            const newProduct = await Product.create(data);
            
            return newProduct
        } catch (error) {
            throw error
            
        }
    }
};

module.exports = ProductServices;