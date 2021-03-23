import { useEffect, useState } from 'react'
// import { useAppState } from './useAppState'
import { useRouter } from 'next/router'
import { useAppState } from './useAppState'

export interface UseCountDownProps {
  durationInSeconds: number
  running: boolean
  paused: boolean
  nextRoute: '/' | '/resting'
}

export const useCountDown = ({ durationInSeconds, running, paused, nextRoute }: UseCountDownProps) => {
  const [secondsLeft, setSecondsLeft] = useState(durationInSeconds)
  const { dispatch } = useAppState()
  const router = useRouter()

  useEffect(() => {
    if (running === false) {
      if (!paused) setSecondsLeft(durationInSeconds)
      return
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        return prev <= 0 ? 0 : prev - 1
      })
    }, 1000)

    return (): void => clearInterval(interval)
  }, [running, setSecondsLeft, paused])

  useEffect(() => {
    if (secondsLeft === 0 && running === true) {
      dispatch({ type: 'switch' })
      router.push(nextRoute)
    }
  }, [secondsLeft, running])

  const minutes = Math.floor(secondsLeft / 60) % 60
  const secs = Math.floor(secondsLeft) % 60

  const minutesLeftString = `${minutes.toLocaleString().length === 1 ? '0' + minutes : minutes}`
  const secondsLeftString = `${secs.toLocaleString().length === 1 ? '0' + secs : secs}`

  return {
    minutesLeft: minutesLeftString,
    secondsLeft: secondsLeftString,
  }
}
