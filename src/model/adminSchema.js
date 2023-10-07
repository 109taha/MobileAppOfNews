const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      require: true,
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      trim: true,
      require: true,
    },
    phone_number: {
      type: Number,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
