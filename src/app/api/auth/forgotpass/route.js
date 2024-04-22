import { NextResponse } from "next/server";
import user from "@/model/user.models";
import { connectDB } from "@/db/connectDB";

export const POST = async (request) => {
  const { email } = await request.json();

  if (!email === "saradbhatt2@gmail.com")
    return NextResponse.json({
      success: false,
      message: "unable to find you in db",
      status: 404,
    });
};
