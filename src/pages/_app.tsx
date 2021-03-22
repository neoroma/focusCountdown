import '../styles/globals.scss'
import { ReactElement } from 'react'

const App = ({ Component, pageProps }): ReactElement => {
  return <Component {...pageProps} />
}

export default App
