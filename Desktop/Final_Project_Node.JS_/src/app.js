const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
//Utils
const db = require("./utils/database.utils");
const transporter = require('./utils/mailer.utils');
//Middleware
const handleError = require("./middlewares/error.middleware");
//Models
const initModels = require('./models/initModels');
//Routes
const {
  authRoutes,
  cartRoutes,
  productRoutes,
  purchaseRoutes,
  usersRoutes,
} = require('./routes');


const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log("Successful authentication"))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => console.log("Base sync successfully"))
  .catch((error) => console.log(error));

  transporter.verify()
  .then(()=> console.log("Send Emails Verification"));  

app.get("/", (req, res) => {
  console.log("Welcome to server");
  res.sendStatus(200)
});

app.use('/api/v1/', usersRoutes);
app.use("/api/v1/", authRoutes);
app.use("/api/v1/", productRoutes);
app.use("/api/v1/", cartRoutes);
app.use("/api/v1/", purchaseRoutes);

app.use(handleError);

module.exports = app;
