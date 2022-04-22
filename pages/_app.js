import { AppContext } from '../context/AppContext'
import { useBaseState } from '../context/useBaseState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppContext.Provider value={useBaseState}> 
    <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
