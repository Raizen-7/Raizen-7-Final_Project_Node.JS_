const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "yanesfermin07@gmail.com",
      pass: process.env.M_PASSWORD,
}
});

module.exports = transporter;