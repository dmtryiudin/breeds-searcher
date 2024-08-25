"use client";

import classes from "./errorStyles.module.scss";

export default function ErrorLayout() {
  return (
    <div className={classes.wrapper}>
      <span className={classes.text}>
        Something went wrong. Try again later.
      </span>
    </div>
  );
}
