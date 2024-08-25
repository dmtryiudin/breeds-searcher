"use client";

import { AnimalListItem } from "@/types/AnimalListItem";
import { FC, useState } from "react";
import Image from "next/image";
import classes from "./styles.module.scss";
import BeatLoader from "react-spinners/BeatLoader";
import Link from "next/link";
import { Routes } from "@/types/Routes";

export const BreedCard: FC<AnimalListItem> = ({ name, image, id, source }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const wrapperStyles = [classes.image, isLoading ? classes.imageLoading : null]
    .filter((el) => !!el)
    .join(" ");

  return (
    <Link
      href={`${Routes.BREED_ITEM}/${source}/${id}`}
      className={classes.wrapper}
    >
      {isLoading ? (
        <div className={classes.loadingWrapper}>
          <BeatLoader size={20} color="#fff" />
        </div>
      ) : null}
      <Image
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        className={wrapperStyles}
        width={240}
        height={240}
        alt="Breed image"
        src={image?.url || require("@/../../public/no-image.jpg").default.src}
      />
      <div title={name} className={classes.text}>
        {name}
      </div>
    </Link>
  );
};
