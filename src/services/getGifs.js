import { API_KEY, BASE_URL } from "./settings";


const onApiResponse = (apiResponse) => {
  const { data } = apiResponse

  if (Array.isArray(data)) {
    const gifs = data.map((item) => {
      const { title, id, images } = item;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs
  }
  return []

}

export default function getGifs({ keyword = "morty" } = {}) {
  return fetch(
    `${BASE_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  ).then((res) => res.json()
  .then(onApiResponse)
  );
}
