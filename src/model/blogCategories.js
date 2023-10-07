const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Categories = mongoose.model("Categories", CategoriesSchema);

module.exports = Categories;
