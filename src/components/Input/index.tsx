import { FC } from "react";
import classes from "./styles.module.scss";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({ placeholderIcon, ...rest }) => {
  return <input className={classes.input} {...rest} />;
};
