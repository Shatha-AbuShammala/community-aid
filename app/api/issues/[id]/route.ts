import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/db";

export async function GET(req: NextRequest, context: any) {
  await connectDb();
  const { id } = context.params;
  return NextResponse.json({ success: true, message: `GET skeleton for id ${id}` });
}

export async function PUT(req: NextRequest, context: any) {
  await connectDb();
  const { id } = context.params;
  return NextResponse.json({ success: true, message: `PUT skeleton for id ${id}` });
}

export async function DELETE(req: NextRequest, context: any) {
  await connectDb();
  const { id } = context.params;
  return NextResponse.json({ success: true, message: `DELETE skeleton for id ${id}` });
}
