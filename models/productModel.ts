import category from "./category";

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  DistcountPrice: {
    type: Number,
    required: true,
  },

  rating: {
    type: Number,
    required: false,
  },

  Image: {
    type: String,
    required: false,
  },
  discription: {
    type: String,
    required: false,
  },
  categary: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "categary",
  },
});

module.exports = mongoose.model("Product", productSchema);
