import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

function Gif({ title, url, id, index }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className='Gif-link'>
        <h4>{`${title} ${index}`}</h4>
        <img alt={title} src={url}></img>
      </Link>
    </div>
  )
}

export default React.memo(Gif)