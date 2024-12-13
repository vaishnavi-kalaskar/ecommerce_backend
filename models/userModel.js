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

  address: {
    type: String,
    required: false,
  },

  profileImage: {
    type: String,
    required: false,
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref:'Users'
  },
  wishList: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref:'Users'
  },
});

module.exports = mongoose.model("Users", userSchema);
