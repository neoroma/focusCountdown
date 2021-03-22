import { useEffect, useState } from 'react'

export interface UseCountDownProps {
  durationInSeconds: number
  running: boolean
}

export const useCountDown = ({ durationInSeconds, running }: UseCountDownProps) => {
  const [secondsLeft, setSecondsLeft] = useState(durationInSeconds)

  useEffect(() => {
    if (running === false) {
      setSecondsLeft(durationInSeconds)
      return
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        return prev <= 0 ? 0 : prev - 1
      })
    }, 1000)

    return (): void => clearInterval(interval)
  }, [running, setSecondsLeft])

  const minutes = Math.floor(secondsLeft / 60) % 60
  const secs = Math.floor(secondsLeft) % 60

  const minutesLeftString = `${minutes.toLocaleString().length === 1 ? '0' + minutes : minutes}`
  const secondsLeftString = `${secs.toLocaleString().length === 1 ? '0' + secs : secs}`

  return {
    minutesLeft: minutesLeftString,
    secondsLeft: secondsLeftString,
  }
}
