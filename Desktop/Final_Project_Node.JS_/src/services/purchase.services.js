const { Cart, ProductInCart, ProductInOrder, Order } = require("../models");
const { forEach } = require("p-iteration");

class PurchaseServices {
  static async createOrder(data) {
    try {
      const createOrder = await Order.create({
        userId: data,
        totalPrice: 0,
        status: true,
      });

      const orderId = createOrder.id;

      const getCartData = await Cart.findOne({
        where: { userId: data },
        include: {
          model: ProductInCart,
        },
      });

      if (getCartData.productInCarts.length != 0) {
      
        const productList = getCartData.productInCarts;

        const newList = productList.map((product) => {
          return {
            orderId,
            productId: product.productId,
            quantity: product.quantity,
            price: product.price,
            status: true,
          };
        });

        console.log("NEW LIST", newList);

        await forEach(
          newList,
          async (element) => await ProductInOrder.create(element)
        );

        const getOrderData = await Order.findOne({
          where: { id: orderId },
          include: {
            model: ProductInOrder,
          },
        });

        const emptyCart = await ProductInCart.destroy({
          where: { cartId: getCartData.id },
        });

        return getOrderData;
      } else {
        return "Empty Cart";
      }
    } catch (error) {
      throw error;
    }
  }

  static async seeOrders(data) {
    try {
      const getOrders = await Order.findAll({
        where: { userId: data },
        include: {
          model: ProductInOrder,
        },
      });

      return getOrders;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PurchaseServices;