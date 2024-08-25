import { AnimalItemResponse } from "@/types/AnimalItemResponse";
import { ApiSource } from "@/types/ApiSource";
import { ImageResponse } from "@/types/ImageResponse";
import { ApiRoutes } from "@/types/Routes";
import { api } from "@/utils/api";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const source = request.nextUrl.searchParams.get("source") as ApiSource;
    const breedId = request.nextUrl.searchParams.get("breedId");

    if (!breedId || !source) {
      return NextResponse.json(
        {
          message: "Please provide breed id and source (cats or dogs)",
        },
        { status: 400 }
      );
    }

    if (source === ApiSource.CATS) {
      const { data } = await api.cats.get<AnimalItemResponse>(
        ApiRoutes.GET_BREEDS + `/${breedId}`
      );

      const { data: images } = await api.cats.get<ImageResponse>(
        ApiRoutes.IMAGES + `?breed_ids=${breedId}&limit=10`
      );

      return NextResponse.json({ ...data, images });
    }

    if (source === ApiSource.DOGS) {
      const { data } = await api.dogs.get<AnimalItemResponse>(
        ApiRoutes.GET_BREEDS + `/${breedId}`
      );

      const { data: images } = await api.dogs.get<ImageResponse>(
        ApiRoutes.IMAGES + `?breed_ids=${breedId}&limit=10`
      );

      return NextResponse.json({ ...data, images });
    }

    return NextResponse.json(
      {
        message: "Wrong source",
      },
      { status: 400 }
    );
  } catch (e: any | AxiosError) {
    return NextResponse.json(
      {
        message:
          e?.response?.statusText || "Something went wrong. Try again later.",
      },
      { status: e?.response.status || 500 }
    );
  }
}
