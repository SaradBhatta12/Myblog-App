import mongoose, { mongo } from "mongoose";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    default: "saradbhatt2@gmail.com",
  },
  password: {
    type: String,
    required: [true, "please input your password"],
    minLeangth: [6, "you need to put at least 6 character"],
    default: "Sarad@123",
  },
  role: {
    type: String,
    default: "admin",
  },
  profilePic: {
    type: String,
    default:
      "https://avatars.githubusercontent.com/u/88665300?s=400&u=8fbf16e60db14babaf0162981a43621320b47249&v=4",
  },
  forgotPassToken: String,
  forgotPassExpires: Date,
});

const user = mongoose.models.user || mongoose.model("user", userSchema);
export default user;
