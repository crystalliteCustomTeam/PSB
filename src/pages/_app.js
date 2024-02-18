import "@/styles/globals.css";
import "@/styles/custom.css"
import { useState } from 'react';
import Headernew from "../component/Headernew";
import Footer1 from "../component/Footer1";
import { SfProDisplay, primary } from "@/configs/fonts";
import Script from "next/script";
// import Zendesk, { ZendeskAPI } from "../pages/zendesk";
// const ZENDESK_KEY = "325da280-f4f0-4c80-997f-ea4de45eb2f1";

export default function App({ Component, pageProps }) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleMouseEnter = () => {
    if (!scriptLoaded) {
      console.log("DONE");
      setScriptLoaded(true); // This will trigger the script to load
    }
  };


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
      <div onMouseEnter={handleMouseEnter}>
      
      {scriptLoaded && (
        <Script
          src="https://static.zdassets.com/ekr/snippet.js?key=0b817d63-4ced-4290-829c-a9889a9d1780"
          id="ze-snippet"
          strategy="afterInteractive"
        />
      )}
    </div>
    </>
  );
}