// importar las dos dependencias de swagger
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecommerce",
            version: "1.0.0",
            description: "This API is for create a eCommerce."
        }
    },
    apis: [
        "./src/routes/users.routes.js",
        "./src/models/user.models.js",
        "./src/routes/auth.routes.js",
        "./src/models/product.models.js",
        "./src/routes/product.routes.js",
        "./src/models/cart.models.js",
        "./src/routes/cart.routes.js",
        "./src/models/purchase.models.js",
        "./src/routes/purchase.routes.js",
    ]
};

const swaggerSpec = swaggerJSDoc(options);

// funcion para configurar la documentacion

const swaggerDocs = (app, port)=>{
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    app.get("/api/v1/docs.json", (req, res)=>{

        res.setHeader("ContentType", "application/json");
        res.send(swaggerSpec)
    })
    console.log(`documentacion disponible en http://localhost:${port}/api/v1/docs`);
};

module.exports = swaggerDocs;