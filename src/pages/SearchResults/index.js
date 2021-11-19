import React from 'react'
import GifsList from "components/GifsList/index";
import { useGifs } from 'hooks/useGifs';

export default function SearchResults({ params }){
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => { setPage(prevPage => prevPage + 1) }

  if(loading) return <i>Cargando 😃</i>

  return (
    <>
      <h3 className='App-title'>{decodeURI(keyword)}</h3>
      <GifsList gifs={gifs}></GifsList>
      <button onClick={handleNextPage}>Ver más</button>
    </>
  )
}