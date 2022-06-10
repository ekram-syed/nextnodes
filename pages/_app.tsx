// Next-Auth Shared Session
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function NextNode({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default NextNode
