const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: "Please Enter Username",
  },

  password: {
    type: String,
    required: "Please Enter Password",
  },
  accessLevel: {
    type: String,
    required: "Please Select Access Level",
  },
});

// hashing a paswword before saving it to the database pre-save hook
userSchema.pre("save", function (next) {
  this.password = bcryptjs.hashSync(this.password, 10);
  next();
});

//authenticate input against database
userSchema.statics.authenticate = async function (username, password) {
  const user = await this.findOne({ username: username });
  if (!user) {
    throw new Error("User not found.");
  }
  const match = await bcryptjs.compare(password, user.password);
  if (match) {
    return user;
  }
};

// Creating an instance of the model
module.exports = mongoose.model("User", userSchema);
