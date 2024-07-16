import { NextResponse, NextRequest } from "next/server";

const pinataSDK = require("@pinata/sdk");
const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT });

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = {
      message: "Pinatas are awesome",
    };
    const data1 = {
      name: "hllhh",
      desc: "jjhkl",
      image:
        "https://jade-above-owl-453.mypinata.cloud/ipfs/QmPdVbCydUxi6aeJJsLcSZtkoEuFuSDRfhVWCpAYMc5P8L",
      price: "43",
    };

    const data = await request.json();
    console.log(data);
    const options = {
      pinataMetadata: {
        name: "MyCustomName",
        keyvalues: {
          customKey: "customValue",
          customKey2: "customValue2",
        },
      },
      pinataOptions: {
        cidVersion: 0,
      },
    };
    const res = await pinata.pinJSONToIPFS(data, options);
    console.log(res);
    // const { IpfsHash } = await res.json();
    // console.log(IpfsHash);

    return NextResponse.json({ res }, { status: 200 });
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
