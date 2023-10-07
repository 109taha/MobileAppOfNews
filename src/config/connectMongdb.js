const mongoose = require("mongoose");

const DB_URL = process.env.MongodbUrl || "mongodb://127.0.0.1:27017/NEWS";
async function connectToMongoDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("mongoose connected! ");
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectToMongoDB;
