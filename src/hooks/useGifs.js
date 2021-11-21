import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0;
export function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [ loading, setLoading ] = useState(false)
  const [ page, setPage ] = useState(0)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword')

  useEffect(() => {
    setLoading(true)

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs)

      localStorage.setItem('lastKeyword', keywordToUse)
    })
    setLoading(false)
  }, [keyword, keywordToUse, setGifs])

  useEffect(() => {
    if(page === INITIAL_PAGE) return
    getGifs({ keyword: keywordToUse, page }).then((gifs) => {
      setGifs(prevGifs => prevGifs.concat(gifs))
      localStorage.setItem('lastKeyword', keywordToUse)
    })

  }, [keywordToUse, page, setGifs])

  return { loading, gifs, setPage }
}