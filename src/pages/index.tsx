import React from 'react'
import styles from '../styles/Home.module.scss'
import cn from 'classnames'
import { useCountDown } from '../hooks/useCountDown'
import { useAppState } from '../hooks/useAppState'

export default function Home() {
  const { state, dispatch } = useAppState()
  const { minutesLeft, secondsLeft } = useCountDown({ durationInSeconds: state.focusDuration, running: state.focusing })

  const handleStartButton = (): void => dispatch({ type: 'start focusing' })
  const handlePauseButton = (): void => dispatch({ type: 'pause focusing' })

  return (
    <div className={styles.container}>
      <pre>{JSON.stringify(state)}</pre>
      <main className={cn(styles.flexCenterColumn, styles.main)}>
        <div className={cn(styles.flexCenterColumn, styles.title)}>Start focusing</div>
        <div className={cn(styles.flexCenterColumn, styles.countdown)}>
          {minutesLeft}:{secondsLeft}
        </div>
        {state.focusing ? (
          <div onClick={handlePauseButton} className={cn(styles.flexCenterColumn, styles.rounded)}>
            pause
          </div>
        ) : (
          <div onClick={handleStartButton} className={cn(styles.flexCenterColumn, styles.rounded)}>
            start
          </div>
        )}
      </main>
    </div>
  )
}
