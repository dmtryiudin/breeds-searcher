"use server";

import { AnimalListItem } from "@/types/AnimalListItem";
import { InnerApiRoutes } from "@/types/Routes";
import { api } from "@/utils/api";

export const getDefaultBreeds = async () => {
  const list = api.innerApi.get<Array<AnimalListItem>>(
    InnerApiRoutes.DEFAULT_BREEDS
  );

  return list;
};

export const getBreedsBySearchString = async (query: string) => {
  const list = api.innerApi.get<Array<AnimalListItem>>(
    InnerApiRoutes.SEARCH_BREEDS + `?query=${query}`
  );

  return list;
};
