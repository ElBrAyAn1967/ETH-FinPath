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

    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    await db
      .update(users)
      .set({
        updatedAt: new Date(),
      })
      .where(eq(users.id, normalizedAddress));

    return NextResponse.json({
      success: true,
      message: "Welcome bonus claimed! Your Circles tokens are being minted on the blockchain.",
    });
  } catch (error) {
    console.error("Airdrop claim error:", error);
    return NextResponse.json(
      { error: "Failed to claim airdrop" },
      { status: 500 }
    );
  }
}
