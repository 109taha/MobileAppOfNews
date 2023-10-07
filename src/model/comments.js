const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    comment: {
      type: String,
      require: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Blog",
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
