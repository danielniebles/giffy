const baseUrl = "https://api.giphy.com/v1/gifs";
const apiKey = "fVX13vxyUbARFFTjE8s2nACCBRer4Dtq";

export default function getGifs({ keyword = "morty" } = {}) {
  return fetch(
    `${baseUrl}/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  ).then((res) =>
    res.json().then(({ data }) => {
      const gifs = data.map((item) => {
        const { title, id, images } = item;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    })
  );
}
