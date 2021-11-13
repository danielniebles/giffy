import React, { useEffect, useState } from "react";
import getTrending from "services/getTrending";
import Category from '../Category'

export default function TrendingSearches() {
  const [ trends, setTrends ] = useState([])

  useEffect(() => {
    getTrending().then((trends) => setTrends(trends))
  }, [])

  return <Category name='Tendencias' options={trends}></Category>
}