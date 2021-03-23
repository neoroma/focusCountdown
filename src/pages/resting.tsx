import React from 'react'
import { useCountDown } from '../hooks/useCountDown'
import { useAppState } from '../hooks/useAppState'
import { Layout } from '../components/Layout'
import { InnerApp } from '../components/InnerApp'

export default function Resting() {
  const { state, dispatch } = useAppState()
  const { minutesLeft, secondsLeft } = useCountDown({
    durationInSeconds: state.restDuration,
    running: state.resting,
    paused: state.paused,
    nextRoute: '/',
  })

  const handleStartButton = (): void => dispatch({ type: 'start resting' })
  const handlePauseButton = (): void => dispatch({ type: 'pause resting' })

  return (
    <Layout title="Resting">
      <InnerApp
        handlePause={handlePauseButton}
        handleStart={handleStartButton}
        minutesLeft={minutesLeft}
        secondsLeft={secondsLeft}
        running={state.resting}
        type="resting"
      />
    </Layout>
  )
}
