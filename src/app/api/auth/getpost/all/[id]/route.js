import { NextResponse } from "next/server";
import blog from "@/model/blog.models";
import { connectDB } from "@/db/connectDB";
import user from "@/model/user.models";

connectDB();

export const GET = async (request, { params }) => {
  try {
    let postId = params.id;
    const Blog = await blog.findById(postId);
    if (!Blog)
      return NextResponse.json({
        success: false,
        message: "Blog not found",
        status: 404,
      });
    const User = await user.findById(Blog.user);
    return NextResponse.json({
      success: true,
      message: "successfully searched",
      Blog,
      User,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error,
      status: 500,
    });
  }
};
