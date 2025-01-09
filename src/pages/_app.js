import "@/styles/globals.css"
import "@/styles/custom.css"
import { useState, useEffect } from "react"
import Head from "next/head"
import Headernew from "@/component/Headernew"
import Footer1 from "@/component/Footer1"
import { SfProDisplay, primary, fontMono } from "@/configs/fonts"
import Script from "next/script"
import { useRouter } from "next/router"
import Loader from "@/component/Loader/Loader"

export default function App({ Component, pageProps }) {
  const [loadScript, setLoadScript] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoadScript(true), 5000)
    return () => clearTimeout(timer)
  }, [])
  const router = useRouter()
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.svg" />
        <meta
          name="google-site-verification"
          content="R28eoLjUYrldzCTVPJyB50E-zTd2cWaogKpJP3ycGFM"
        />
      </Head>
      <main
        className={`${primary.className} ${SfProDisplay.variable} ${fontMono.variable} `}
      >
        {router.pathname == "/lp-one" ||
        router.pathname == "/audiobook-production-services" ||
        router.pathname == "/book-marketing-company" ||
        router.pathname == "/case-studies" ||
        router.pathname == "/book-illustration-services" ||
        router.pathname == "/children-book-publishing-lp" ||
        router.pathname == "/lp/book-publishing-company" ||
        router.pathname == "/blogs" ||
        router.pathname == "/lp/book-marketing-company" ||
        router.pathname == "/booknewbrand-v2" ||
        router.pathname == "/lp/book-marketing-lp" ? (
          ""
        ) : (
          <Headernew />
        )}
        {/* {loadScript ? <Component {...pageProps} /> : <Loader />} */}
        <Component {...pageProps} />
        {router.pathname == "/book-marketing-company" ||
        router.pathname == "/audiobook-production-services" ||
        router.pathname == "/lp/book-publishing-company" ||
        router.pathname == "/book-illustration-services" ||
        router.pathname == "/children-book-publishing-lp" ||
        router.pathname == "/lp/book-marketing-company" ? (
          ""
        ) : (
          <Footer1 />
        )}
      </main>
      {loadScript && (
        <>
          <Script>
            {`
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function() {
          var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = 'https://embed.tawk.to/677eaf1949e2fd8dfe046557/1ih3dnvtn';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin', '*');
          s0.parentNode.insertBefore(s1, s0);
        })();
        `}
          </Script>
          <Script id="chat-script-1">
            {`(function(w,d,s,l,i){
        w[l] = w[l] || [];
        w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
        var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-WQT66SHZ');`}
          </Script>
          <Script
            id="chat-script-2"
            src="https://www.googletagmanager.com/gtag/js?id=G-66Q1HF396Z"
          ></Script>
          <Script id="chat-script-3">{`
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-66Q1HF396Z');
    `}</Script>
          <noscript>
            <a
              href="https://embed.tawk.to/677dc97f49e2fd8dfe03fd14/1ih1lm789"
              rel="nofollow"
            >
              Chat with us
            </a>
            , powered by{" "}
            <a
              href="https://www.tawk.to"
              rel="noopener nofollow"
              target="_blank"
            >
              Tawk.to
            </a>
          </noscript>
        </>
      )}
    </>
  )
}
