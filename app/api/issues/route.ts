import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/db";

export async function GET(req: NextRequest) {
  await connectDb();
  return NextResponse.json({ success: true, message: "GET issues skeleton" });
}

export async function POST(req: NextRequest) {
  await connectDb();
  return NextResponse.json({ success: true, message: "POST issue skeleton" });
}
