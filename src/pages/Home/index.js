import React, { useState } from "react"
import { useLocation } from "wouter"
import GifsList from "../../components/GifsList"
import TrendingSearches from "../../components/TrendingSearches"
import { useGifs } from "../../hooks/useGifs"

export default function Home(){
  const [ keyword, setKeyword ] = useState('')
  const [ ,pushLocation ] = useLocation()
  const { gifs } = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`search/${keyword}`)
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