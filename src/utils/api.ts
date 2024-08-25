import {
  CAT_API_KEY,
  CAT_API_URL,
  DOG_API_KEY,
  DOG_API_URL,
  INNER_API_URL,
} from "@/consts";
import axios from "axios";

export const api = {
  dogs: axios.create({
    baseURL: DOG_API_URL,
    headers: {
      "x-api-key": DOG_API_KEY,
    },
  }),

  cats: axios.create({
    baseURL: CAT_API_URL,
    headers: {
      "x-api-key": CAT_API_KEY,
    },
  }),

  innerApi: axios.create({
    baseURL: INNER_API_URL,
  }),
};
