const { ProductServices } = require('../services');

const getStock = async (req, res, next) => {
  try {
    const stock = await ProductServices.getStock();
    res.json({stock})
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Data error",
    });
  }
};

const createProduct = async (req, res, next) =>{
    try {
        const data = req.body;
        
        const newProduct = await ProductServices.create(data)
        res.status(201).json(newProduct)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Data error",
          });
    }
};

module.exports = {
    getStock,
    createProduct
};