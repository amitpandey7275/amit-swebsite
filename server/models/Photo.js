const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
image:String
});

module.exports = mongoose.model("Photo", photoSchema);