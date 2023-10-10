const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Admin",
    },
    featureImg: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    data: [
      {
        ctype: {
          type: String,
          enum: ["image", "heading", "text"],
          require: true,
        },
        content: {
          type: String,
          require: true,
        },
      },
    ],
    categories: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Categories",
          require: true,
        },
      ],
    },
    hashtags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HashTags",
      },
    ],
    views: {
      type: Number,
    },
    commentId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);
const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
