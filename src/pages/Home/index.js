import React, { useCallback } from "react"
import SearchForm from "../../components/SearchForm"
import { useLocation } from "wouter"
import GifsList from "../../components/GifsList"
import TrendingSearches from "../../components/TrendingSearches"
import { useGifs } from "../../hooks/useGifs"
import { useSEO } from "hooks/useSEO"

export default function Home(){
  const [ ,pushLocation ] = useLocation()
  const { gifs } = useGifs()

  const handleSubmit = useCallback(({keyword}) => {
    pushLocation(`search/${keyword}`)
  }, [pushLocation])

  useSEO({ title: 'Home' })

  return (
    <>
      <SearchForm onSubmit={handleSubmit}/>
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