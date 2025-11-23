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

    const currentBalance = BigInt(existingUser.circlesBalance || "0");
    const airdropAmount = BigInt("5000000");
    const newBalance = currentBalance + airdropAmount;

    await db
      .update(users)
      .set({
        circlesBalance: newBalance.toString(),
        updatedAt: new Date(),
      })
      .where(eq(users.id, normalizedAddress));

    return NextResponse.json({
      success: true,
      newBalance: newBalance.toString(),
      airdropAmount: airdropAmount.toString(),
    });
  } catch (error) {
    console.error("Airdrop claim error:", error);
    return NextResponse.json(
      { error: "Failed to claim airdrop" },
      { status: 500 }
    );
  }
}
