import { AnimalListItem } from "@/types/AnimalListItem";
import { ApiSource } from "@/types/ApiSource";
import { ApiRoutes } from "@/types/Routes";
import { api } from "@/utils/api";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const requestString = request.nextUrl.searchParams.get("query");

    if (!requestString) {
      return NextResponse.json([]);
    }

    const dogBreeds = await api.dogs.get<Array<AnimalListItem>>(
      ApiRoutes.SEARCH_BREEDS + `?q=${requestString}`
    );
    const catBreeds = await api.cats.get<Array<AnimalListItem>>(
      ApiRoutes.SEARCH_BREEDS + `?q=${requestString}`
    );

    const res = [
      ...dogBreeds.data.map((el) => ({ ...el, source: ApiSource.DOGS })),
      ...catBreeds.data.map((el) => ({ ...el, source: ApiSource.CATS })),
    ];

    return NextResponse.json(res);
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
