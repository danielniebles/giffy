import { API_KEY, BASE_URL } from "./settings";

const onApiResponse = (apiResponse) => {
  const { data } = apiResponse
  return data
}

export default function getTrending({ keyword = "morty" } = {}) {
  return fetch(
    `${BASE_URL}/trending/searches?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  ).then((res) => res.json()
  .then(onApiResponse)
  );
}
