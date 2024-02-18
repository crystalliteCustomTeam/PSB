import "@/styles/globals.css";
import "@/styles/custom.css"
import React, { useEffect } from 'react';
import Headernew from "../component/Headernew";
import Footer1 from "../component/Footer1";
import { SfProDisplay, primary } from "@/configs/fonts";
import Script from "next/script";
// import Zendesk, { ZendeskAPI } from "../pages/zendesk";
// const ZENDESK_KEY = "325da280-f4f0-4c80-997f-ea4de45eb2f1";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=0b817d63-4ced-4290-829c-a9889a9d1780';
    script.async = true;

    // Append script to the body
    document.body.appendChild(script);

    // Clean up script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // const handleLoaded = () => {
  //   zE('webWidget:on', 'open', function () {
  //   });
  // };

  return (
    <>
      <main className={`${primary.className} ${SfProDisplay.variable}`}>
        <Headernew />
        <Component {...pageProps} />
        <Footer1 />
      </main>
      
    </>
  );
}