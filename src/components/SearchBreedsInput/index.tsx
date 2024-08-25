"use client";

import { Routes } from "@/types/Routes";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Input } from "../Input";

export const SearchBreedsInput = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  return (
    <form
      ref={formRef}
      action={async function (formData: FormData) {
        const query = formData.get("query");

        formRef.current?.reset();

        router.push(Routes.MAIN + `?query=${query}`);
      }}
    >
      <Input name="query" placeholder="Search breeds..." />
    </form>
  );
};
