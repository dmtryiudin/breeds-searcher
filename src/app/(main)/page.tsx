"use server";

import { BreedCard, ResponsiveWrapper, SearchFilter } from "@/components";
import {
  getBreedsBySearchString,
  getDefaultBreeds,
} from "@/serverActions/breeds";
import { AnimalListItem } from "@/types/AnimalListItem";
import classes from "./styles.module.scss";

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const searchString = searchParams.query;

  let breeds = [] as Array<AnimalListItem>;

  if (searchString) {
    breeds = (await getBreedsBySearchString(searchString)).data;
  } else {
    breeds = (await getDefaultBreeds()).data;
  }

  const NoItems = (
    <div className={classes.noItemsWrapper}>
      <span className={classes.notFoundText}>No items found</span>
    </div>
  );

  return (
    <ResponsiveWrapper>
      <div className={classes.wrapper}>
        <SearchFilter />
        {breeds.length ? (
          <div className={classes.cardsWrapper}>
            {breeds.map((breed) => (
              <BreedCard {...breed} key={breed.id} />
            ))}
          </div>
        ) : (
          NoItems
        )}
      </div>
    </ResponsiveWrapper>
  );
}
