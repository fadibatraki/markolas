import { NextResponse } from "next/server";
import { authClient } from "@/lib/auth/client";

export async function GET() {
  await authClient.signUp.email({
    email: "markolas@admin.com",
    password: "Markolas.,.,1",
    name: "Admin",
  });
  return NextResponse.json({ message: "did it successfully!" });
}
