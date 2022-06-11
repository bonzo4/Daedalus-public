import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ErrorBoundary from '@/error/ErrorBoundary';
import { NextUIProvider } from '@nextui-org/react'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider> 
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </NextUIProvider>
  )
}

export default MyApp
