import type { AppProps } from 'next/app'
import ErrorBoundary from '@/error/ErrorBoundary';
import GlobalProvider from '@/context/GlobalProvider.js';
import WindowSize from '@/context/WindowSize';
import { NextUIProvider } from '@nextui-org/react';
import Wallet from '../components/Wallet'
import '@/styles/globals.scss';
import '@/styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <GlobalProvider>
        <NextUIProvider>
          <WindowSize>
            <Wallet>
              <Component {...pageProps} />
            </Wallet>
          </WindowSize>
        </NextUIProvider>
      </GlobalProvider>
    </ErrorBoundary>

  )
}

export default MyApp
