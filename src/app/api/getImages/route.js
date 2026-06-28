import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (!category) {
    return NextResponse.json(
      { error: "Brak określonej kategorii" },
      { status: 400 }
    );
  }

  try {
    const result = await cloudinary.search
      .expression(`folder:${category} AND resource_type:image`)
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    const images = result.resources.map((file) => ({
      src: file.secure_url,
      alt: `${category} - realizacja c-czoch.pl`,
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Błąd podczas pobierania zdjęć z Cloudinary:", error);
    return NextResponse.json(
      { error: "Nie udało się załadować zdjęć z galerii" },
      { status: 500 }
    );
  }
}