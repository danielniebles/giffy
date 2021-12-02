import GifsContext from "context/GifsContext";
import { useContext, useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";

export function useSingleGif({ id }) {
  const { gifs } = useContext(GifsContext)
  const cachedGif = gifs.find(singleGif => singleGif.id === id)

  const [gif, setGif] = useState(cachedGif)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if(!gif){
      getSingleGif({ id }).then((gif) => {
        setIsLoading(true)
        setGif(gif)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsError(true)
      })
    }
  }, [gif, id])

  return { gif, isLoading, isError }
}