import { Layout } from '../containers/Layout'
import { AppContext } from '../context/AppContext'
import { useBaseState } from '../context/useBaseState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppContext.Provider value={useBaseState}>
      <Layout>
          <Component {...pageProps} />
      </Layout> 
    </AppContext.Provider>
  )
}

export default MyApp
