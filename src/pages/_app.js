import "@/styles/globals.css"
import "@/styles/custom.css"
import Head from "next/head"
import Headernew from "@/component/Headernew"
import Footer1 from "@/component/Footer1"
import { SfProDisplay, primary } from "@/configs/fonts"
import { useRouter } from "next/router"
import { ThirdPartyScript } from "@/component"

export default function App({ Component, pageProps }) {

  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.svg" />
        <meta name="google-site-verification" content="R28eoLjUYrldzCTVPJyB50E-zTd2cWaogKpJP3ycGFM" />
      </Head>
      <main className={`${primary.className} ${SfProDisplay.variable}`}>
        {router.pathname == "/lp-one"
          || router.pathname == "/audio-book-lp1"
          || router.pathname == "/book-marketing-company"
          || router.pathname == "/case-studies" || router.pathname == "/lp-three"
          || router.pathname == "/lp-four"
          ? "" : <Headernew />}
        {/* {loadScript ? <Component {...pageProps} /> : <Loader />} */}
        <Component {...pageProps} />
        {router.pathname == "/book-marketing-company"
          || router.pathname == "/audio-book-lp1"
          || router.pathname == "/lp-four" || router.pathname == "/lp-three" ? "" : <Footer1 />}
      </main>
      <ThirdPartyScript />
    </>
  )
}