import React from 'react'
import Gif from '../Gif/index'
import './styles.css'

export default function GifsList({ gifs }) {

  return <div className="ListOfGifs">
    {
      gifs.map((gif) => {
        return (
            <Gif
              key={gif.id}
              id={gif.id}
              title={gif.title}
              url={gif.url}>
            </Gif>
        )
      })
    }
  </div>

}