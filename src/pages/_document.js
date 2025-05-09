import { primary } from "@/configs/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className={`${primary.variable} font-sans`}>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MXL5ZHGD"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
