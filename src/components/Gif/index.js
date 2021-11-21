import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

export default function Gif({ title, url, id }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className='Gif-link'>
        <a className="Gif-link" href={`#${id}`}>
          <img alt={title} src={url}></img>
        </a>
      </Link>
    </div>
  )
}