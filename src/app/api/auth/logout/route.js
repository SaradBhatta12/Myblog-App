import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export const GET = async (request) => {
  const token = request.cookies.get("token");
  if (!token) {
    return NextResponse.json({
      message: "you already logged out",
    });
  }

  cookies().delete("token");
  return NextResponse.json({
    message: "successfully logged out",
    token: null,
    status: 200,
  });
};
