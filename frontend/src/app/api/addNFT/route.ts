import { NextRequest, NextResponse } from "next/server";
import initData from "../../../../initdb";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, desc, image, price } = body;

  try {
    initData({
      name,
      desc,
      image,
      price,
    });
    return NextResponse.json({ message: "NFT added successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add NFT" }, { status: 500 });
  }
}
