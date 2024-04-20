import mongoose from "mongoose";
let blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    catagories: {
      type: String,
      default: "coding",
    },
  },
  { timestamps: true }
);

const blog = mongoose.models.blog || mongoose.model("blog", blogSchema);

export default blog;
