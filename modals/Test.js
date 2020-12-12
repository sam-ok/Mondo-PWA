const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  answer: String
});

// Creating an instance of the model.
module.exports = mongoose.model("Test", testSchema);
