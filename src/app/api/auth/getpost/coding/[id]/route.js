import { NextResponse } from "next/server";
import { connectDB } from "@/db/connectDB";
import blog from "@/model/blog.models";
import user from "@/model/user.models";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const id = params.id;
    const data = await blog.findById(id);
    if (!data) {
      return NextResponse.json({
        success: false,
        message: "data not found",
      });
    }
    const User = await user.findById(data.user);
    return NextResponse.json({
      success: true,
      User,
      data,
      message: "successfully get data",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
