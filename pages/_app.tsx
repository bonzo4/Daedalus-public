import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ErrorBoundary from '@/error/ErrorBoundary';
import GlobalProvider from '@/context/GlobalProvider';
import WindowSize from '@/context/WindowSize';
import { NextUIProvider } from '@nextui-org/react'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ErrorBoundary>
        <GlobalProvider>
          <NextUIProvider> 
            <WindowSize>
              <Component {...pageProps} />
            </WindowSize>
          </NextUIProvider>
        </GlobalProvider>
      </ErrorBoundary>

  )
}

export default MyApp
