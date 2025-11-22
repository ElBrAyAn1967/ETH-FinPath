import { NextRequest, NextResponse } from "next/server";
import { db, users } from "@/db";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { walletAddress } = await request.json();

    if (!walletAddress) {
      return NextResponse.json(
        { error: "Wallet address required" },
        { status: 400 }
      );
    }

    const normalizedAddress = walletAddress.toLowerCase();
    const existingUser = await db.query.users.findFirst({
      where: eq(users.id, normalizedAddress),
    });

    if (existingUser) {
      return NextResponse.json({
        exists: true,
        user: existingUser,
      });
    }

    return NextResponse.json({
      exists: false,
      walletAddress: normalizedAddress,
    });
  } catch (error) {
    console.error("Auth verification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
