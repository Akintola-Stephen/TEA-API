const mongoose = require('mongoose');
require("dotenv")


const connection = (url) => {
  return mongoose.connect(process.env.MONGODB_CONNECTION_URI
  )
}


module.exports = connection