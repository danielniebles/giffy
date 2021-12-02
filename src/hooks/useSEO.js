import { useEffect, useRef } from "react"

export function useSEO({ title, description }){
  const prevTitleRef = useRef(document.title)
  const prevDescriptionRef = useRef(
    document.querySelector('meta[name="description"]').getAttribute('content')
  )

  useEffect(() => {
    const prevTitle = prevTitleRef.current
    if(title){
      document.title = `${title} | Giffy`
    }
    return () => document.title = prevTitle
  }, [title])


  useEffect(() => {
    const prevDescription = prevDescriptionRef.current
    const metaDescription = document.querySelector('meta[name="description"]')

    if(description){
      metaDescription.setAttribute('content', description)
    }

    return () => metaDescription.setAttribute('content', prevDescription)
  }, [description])

}