import { NextRequest, NextResponse } from "next/server";
import { db, users } from "@/db";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { username } = await request.json();

    if (!username || username.length < 3) {
      return NextResponse.json(
        { error: "Username must be at least 3 characters" },
        { status: 400 }
      );
    }

    const existingUser = await db.query.users.findFirst({
      where: eq(users.username, username.toLowerCase()),
    });

    return NextResponse.json({
      available: !existingUser,
    });
  } catch (error) {
    console.error("Username check error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
