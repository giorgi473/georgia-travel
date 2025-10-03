import {
  componentAttributes,
  ComponentAttributes,
} from "@/constants/data/natureData";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const correctedData: ComponentAttributes[] = componentAttributes.map(
      (item) => ({
        ...item,
        destinations: item.destinations.map((dest) => ({
          ...dest,
          title: {
            ...dest.title,
            ka: dest.title.ka.replace("ქუთ9840აისში", "ქუთაისი"),
          },
        })),
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
