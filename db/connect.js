const mongoose = require('mongoose');

const connectDB = (url) => {
  console.log("MongoDB Connected");
  return mongoose.connect(url)
}
module.exports = connectDB;
//1:11 youtube