const { application } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
const routes  = require('./routes')
const connectDb = require('./config/db')()

// FOR THE IMPLEMENTATION OF SOCKET 
const http = require('http')
const socket_server = http.createServer(app)
const {server} = require('socket.io')
const io = new Server(server)
// ---------------------------- 

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api', routes)

// Socket server evenets hit 
io.on('connection', (socket)=>{
  console.log('user is connected')
});

app.listen(PORT, () => [
  console.log(`server running on  http://localhost:${PORT}`),
]);
