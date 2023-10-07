const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    query: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Query = mongoose.model("Query", QuerySchema);

module.exports = Query;
