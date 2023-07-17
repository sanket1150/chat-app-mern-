const mongoose = require('mongoose');

const connectToDb = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/tomperchatdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) =>
      console.log(`Database connected with ${data.connection.host}${process.env.DB_URI}`)
    )
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    });
};

module.exports = connectToDb;
