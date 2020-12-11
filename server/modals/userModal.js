const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: "Please Enter EmployeeID",
  },
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
employeeSchema.pre("save", function(next) {
  this.password = bcryptjs.hashSync(this.password, 10);
  next();
});


//TODO : authenticate input against database


// Creating an instance of the model
module.exports = mongoose.model("Employee", employeeSchema);
