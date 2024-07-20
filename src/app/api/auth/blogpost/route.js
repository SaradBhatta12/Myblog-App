import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/db/connectDB";
import { uploadImage } from "@/utils/cloudinary";
import blog from "@/model/blog.models";

connectDB();

export const POST = async (request) => {
  try {
    //user details
    let token = request.cookies.get("token");
    let decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    let userid = decoded.id;

    //take data from form
    let formdata = await request.formData();
    let title = formdata.get("title");
    let description = formdata.get("description");
    let file = formdata.get("file");
    let catagories = formdata.get("catagories");

    // upload image on cloudinary
    let up = await uploadImage(file, "sarad-scribble");
    let image = await up.secure_url;

    // create blog
    let blognew = await blog.create({
      title,
      description,
      image,
      user: userid,
      catagories,
    });

    return NextResponse.json({
      success: true,
      message: "successfully post ",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "unable to post",
      status: 422,
    });
  }
};
