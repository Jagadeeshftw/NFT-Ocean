import { NextRequest, NextResponse } from 'next/server';
const sql = require("better-sqlite3");
const db = sql("userDetails.db");

export async function GET(req: NextRequest) {
  try {
    const stmt = db.prepare("SELECT * FROM users");
    const users = stmt.all();

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
