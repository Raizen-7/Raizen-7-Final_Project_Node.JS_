const db = require("../utils/database");
const initModels = require("../models/initModels");
const { forEach } = require("p-iteration");
const { User,Product,Order,ProductInCart,ProductInOrder,Cart  } = require("../models");

initModels();

const user = [
  {
    username: "Fermin",
    email: "fermin@gmail.com",
    password: "1234",
  },
  {
    username: "Noelis",
    email: "Lisy@gmail.com",
    password: "1234",
  },
  {
    username: "Sandra",
    email: "sandy@gmail.com",
    password: "1234",
  },
  {
    username: "Alejandro",
    email: "alex@gmail.com",
    password: "1234",
  },
  {
    username: "Miguel",
    email: "mike@gmail.com",
    password: "1234",
  }
];

const product = [
  {
    name: "iphone 13",
    price: 20000,
    availableQty: 23,
    status: true,
    userId: 1
  },
  {
    name: "iphone 14",
    price: 30000,
    availableQty: 24,
    status: true,
    userId: 2
  },
  {
    name: "ipad Pro 11",
    price: 13000,
    availableQty: 21,
    status: true,
    userId: 3
  },
  {
    name: "MacBook Air 2022",
    price: 23000,
    availableQty: 22,
    status: true,
    userId: 4
  },
  {
    name: "Air pods Pro 3",
    price: 8000,
    availableQty: 23,
    status: true,
    userId: 5
  },

];

const order = [
  {
    totalPrice: 20000,
    userId:1,
    status: true,
  },
  {
    totalPrice: 30000,
    userId:2,
    status: true,
  },
  {
    totalPrice: 13000,
    userId:3,
    status: true,
  },
];

const cart =[
  {
    totalPrice: 3000,
    userId:1,
    status: true,
  },
  {
    totalPrice: 43000,
    userId:2,
    status: true,
  }, {
    totalPrice: 25000,
    userId:3,
    status: true,
  },
  {
    totalPrice: 23000,
    userId:4,
    status: true,
  },
  {
    totalPrice: 8000,
    userId:5,
    status: true,
  },
  
];

const productInCart = [
  {
    cartId: 1,
    productId: 4,
    quantity: 1,
    price: 23000,
    status: true
  },
  {
    cartId: 2,
    productId: 5,
    quantity: 1,
    price: 8000,
    status: true
  }
];

const productInOrder = [
  {
    orderId:1,  
    productId:1,
    quantity: 1,
    price: 20000,
    status:false
  },
  {
    orderId:2,
    productId:2,
    quantity: 1,
    price:30000,
    status:false
  },
  {
    orderId:3,
    productId:3,
    quantity: 1,
    price: 13000,
    status:false
  },
  
];

async function seeding(){
  await db.sync({force: true})

  await forEach(user, (user)=> User.create(user))
  await forEach(product, (product)=> Product.create(product))
  await forEach(cart, (cart)=> Cart.create(cart))
  await forEach(order, (order)=> Order.create(order))
  await forEach(productInCart, (pic) => ProductInCart.create(pic))
  await forEach(productInOrder, (pio)=> ProductInOrder.create(pio))
  
};
seeding();