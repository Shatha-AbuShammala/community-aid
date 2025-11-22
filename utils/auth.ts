import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { User } from "@/models";
import { IUserDocument } from "@/models/User";

export function generateToken(user: IUserDocument) {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: "7d" });
}

export async function getAuthUser(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) throw new Error("No token");
  const token = authHeader.split(" ")[1];
  if (!token) throw new Error("No token");

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string; role: string };
  const user = await User.findById(decoded.id);
  if (!user) throw new Error("User not found");
  return user;
}

export function requireAdmin(user: { role: string }) {
  if (user.role !== "admin") throw new Error("Admin access required");
}
