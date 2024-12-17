"use server";
import { getJson } from "serpapi";

export const getAutocomplete = async (query) => {
  const json = await getJson({
    engine: "google_autocomplete",
    api_key: "",
    q: query,
  });
  console.log(json);
  return json;
};
