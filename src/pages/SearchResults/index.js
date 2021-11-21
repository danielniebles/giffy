import React, { useRef, useCallback } from 'react'
import GifsList from "components/GifsList/index";
import { useGifs } from 'hooks/useGifs';
import { useNearScreen } from 'hooks/useNearScreen';
import { useEffect } from 'react/cjs/react.development';
import debounce from "just-debounce-it"

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen(
    { externalRef: loading ? null : externalRef,
      once: false
    }
  )

  const debounceHandleNextPage = useCallback(debounce(() => {
    setPage(prevPage => prevPage + 1)
  }, 200), [])

  useEffect(() => {
    if(isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return (<>
    {loading ? <i>Cargando 😃</i> :
      <>
        <h3 className='App-title'>{decodeURI(keyword)}</h3>
        <GifsList gifs={gifs}></GifsList>
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </>
  )
}