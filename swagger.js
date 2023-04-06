const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/post/ping.ts"];

swaggerAutogen(outputFile, endpointsFiles);
