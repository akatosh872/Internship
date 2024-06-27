const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentation for your API',
        },
    },
    apis: ['./routes/*.js'], // Шлях до вашого коду маршрутів
};

const specs = swaggerJsdoc(options);

module.exports = specs;