import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Just_Another_Hand } from "next/font/google"

const justAnotherHand = Just_Another_Hand({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: "400",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${justAnotherHand.variable} serif`}>
      <Component {...pageProps} />
    </div>
  )
}
