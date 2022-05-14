const dotenv = require("dotenv").config();
const DEBUG_MODE = process.env.DEBUG_MODE;
const { ValidationError } = require("joi");

const errorHandler = (err, req, res, next) => {
  function error(statusCode, data) {
    let errorReturn =   (res.status((statusCode = 200)).send(data))
    return errorReturn
  }

  if (err instanceof ValidationError) {
    statusCode = 422;
    let data = err.message;
    error(statusCode, data);
  }else if (DEBUG_MODE === "true") {
    console.log("true");
    let originalError = err.message;

    res.status(statusCode).send(originalError);
  } else {
    console.log("false");
    data = "internal server error";
   
  }
};
module.exports = errorHandler;
