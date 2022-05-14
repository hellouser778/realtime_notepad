const { application } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
const routes  = require('./routes')
const connectDb = require('./config/db')()

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api', routes)

app.listen(PORT, () => [
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`),
]);
