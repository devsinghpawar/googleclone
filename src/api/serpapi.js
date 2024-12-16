import { getJson } from "serpapi";

export const getAutocomplete = async () => {
  const json = await getJson({
    engine: "google",
    api_key: "d4a656d23373d08bf4b3f118f90743f8bfc7c684e032089123ddfa7343eb4c82",
    q: "coffee",
  });

  return json;
};
