import { useCallback, useEffect } from "react"

const isInView = ref => {
  const rect = ref.current && ref.current.getBoundingClientRect()
  return (
    rect &&
    rect.top > 0 &&
    rect.top < window.innerHeight &&
    window.innerHeight < rect.bottom
  )
}

const useFadeIn = (ref, style) => {
  const scrollHandler = useCallback(() => {
    if (isInView(ref)) {
      ref.current.classList.add(style)
    }
  }, [ref, style])

  useEffect(() => {
    scrollHandler()
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [scrollHandler])
}

export default useFadeIn
