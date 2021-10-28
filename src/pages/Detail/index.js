import React, { useContext } from "react"
import StaticContext from "../../context/StaticContext"
import GifsContext from "../../context/GifsContext"
import Gif from '../../components/Gif'


export default function Detail({ params: { id } }){
  //const { id } = params
  const { gifs } = useContext(GifsContext)

  const gif = gifs.find((singleGif) => singleGif.id === id)
  console.log(gif);
  return (
    <>
      <Gif { ...gif }/>
      <span>Gif con id {id}</span>
    </>
  )
}