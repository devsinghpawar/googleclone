"use client";
const asas = {
  search_metadata: {
    id: "6324968ee7d08ae7fe669e77",
    status: "Success",
    json_endpoint:
      "https://serpapi.com/searches/1d73fd20e768151a/6324968ee7d08ae7fe669e77.json",
    created_at: "2022-09-16 15:30:22 UTC",
    processed_at: "2022-09-16 15:30:22 UTC",
    google_autocomplete_url:
      "https://www.google.com/complete/search?q=coffee&client=chrome",
    raw_html_file:
      "https://serpapi.com/searches/1d73fd20e768151a/6324968ee7d08ae7fe669e77.html",
    prettify_html_file:
      "https://serpapi.com/searches/1d73fd20e768151a/6324968ee7d08ae7fe669e77.prettify",
    total_time_taken: 1.34,
  },
  search_parameters: {
    engine: "google_autocomplete",
    q: "coffee",
  },
  search_information: {
    autocomplete_results_state: "Showing completion results.",
  },
  suggestions: [
    {
      value: "coffee near me",
      relevance: 1250,
      type: "QUERY",
      serpapi_link:
        "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+near+me",
    },
    {
      value: "coffee holliston",
      relevance: 601,
      type: "QUERY",
      serpapi_link:
        "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+holliston",
    },
    {
      value: "coffee framingham",
      relevance: 600,
      type: "QUERY",
      serpapi_link:
        "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+framingham",
    },
    {
      value: "coffee shops near me",
      relevance: 554,
      type: "QUERY",
      serpapi_link:
        "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+shops+near+me",
    },
    {
      value: "coffee nearby",
      relevance: 553,
      type: "QUERY",
      serpapi_link:
        "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+nearby",
    },
    {
      value: "coffee table",
      relevance: 552,
      type: "QUERY",
      serpapi_link:
        "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+table",
    },
    {
      value: "coffee break",
      relevance: 551,
      type: "QUERY",
      serpapi_link:
        "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+break",
    },
    {
      value: "coffee maker",
      relevance: 550,
      type: "QUERY",
      serpapi_link:
        "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+maker",
    },
  ],
  verbatim_relevance: 1300,
};
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
const func = () => {
  let arr = [...asas.suggestions, ...asas.suggestions];
  shuffle(arr);
  return new Promise((resolve) =>
    setTimeout(resolve, 300, {
      ...asas,
      suggestions: arr,
    })
  );
};
export { func };
