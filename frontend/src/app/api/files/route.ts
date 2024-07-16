import { NextResponse, NextRequest } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;
    data.append("file", file);
    data.append("pinataMetadata", JSON.stringify({ name: "File to upload" }));
    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PINATA_JWT}`,
      },
      body: data,
    });
    const { IpfsHash } = await res.json();
    console.log(IpfsHash);

    return NextResponse.json({ IpfsHash }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle file unpinning from IPFS
export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const cid = url.searchParams.get("cid");

    if (!cid) {
      return NextResponse.json({ error: "CID is required" }, { status: 400 });
    }

    const response = await fetch(
      `https://api.pinata.cloud/pinning/unpin/${cid}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to unpin CID ${cid}`);
    }

    return NextResponse.json(
      { message: "File unpinned successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
