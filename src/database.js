const mongoose = require("mongoose");
require("dotenv").config();

// DB connection
const connectDB = () =>
  new Promise((resolve, reject) => {
    mongoose
      .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log("Database connection stablished");
        resolve();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        reject(err);
      });
  });

module.exports = { connectDB };
