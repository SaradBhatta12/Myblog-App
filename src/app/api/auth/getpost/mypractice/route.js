import { NextResponse } from "next/server";
import blog from "@/model/blog.models";
import { connectDB } from "@/db/connectDB";
connectDB();
export const GET = async (request) => {
  let daily = await blog.find({
    catagories: "daily",
  });
  return NextResponse.json({
    daily,
    status: 200,
    success: true,
  });
};
