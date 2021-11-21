import React, { useContext } from "react"
import GifsContext from "../../context/GifsContext"
import Gif from '../../components/Gif'


export default function Detail({ params: { id } }){
  const { gifs } = useContext(GifsContext)

  const gif = gifs.find((singleGif) => singleGif.id === id)
  return (
    <>
      <Gif { ...gif }/>
      <span>Gif con id {id}</span>
    </>
  )
}