const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: Number,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
    unique:true
  },

  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "admin",  
  },
});

module.exports = mongoose.model("users", userSchema);
