// app/api/health-db/route.ts
import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";

export async function GET() {
  try {
    await connectDb();
    return NextResponse.json({ ok: true, message: "DB connected ✅" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, message: "DB connection failed ❌" },
      { status: 500 }
    );
  }
}
