import classes from "./loadingStyles.module.scss";
import BeatLoader from "react-spinners/BeatLoader";

export default function LoadingLayout() {
  return (
    <div className={classes.wrapper}>
      <BeatLoader size={20} color="#f97316" />
    </div>
  );
}
