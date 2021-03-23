import Head from 'next/head'
import React, { FC, useEffect, useState } from 'react'
import { useAppState } from '../hooks/useAppState'

interface LayoutProps {
  title: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  const { state } = useAppState()

  const [currentTitle, setTitle] = useState(title)

  useEffect(() => {
    let interval
    if (!state.resting && state.pauseType === 'beforeResting') {
      let cnt = 0
      setInterval(() => {
        const number = (cnt % 3) + 1
        setTitle(Array(number).fill('🟢').join(''))
        cnt += 1
      }, 1000)
    } else {
      setTitle(title)
    }

    return (): void => clearInterval(interval)
  }, [state.resting, state.pauseType])

  return (
    <div id="layout">
      <Head>
        <title>{currentTitle}</title>
      </Head>
      {children}
    </div>
  )
}
