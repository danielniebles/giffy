import React from 'react'
import GifsList from "components/GifsList/index";
import { useGifs } from 'hooks/useGifs';

export default function SearchResults({ params }){
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })

  if(loading) return <i>Cargando 😃</i>

  return (
    <>
      <h3 className='App-title'>{decodeURI(keyword)}</h3>
      <GifsList gifs={gifs}></GifsList>
    </>
  )


}