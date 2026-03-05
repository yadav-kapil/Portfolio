const mongoose = require('mongoose');

const connectDB = async () => {
    console.log("MONGO INIT")
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo Connected Success");
}

module.exports = connectDB;