import React, { FC } from 'react'
import styles from '../styles/Home.module.scss'
import cn from 'classnames'

interface InnerAppProps {
  handleStart(): void
  handlePause(): void
  minutesLeft: string
  secondsLeft: string
  running: boolean
  type: 'resting' | 'focusing'
}

export const InnerApp: FC<InnerAppProps> = ({ minutesLeft, secondsLeft, handleStart, handlePause, running, type }) => {
  return (
    <div className={cn(styles.container, { [styles.resting]: type === 'resting' })}>
      <main className={cn(styles.flexCenterColumn, styles.main)}>
        <div className={cn(styles.flexCenterColumn, styles.title)}>{type === 'focusing' ? 'Focusing' : 'Resting'}</div>
        <div className={cn(styles.flexCenterColumn, styles.countdown)}>
          {minutesLeft}
          <span className={styles.separator}>:</span>
          {secondsLeft}
        </div>
        {running ? (
          <div onClick={handlePause} className={cn(styles.flexCenterColumn, styles.rounded)}>
            pause
          </div>
        ) : (
          <div onClick={handleStart} className={cn(styles.flexCenterColumn, styles.rounded)}>
            start
          </div>
        )}
      </main>
    </div>
  )
}
