const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/nestfinders";

main().then(() => {
    console.log("connected to db");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({}); // used to delete existing data
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

// initData.data.forEach(item => {
// item.image = String(item.image);
//});

initDB();