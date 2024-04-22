import { NextResponse } from "next/server";
import blog from "@/model/blog.models";
import { connectDB } from "@/db/connectDB";
connectDB();

export const GET = async (req, { params }) => {
  try {
    let id = params.id;
    await blog.findByIdAndDelete(id);
    return NextResponse.json({
      message: "Blog deleted successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", status: 405 });
  }
};
