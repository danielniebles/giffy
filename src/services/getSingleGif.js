import { API_KEY, BASE_URL } from "./settings";

const onApiResponse = (apiResponse) => {
  const { data: { title, id, images } } = apiResponse
  const { url } = images.downsized_medium;
  return { title, id, url };
}

export default function getSingleGif({ id } = {}) {
  return fetch(
    `${BASE_URL}/gifs/${id}?api_key=${API_KEY}`
  ).then((res) => res.json()
  .then(onApiResponse)
  );
}
