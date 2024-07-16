import { NextRequest, NextResponse } from "next/server";
const sql = require("better-sqlite3");

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json({ error: "Address is required" }, { status: 400 });
  }

  try {
    // Replace with your database query
    const db = sql("userDetails.db");
    const row = db
      .prepare("SELECT * FROM users WHERE address = ?")
      .get(address);
    console.log("row:", row);
    if (row) {
      return NextResponse.json({ exists: true });
    } else {
      return NextResponse.json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking address in the database:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
