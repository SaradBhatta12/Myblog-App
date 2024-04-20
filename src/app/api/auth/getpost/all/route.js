import { NextResponse } from "next/server";
import blog from "@/model/blog.models";
import { connectDB } from "@/db/connectDB";

connectDB();
export const GET = async (request) => {
  let allblogs = await blog.find();
  return NextResponse.json({
    allblogs,
    status: 200,
    success: true,
  });
};
