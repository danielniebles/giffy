import SearchForm from "components/SearchForm"
import React, { useCallback } from "react"
import { useLocation } from "wouter"
import GifsList from "../../components/GifsList"
import TrendingSearches from "../../components/TrendingSearches"
import { useGifs } from "../../hooks/useGifs"

export default function Home(){
  const [ ,pushLocation ] = useLocation()
  const { gifs } = useGifs()

  const handleSubmit = useCallback(({keyword}) => {
    pushLocation(`search/${keyword}`)
  }, [pushLocation])

  return (
    <>
      <SearchForm onSubmit={handleSubmit}/>
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