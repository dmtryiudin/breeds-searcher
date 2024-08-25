"use client";

import { Routes } from "@/types/Routes";
import classes from "./styles.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { IoMdClose } from "react-icons/io";

export const SearchFilter = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const router = useRouter();

  if (!query) {
    return null;
  }

  return (
    <button
      className={classes.wrapper}
      onClick={() => {
        router.push(Routes.MAIN);
      }}
    >
      <span>Searching by:</span>
      <span className={classes.searchText}>{query}</span>
      <IoMdClose className={classes.searchText} />
    </button>
  );
};
