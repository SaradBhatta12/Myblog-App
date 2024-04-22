import { NextResponse } from "next/server";
import blog from "@/model/blog.models";
import { connectDB } from "@/db/connectDB";
import uploadImage from "@/utils/cloudinary";

export const POST = async (request, { params }) => {
  try {
    await connectDB();

    //get data from formdata
    const formdata = await request.FormData();
    let title = formdata.get("title");
    let description = formdata.get("description");
    let file = formdata.get("file");
    const img = uploadImage(file, "updated-image");
    const image = img.secure_url;
    let catagories = formdata.get("catagories");

    //get data from id
    const id = await params.id;
    const post = await blog.findByIdAndDelete(
      id,
      {
        title: title,
        description: description,
        image: image,
        catagories: catagories,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    return NextResponse.json({
      success: true,
      message: "successfully updated your post",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "unable updated your post",
      status: 405,
    });
  }
};
