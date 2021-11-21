import { useEffect, useRef, useState } from "react";


export function useNearScreen({ distance = '100px', externalRef,
  once = true } = {}){
  const [ isNearScreen, setShow ] = useState(false)
  const fromRef = useRef()

  const element = externalRef ? externalRef.current : fromRef.current

  useEffect(() => {
    let observer
    const onChange = (entries, observer) => {
      const [el] = entries
      if(el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
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

      if(element) observer.observe(element)

      return () => observer.disconnect()
    })

  })
  return { isNearScreen, fromRef }
}