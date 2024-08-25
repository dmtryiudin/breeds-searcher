import { FC } from "react";
import { ResponsiveWrapperProps } from "./types";
import classes from "./styles.module.scss";

export const ResponsiveWrapper: FC<ResponsiveWrapperProps> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};
