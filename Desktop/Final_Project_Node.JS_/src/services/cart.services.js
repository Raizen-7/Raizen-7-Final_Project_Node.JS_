const { ProductInCart, Product, Cart } = require("../models")


class CartServices {
    static async addProductToCart (product, res){
        try {
            const searchProduct = await Product.findOne({where: product.productId});
            const searchCart = await Cart.findOne({where: {userId: product.userId}})
            
            let productData = {}

            if (searchProduct && searchCart) {
                productData.cartId = searchCart.id
                productData.quantity =  product.quantity 
                productData.productId =  product.productId 
                productData.price = searchProduct.price
                productData.name = searchProduct.name
                productData.stock = searchProduct.availableQty
            } else {
                res.status(400).json({error: "oops it seems that this product does not exist"})
            }

        
            


            const add = await ProductInCart.create({
                cartId: productData.cartId,
                quantity: product.quantity,
                productId: product.productId,
                price: productData.price
            })

            
            return productData
        } catch (error) {
            throw error
        }
    }

    static async getCart (userId){
        try {
            const cart = await Cart.findOne({
                where: {userId},
                include:{
                    model: ProductInCart,
                    
                },
            })
           
            return cart
        } catch (error) {
            throw error
            
        }

    }
}

module.exports = CartServices;