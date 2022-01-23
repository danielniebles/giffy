import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0;
export function useGifs({ keyword, rating } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [ loading, setLoading ] = useState(false)
  const [ page, setPage ] = useState(0)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword')

  useEffect(() => {
    setLoading(true)

    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs)

      localStorage.setItem('lastKeyword', keywordToUse)
    })
    setLoading(false)
  }, [keyword, keywordToUse, setGifs, rating])

  useEffect(() => {
    if(page === INITIAL_PAGE) return
    getGifs({ keyword: keywordToUse, page, rating }).then((gifs) => {
      setGifs(prevGifs => prevGifs.concat(gifs))
      localStorage.setItem('lastKeyword', keywordToUse)
    })

  }, [keywordToUse, page, setGifs, rating])

  return { loading, gifs, setPage }
}