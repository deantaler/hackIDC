// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect } from "react"

const useTimeout = (callback, time) => {
  useEffect(() => {
    const timer = setTimeout(callback, time)
    return () => clearTimeout(timer)
  }, [])
}
export default useTimeout
