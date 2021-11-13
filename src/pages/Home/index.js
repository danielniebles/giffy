import React, { useState, useEffect } from "react"
import { Link, useLocation } from "wouter"
import GifsList from "../../components/GifsList"
import Category from "../../components/Category"
import TrendingSearches from "../../components/TrendingSearches"
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
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <GifsList gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches/>
        </div>
      </div>
    </>
  )

}