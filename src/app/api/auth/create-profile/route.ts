import { NextRequest, NextResponse } from "next/server";
import { db, users } from "@/db";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { walletAddress, username, displayName, avatarType, bio } =
      await request.json();

    if (!walletAddress || !username || !displayName || !avatarType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!["male", "female"].includes(avatarType)) {
      return NextResponse.json(
        { error: "Invalid avatar type" },
        { status: 400 }
      );
    }

    const normalizedAddress = walletAddress.toLowerCase();
    const normalizedUsername = username.toLowerCase();

    const usernameExists = await db.query.users.findFirst({
      where: eq(users.username, normalizedUsername),
    });

    if (usernameExists) {
      return NextResponse.json(
        { error: "Username already taken" },
        { status: 409 }
      );
    }

    const avatarSeed = `${normalizedAddress}-${Date.now()}`;

    const newUser = await db
      .insert(users)
      .values({
        id: normalizedAddress,
        username: normalizedUsername,
        displayName,
        avatarType,
        avatarSeed,
        bio: bio || "",
        onboardingCompleted: true,
      })
      .returning();

    return NextResponse.json({
      success: true,
      user: newUser[0],
    });
  } catch (error) {
    console.error("Profile creation error:", error);
    return NextResponse.json(
      { error: "Failed to create profile" },
      { status: 500 }
    );
  }
}
