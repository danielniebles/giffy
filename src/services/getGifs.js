import { API_KEY, BASE_URL } from "./settings";

const onApiResponse = (apiResponse) => {
  const { data } = apiResponse;

  if (Array.isArray(data)) {
    const gifs = data.map((item) => {
      const { title, id, images } = item;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export default function getGifs({
  limit = 10,
  keyword = "morty",
  page = 0,
  rating = 'g',
} = {}) {
  return fetch(
    `${BASE_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
      page * limit
    }&rating=${rating}&lang=en`
  ).then((res) => res.json().then(onApiResponse));
}
