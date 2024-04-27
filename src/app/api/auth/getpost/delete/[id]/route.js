import { NextResponse } from "next/server";
import blog from "@/model/blog.models";
import { connectDB } from "@/db/connectDB";
connectDB();

export const DELETE = async (req, { params }) => {
  try {
    let id = params.id;
    let blogData = await blog.findById(id);
    if (blogData === null)
      NextResponse.json({ message: "Blog not found", status: 404 });
    await blog.deleteOne(blogData);
    return NextResponse.json({
      message: "Blog deleted successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", status: 405 });
  }
};
