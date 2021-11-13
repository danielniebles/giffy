import React, { useEffect, useRef, useState } from "react";


export function useNearScreen({ distance = '150px' } = {}){
  console.log(distance);
  const [ isNearScreen, setShow ] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer
    const onChange = (entries, observer) => {
      const [el] = entries
      if(el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== undefined
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })

      observer.observe(fromRef.current)

      return () => observer.disconnect()
    })

  })
  return { isNearScreen, fromRef }
}