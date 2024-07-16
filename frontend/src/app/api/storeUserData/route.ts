import { NextRequest, NextResponse } from "next/server";
const sql = require("better-sqlite3");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { address, name, email } = body;

    if (!address || !name || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const db = sql("userDetails.db");
    const stmt = db.prepare(`
      INSERT INTO users (address, name, email)
      VALUES (?, ?, ?)
    `);
    stmt.run(address, name, email);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error storing user data in the database:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
