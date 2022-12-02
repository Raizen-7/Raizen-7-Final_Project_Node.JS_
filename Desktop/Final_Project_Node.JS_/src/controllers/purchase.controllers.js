const { PurchaseServices, UserServices } = require("../services");
const transporter = require("../utils/mailer.utils");

const purchase = async (req, res, next) =>{
    try {
        const {userId} = req.params
      

        const data = Number(userId)

        const user = await UserServices.getOneUser(userId)
        const result = await PurchaseServices.createOrder(data)
       

        res.status(201).json(result)

        await transporter.sendMail({
            from: "<yanesfermin07@gmail.com>",
            to: user.email,
            subject: "Thanks for your purchase",
            text: `Hello ${user.username} enjoy our Product`,
            html: `<p>Hello<h1>${user.username} </h1>enjoy our Product</p>`
          });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "X.x error, something went wrong, purchase failed"
        })
    }
};

const getAll = async (req, res, next) => {
    try {
        const {userId} = req.params

        const data = Number(userId)
        const result = await PurchaseServices.seeOrders(data)
        res.json(result)

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "error"
        })
    }
};

module.exports = {
    purchase,
    getAll
};