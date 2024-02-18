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

  const loadScriptManually = () => {
    if (scriptLoaded) return; // If the script is already loaded, do nothing

    const script = document.createElement('script');
    script.src = "https://static.zdassets.com/ekr/snippet.js?key=0b817d63-4ced-4290-829c-a9889a9d1780";
    script.async = true;
    script.id = "ze-snippet";

    document.body.appendChild(script); // Append the script to the body

    script.onload = () => {
      console.log('Script loaded successfully');
      setScriptLoaded(true); // Update the state to indicate the script has loaded
    };

    script.onerror = (error) => {
      console.error('Script failed to load', error);
    };
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
      <div onMouseEnter={loadScriptManually}>
      
      </div>
    </>
  );
}