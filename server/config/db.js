const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://kapil:KapilYadavIiestMongo5555@kapil-yadav.22lq44k.mongodb.net/portfolioDB?appName=kapil-yadav");
    console.log("Mongo Connected Success");
}

module.exports = connectDB;