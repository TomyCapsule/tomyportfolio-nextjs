import '../styles/globals.css'
import store from '../app/store'
import { Provider } from 'react-redux'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/briefcase-icon.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/briefcase-icon.png" />
        <title>Tomy Visouthiphongs</title>
        <meta
            name="description"
            content="Développeur full-stack junior"
            />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
