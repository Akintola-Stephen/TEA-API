require('dotenv').config();
const express = require('express');
const conn = require('./db/connect');
const routes = require('./routes/tea'); // import the routes
const helmet = require('helmet');
const compression = require('compression');
const app = express();

app.use(helmet());
app.use(compression()); //Compress all routes

app.use(express.json());

app.use('/', routes); //to use the routes

// add this below app.use("/", routes) to make index.html a static file
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
  });


const port = 3000;

const start = async () => {
  try {
    await conn(process.env.MONGODB_CONNECTION_URI)
    app.listen(port, console.log(`Connected succesfully!!! App is listening on port ${port}`));
  }
  catch (err) {
    console.log(err)
  }
}

start()
