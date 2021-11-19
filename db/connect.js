const mongoose = require('mongoose');
require("dotenv")


const connection = (url) => {
  return mongoose.connect(process.env.MONGODB_CONNECTION_URI, {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  },
    function (err) {
      if (err) return console.log("Error: ", err);
      console.log(
        "MongoDB Connection -- Ready state is:",
        mongoose.connection.readyState
      );
    }
  )
}


module.exports = connection