const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const server = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser')

//import the keys
const key = require('./config/keys')
//inport the routes for the app
const users = require('./routes/api/users');

require("dotenv").config();

server.use(express.static('public'));
server.use(cors());

server.use(express.static(path.join(__dirname, "client", "build")))

// Body parser middleware
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use(bodyParser.json());


mongoose
  .connect(key.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));




server.options('*', cors());


// Use Routes
server.use('/api/users', users);


const port = process.env.PORT || 3030;

server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});