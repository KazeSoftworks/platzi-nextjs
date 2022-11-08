import Layout from 'components/Layout/Layout'
import { AppProps } from 'next/app'

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  // Providers - Context/Providers, Theme, data
  // Layout
  // props adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
