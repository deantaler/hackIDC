import { useState } from "react"
import useInterval from "./useInterval"

const millisToSeconds = millis => Math.floor((millis / 1000) % 60)
const millisToMinutes = millis => Math.floor((millis / (1000 * 60)) % 60)
const millisToHours = millis => Math.floor((millis / (1000 * 60 * 60)) % 24)

const useTimer = duration => {
  const [timeLeft, setTimeLeft] = useState(parseInt(duration) || 1000 * 10)
  const [millis, setMillis] = useState(Math.floor(timeLeft % 1000) / 100)
  const [seconds, setSeconds] = useState(millisToSeconds(timeLeft))
  const [minutes, setMinutes] = useState(millisToMinutes(timeLeft))
  const [hours, setHours] = useState(millisToHours(timeLeft))

  useInterval(() => {
    setTimeLeft(0 < timeLeft ? timeLeft - 100 : timeLeft)
    setMillis(Math.floor(timeLeft % 1000) / 100)
    setSeconds(millisToSeconds(timeLeft))
    setMinutes(millisToMinutes(timeLeft))
    setHours(millisToHours(timeLeft))
  }, 100)

  return {
    millis,
    seconds,
    minutes,
    hours,
  }
}

export default useTimer
