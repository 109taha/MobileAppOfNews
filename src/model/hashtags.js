const mongoose = require("mongoose");

const HashTagsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const HashTags = mongoose.model("HashTags", HashTagsSchema);

module.exports = HashTags;
