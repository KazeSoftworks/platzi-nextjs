import Layout from '@components/Layout/Layout'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { Lato } from '@next/font/google'
import { Provider } from 'jotai'

const lato = Lato({ weight: '400' })
const GlobalStyles = createGlobalStyle`
html,
  body {
padding: 0;
margin: 0;
font-family: ${lato.style.fontFamily}, sans-serif;
}
a, a:visited, a:hover, a:active {
  text-decoration: none;
  color: inherit;
}
* {
box-sizing: border-box;
}
`

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  // Providers - Context/Providers, Theme, data
  // Layout
  // props adicionales
  return (
    <Provider>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
