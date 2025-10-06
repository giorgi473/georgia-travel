import {
  componentAttributes,
  ComponentAttributes,
} from "@/constants/data/kitchenData";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const correctedData: ComponentAttributes[] = componentAttributes.map(
      (item) => ({
        ...item,
      })
    );

    return NextResponse.json({ data: correctedData });
  } catch (error) {
    console.error("Error processing data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
