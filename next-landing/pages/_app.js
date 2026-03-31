// New Next.js App wrapper
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }){
  return <Component {...pageProps} />
}