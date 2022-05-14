const mongoose = require("mongoose");
const dotenv = require('dotenv').config()

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
      console.log("database connected ......");
  } catch (err) {
    console.log({
      error: err,
      message: "some error occured in database",
    });
    process.exit(1);
  }
};

module.exports = connectDb;
