import mongoose, { mongo } from "mongoose";

const commentSchema = new Schema(
  {
    text: {
      type: string,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const comment = mongoose.model("comment", commentSchema);
export default mongoose.models.comment || comment;
