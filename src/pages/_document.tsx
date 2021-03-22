import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  public render(): ReactElement {
    return (
      <Html>
        <Head>
          <title>Countdown timer</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Chango&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
