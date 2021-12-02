import React from "react"
import Gif from '../../components/Gif'
import { useSingleGif } from "hooks/useSingleGif";
import { Redirect } from "wouter";
import { useSEO } from "hooks/useSEO";


export default function Detail({ params: { id } }){
  const { gif, isError, isLoading } = useSingleGif({ id })
  const title = gif ? gif.title : ''
  useSEO({ title, description: `Detail of ${title}` })

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