import { NextRequest, NextResponse } from "next/server";
import { AmazonApiResponse } from "@/types/amazon";
import { fetchFromCurl } from "@/utils/fetchFromCurl";
import { AMAZON_CAMPAIGN_SEARCH_CURL } from "./mockCurl";

export async function POST(_request: NextRequest) {
  try {
    const response = await fetchFromCurl(AMAZON_CAMPAIGN_SEARCH_CURL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: AmazonApiResponse = await response.json();
    console.log("Amazon API Response (Server):", data);

    return NextResponse.json(data.responses);
  } catch (error) {
    console.error("Amazon API Error (Server):", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Amazon API" },
      { status: 500 }
    );
  }
}
