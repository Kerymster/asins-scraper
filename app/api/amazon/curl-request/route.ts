import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { url, headers, body } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: body || undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Curl request response:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Curl request error:", error);
    return NextResponse.json(
      { error: "Failed to execute curl request" },
      { status: 500 }
    );
  }
}
