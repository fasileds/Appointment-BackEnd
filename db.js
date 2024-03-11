const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectToMongo = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("DATABASE CONNECTED");
    })
    .catch((err) => {
      console.log("OH NO ERROR!!!!");
      console.log(err);
    });
};
module.exports = connectToMongo;
