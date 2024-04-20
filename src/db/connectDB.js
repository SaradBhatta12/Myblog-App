import mongoose from "mongoose";
export const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "blog-sarad",
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err + "unable to connect with db");
    });
};
