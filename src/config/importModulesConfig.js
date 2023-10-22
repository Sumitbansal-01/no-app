module.exports = {
    joi: () => require('joi'),
    express: () => require('express'),
    csv: () => require('csv-parser'),
    readable: () => require('stream'),
    fs: () => require('fs'),
    fileUploader: () => require("express-fileupload"),
    dotenv: () => require('dotenv').config(),
    swaggerUi: () => require("swagger-ui-express"),
    swaggerJsdoc: () => require("swagger-jsdoc")
};
