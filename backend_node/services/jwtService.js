const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const genToken = (data, expiry = "60s") => {
  const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: expiry });
  console.log(token);
  return token;
};

module.exports = genToken;
