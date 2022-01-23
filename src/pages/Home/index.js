import React from "react"
import SearchForm from "../../components/SearchForm"
import GifsList from "../../components/GifsList"
import TrendingSearches from "../../components/TrendingSearches"
import { useGifs } from "../../hooks/useGifs"
import { useSEO } from "hooks/useSEO"

export default function Home(){
  const { gifs } = useGifs()
  useSEO({ title: 'Home' })

  return (
    <>
      <SearchForm/>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <GifsList gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches/>
          </div>
        </div>
      </div>
    </>
  )

}