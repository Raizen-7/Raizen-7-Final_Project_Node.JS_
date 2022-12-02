const { UserServices } = require('../services')
const transporter  = require("../utils/mailer.utils");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;

    const result = await UserServices.create(newUser);

    res.status(201).json(result);

    await transporter.sendMail({
      from: "<yanesfermin07@gmail.com>",
      to: result.email,
      subject: "welcome thanks for joining",
      text: `Hello ${result.username} enjoy your shopping`,
      html: `<p>Hello<h2>${result.username} </h2>enjoy your shopping</p>`
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "oops O.o it seems that the data has been lost",
    });
  }
};

const getAllUsers = async (req, res, next) =>{
  try {
    const users = await UserServices.getAll();
    res.json({users})
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "X.x something was wrong",
    });
    
  }

}
module.exports = {
  userRegister,
  getAllUsers
};