import { AnimalListItem } from "@/types/AnimalListItem";
import { ApiSource } from "@/types/ApiSource";
import { ApiRoutes } from "@/types/Routes";
import { api } from "@/utils/api";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dogBreeds = await api.dogs.get<Array<AnimalListItem>>(
      ApiRoutes.GET_BREEDS + "?limit=6"
    );
    const catBreeds = await api.cats.get<Array<AnimalListItem>>(
      ApiRoutes.GET_BREEDS + "?limit=6"
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
      { status: e?.response?.status || 500 }
    );
  }
}
