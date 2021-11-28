import React, { useState } from "react"

function SearchForm({ onSubmit }) {
  const [ keyword, setKeyword ] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

  const handleInputChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif..." onChange={handleInputChange} type="text" value={keyword}/>
    </form>
  )
}

export default React.memo(SearchForm)