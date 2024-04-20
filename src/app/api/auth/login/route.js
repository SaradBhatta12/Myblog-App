const { connectDB } = require("@/db/connectDB");
import user from "@/model/user.models";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

connectDB();
// export async function GET() {
//   await user.create({ email: "saradbhatt2@gmail.com", password: "Sarad@123" });
//   return NextResponse.json({ message: "user created", status: 200 });
// }

export async function POST(request) {
  try {
    let { email, password } = await request.json();
    console.log(email, password);
    let userExist = await user.findOne({ email });
    if (!userExist) {
      await user.create({
        email: "saradbhatt2@gmail.com",
        password: "Sarad@123",
      });
      return NextResponse.json({ message: "user created you need to login" });
    }
    if (userExist.password !== password) {
      return NextResponse.json({ message: "password is incorrect" });
    }
    let token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET);
    cookies().set("token", token);
    return NextResponse.json({ message: "login success" });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `unable to login ${error}`,
    });
  }
}
