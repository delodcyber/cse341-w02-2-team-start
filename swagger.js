const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple API',
    description: 'API documentation for the Temple API'
  },
  host: 'localhost:8080',
  schemes: ['http'],

  definitions: {
    Temple: {
      temple_id: 1,
      name: "Aba Nigeria Temple",
      location: "Aba, Nigeria",
      dedicated: "2005-08-07",
      additionalInfo: true
    }
  }
};

const outputFile = './swagger.json';
const endpointsFiles = [
    './index.js'
];
swaggerAutogen(outputFile, endpointsFiles, doc);