"use client";

import { FC, useState } from "react";
import { CarouselProps } from "./types";
import Image from "next/image";
import classes from "./styles.module.scss";
import { BeatLoader } from "react-spinners";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CarouselImage: FC<{ width: number; url: string }> = ({ width, url }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const imageStyles = [classes.image, isLoading ? classes.imageLoading : null]
    .filter((el) => !!el)
    .join(" ");

  return (
    <>
      {isLoading ? (
        <div
          style={{ minWidth: width, width }}
          className={classes.loadingWrapper}
        >
          <BeatLoader size={20} color="#f97316" />
        </div>
      ) : null}
      <Image
        onLoad={() => setIsLoading(false)}
        width={width}
        style={{ minWidth: width, width }}
        height={320}
        src={url}
        alt="image"
        className={imageStyles}
      />
    </>
  );
};

export const Carousel: FC<CarouselProps> = ({ images, width }) => {
  const [page, setPage] = useState(0);

  const left = () => {
    if (page === 0) {
      setPage(images.length - 1);
    } else {
      setPage((prev) => prev - 1);
    }
  };

  const right = () => {
    if (images.length - 1 === page) {
      setPage(0);
    }

    setPage((prev) => prev + 1);
  };

  if (!images?.length) {
    return null;
  }

  if (images.length === 1) {
    return (
      <CarouselImage
        width={width}
        url={images[0].url || require("@/../../public/no-image.jpg")}
      />
    );
  }

  return (
    <div className={classes.frame} style={{ minWidth: width, width }}>
      <div className={classes.buttonsWrapper}>
        <button className={classes.changeImageButton} onClick={left}>
          <FaAngleLeft />
        </button>
        <button className={classes.changeImageButton} onClick={right}>
          <FaAngleRight />
        </button>
      </div>
      <div
        className={classes.imagesWrapper}
        style={{ transform: `translateX(-${page * width}px)` }}
      >
        {images.map(({ id, url }) => (
          <CarouselImage
            key={id}
            width={width}
            url={url || require("@/../../public/no-image.jpg")}
          />
        ))}
      </div>
    </div>
  );
};
