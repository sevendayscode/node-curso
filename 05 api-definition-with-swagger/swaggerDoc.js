const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: 'Test API',
        version: '1.0.0',
        description: 'Seven Days Code API definition'
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ['./index.js'],
  };
  
  const openapiSpecification = swaggerJsDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));
}