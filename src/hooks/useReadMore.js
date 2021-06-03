import { useEffect, useState, useCallback } from "react"

const useReadMore = ref => {
  const [shouldHaveReadMore, setShouldHaveReadMore] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  const isSignificChange = (lastSavedVal, newVal) =>
    1.1 * lastSavedVal <= newVal || newVal <= 0.9 * lastSavedVal

  const handleWindowSizeChange = useCallback(() => {
    const shouldReCheck =
      window &&
      (isSignificChange(windowWidth, window.innerWidth) ||
        isSignificChange(windowHeight, window.innerHeight))

    if (ref && ref.current && shouldReCheck) {
      setShouldHaveReadMore(false)
      const timeoutId = setTimeout(() => {
        setShouldHaveReadMore(
          0.35 <= ref.current.offsetHeight / window.innerHeight
        )
        clearTimeout(timeoutId)
      }, 0)
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
  }, [ref, windowWidth, windowHeight])

  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [handleWindowSizeChange])

  return [shouldHaveReadMore, windowWidth]
}

export default useReadMore
