import "@/styles/globals.css";
import "@/styles/custom.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Headernew from "@/component/Headernew";
import Footer1 from "@/component/Footer1";
import { SfProDisplay, primary, fontMono } from "@/configs/fonts";
import Script from "next/script";
import { useRouter } from "next/router";
import Loader from "@/component/Loader/Loader";
import { PopupProvider } from "@/component/LP-Eight/Popup/PopupContext";
export default function App({ Component, pageProps }) {
  const [loadScript, setLoadScript] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadScript(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.svg" />
        <meta
          name="google-site-verification"
          content="xsimMs7zxe8r99xjQlDHSjHap86u9irM9JTHkI3xNpg"
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
        router.pathname == "/lp-publishing" ||
        router.pathname == "/lp-publishing-2" ||
        router.pathname == "/lp/book-promotion-marketing" ||
        router.pathname == "/lp/lp1" ||
        router.pathname == "/lp/lp2" ||
        router.pathname == "/lp/lp3" ||
        router.pathname == "/lp/lp4" ||
        router.pathname == "/lp/book-marketing-lp" ? (
          ""
        ) : (
          <Headernew />
        )}
        {/* {loadScript ? <Component {...pageProps} /> : <Loader />} */}
        <PopupProvider>
          <Component {...pageProps} />
        </PopupProvider>
        {router.pathname == "/book-marketing-company" ||
        router.pathname == "/audiobook-production-services" ||
        router.pathname == "/lp/book-publishing-company" ||
        router.pathname == "/book-illustration-services" ||
        router.pathname == "/children-book-publishing-lp" ||
        router.pathname == "/lp/book-marketing-company" ||
        router.pathname == "/lp/book-promotion-marketing" ||
        router.pathname == "/lp/lp1" ||
        router.pathname == "/lp/lp2" ||
        router.pathname == "/lp/lp3" ||
        router.pathname == "/lp/lp4" ||
        router.pathname == "/lp-publishing" ||
        router.pathname == "/lp-publishing-2" ? (
          ""
        ) : (
          <Footer1 />
        )}
      </main>
      {loadScript && (
        <>
          {/* LiveChat Script */}
          <Script strategy="afterInteractive" id="livechat-script">
            {`
              window.__lc = window.__lc || {};
              window.__lc.license = 19030650;
              window.__lc.integration_name = "manual_onboarding";
              window.__lc.product_name = "livechat";
              (function(n, t, c) {
                function i(n) {
                  return e._h ? e._h.apply(null, n) : e._q.push(n);
                }
                var e = {
                  _q: [], _h: null, _v: "2.0",
                  on: function() { i(["on", c.call(arguments)]) },
                  once: function() { i(["once", c.call(arguments)]) },
                  off: function() { i(["off", c.call(arguments)]) },
                  get: function() {
                    if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                    return i(["get", c.call(arguments)]);
                  },
                  call: function() { i(["call", c.call(arguments)]) },
                  init: function() {
                    var n = t.createElement("script");
                    n.async = true;
                    n.type = "text/javascript";
                    n.src = "https://cdn.livechatinc.com/tracking.js";
                    t.head.appendChild(n);
                  }
                };
                !n.__lc.asyncInit && e.init();
                n.LiveChatWidget = n.LiveChatWidget || e;
              })(window, document, [].slice);
            `}
          </Script>

          {/* Google Tag Manager */}
          <Script strategy="afterInteractive" id="gtm-script">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MXL5ZHGD');
            `}
          </Script>

          {/* Google Ads Script */}
          <Script
            strategy="afterInteractive"
            id="google-ads-script"
            src="https://www.googletagmanager.com/gtag/js?id=AW-11022581138"
          />
          <Script strategy="afterInteractive" id="google-ads-config">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'AW-11022581138');
              gtag('config', 'G-PK8EMGVCNL');
            `}
          </Script>
        </>
      )}
    </>
  );
}
