import '../styles/globals.scss'
import { ReactElement } from 'react'
import { AppStateProvider } from '../hooks/useAppState'

const App = ({ Component, pageProps }): ReactElement => {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  )
}

export default App
