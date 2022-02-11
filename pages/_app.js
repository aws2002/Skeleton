import Layout from '../components/Layouts/Layout '
import '../styles/main.scss'
import "../components/Skeleton/skeleton.scss"
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}