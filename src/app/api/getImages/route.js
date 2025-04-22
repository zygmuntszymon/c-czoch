import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const folderPath = path.join(process.cwd(), "public", "images", category);

  try {
    const files = fs.readdirSync(folderPath);

    const images = files.map((file) => ({
      src: `/images/${category}/${file}`,
      alt: `${category} ${file}`,
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Error loading images:", error);
    return NextResponse.json(
      { error: "Unable to load images" },
      { status: 500 }
    );
  }
}
