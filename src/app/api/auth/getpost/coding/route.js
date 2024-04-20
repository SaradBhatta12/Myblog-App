import { NextResponse } from "next/server";
import blog from "@/model/blog.models";
import { connectDB } from "@/db/connectDB";
connectDB();

export const GET = async (request) => {
  let coding = await blog.find({
    catagories: "coding",
  });
  return NextResponse.json({
    coding,
    status: 200,
    success: true,
  });
};
