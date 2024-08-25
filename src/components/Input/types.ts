import { InputHTMLAttributes, ReactNode } from "react";

export type InputProps = {
  placeholderIcon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;
