const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const userController = require('./app/controllers/UserController');
const deliveryController = require('./app/controllers/DeliveryController');
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Delivery Fast',
            version: '1.0.0',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./app/controllers/UserController.js', './app/controllers/DeliveryController.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
const { authenticateToken } = require('./app/auth');

app.use(express.json());

app.post('/v1/register', userController.register);

app.post('/v1/login', userController.login);

app.post('/v1/delivery', authenticateToken, deliveryController.create);

app.get('/v1/delivery/:id', authenticateToken, deliveryController.get);

app.put('/v1/delivery/:id', authenticateToken, deliveryController.put);

app.delete('/v1/delivery/:id', authenticateToken, deliveryController.delete);

app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
});

