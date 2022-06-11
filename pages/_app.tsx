import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ErrorBoundary from '@/error/ErrorBoundary';
import WindowSize from '@/context/WindowSize';
import { NextUIProvider } from '@nextui-org/react'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider> 
      <ErrorBoundary>
        <WindowSize>
          <Component {...pageProps} />
        </WindowSize>
      </ErrorBoundary>
    </NextUIProvider>
  )
}

export default MyApp
