import { NextResponse } from "next/server";
import blog from "@/model/blog.models";
import { connectDB } from "@/db/connectDB";

connectDB();
export async function GET(request, { params }) {
  const id = params.id;
  const Blog = await blog.findById(id);
  if (!Blog)
    return NextResponse.json({
      message: "blog not found",
      status: 404,
    });

  return NextResponse.json({
    message: "blog found",
    status: 200,
    data: Blog,
  });
}
