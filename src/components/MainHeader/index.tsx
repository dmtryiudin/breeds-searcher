import { Routes } from "@/types/Routes";
import Link from "next/link";
import Image from "next/image";
import { Input } from "../Input";
import classes from "./styles.module.scss";
import { ResponsiveWrapper } from "../ResponsiveWrapper";
import { redirect } from "next/navigation";
import { SearchBreedsInput } from "../SearchBreedsInput";

export const MainHeader = () => {
  return (
    <header className={classes.wrapper}>
      <ResponsiveWrapper>
        <div className={classes.contentWrapper}>
          <Link href={Routes.MAIN}>
            <Image
              className={classes.mainLogo}
              priority
              src={require("@/../../public/main-logo-image.png").default.src}
              alt="Image of cat and dog sitting together"
              width={40}
              height={40}
            />
          </Link>
          <SearchBreedsInput />
        </div>
      </ResponsiveWrapper>
    </header>
  );
};
