import React from "react"
import Gif from '../../components/Gif'
import { useSingleGif } from "hooks/useSingleGif";
import { Redirect } from "wouter";


export default function Detail({ params: { id } }){
  const { gif, isError, isLoading } = useSingleGif({ id })

  if(isLoading) return <i>Cargando 😃</i>
  if(isError) return <Redirect to="/error"/>
  if(!gif) return null

  return (
    <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif { ...gif }/>
    </>
  )
}