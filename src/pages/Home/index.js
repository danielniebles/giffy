import React, { useState, useEffect } from "react"
import { Link, useLocation } from "wouter"
import GifsList from "../../components/GifsList"
import { useGifs } from "../../hooks/useGifs"

const POPULAR = ["panda", "Tarja"]

export default function Home(){
  const [ keyword, setKeyword ] = useState('')
  const [ ,pushLocation ] = useLocation()
  const { loading, gifs } = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`search/${keyword}`)
    console.log(keyword)
  }

  const handleInputChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif..." onChange={handleInputChange} type="text" value={keyword}/>
      </form>
      <h3>Ultima busqueda</h3>
      <GifsList gifs={gifs}></GifsList>

      <h3>Gifs populares</h3>
      <ul>
        {
          POPULAR.map((gif) => (
            <li key={gif}>
              <Link to={`search/${gif}`}>{gif} Gifs</Link>
            </li>
          ))
        }
      </ul>
    </>
  )

}