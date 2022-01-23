import React, { useRef, useCallback, useEffect } from 'react'
import GifsList from "components/GifsList";
import { useGifs } from 'hooks/useGifs';
import { useNearScreen } from 'hooks/useNearScreen';
import debounce from "just-debounce-it"
import { useSEO } from 'hooks/useSEO';
import SearchForm from 'components/SearchForm';

export default function SearchResults({ params }) {
  const { keyword, rating = 'g' } = params
  const { loading, gifs, setPage } = useGifs({ keyword, rating })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen(
    { externalRef: loading ? null : externalRef,
      once: false
    }
  )
  const title =  gifs ? `${gifs.length} resultados de ${keyword}` : ''
  useSEO({ title })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [])

  useEffect(() => {
    if(isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return (<>
    {loading ? <i>Cargando 😃</i> :
      <>
        <SearchForm initialKeyword={keyword} initialRating={rating}/>
        <h3 className='App-title'>{decodeURI(keyword)}</h3>
        <GifsList gifs={gifs}></GifsList>
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </>
  )
}