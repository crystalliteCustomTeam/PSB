// Next
import Head from "next/head"

// Components
import { Popup } from "@/component/LP-Eight"
import {
  About,
  Authors,
  BestSeller,
  Brands,
  Features,
  Footer,
  Header,
  Hero,
  Portfolio,
  Reviews,
} from "@/component/LP-Nine"

const LandingPage1 = () => {
  return (
    <>
      <Head>
        <title>BECOME A BEST SELLING AUTHOR AT 85% OFF!</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <Header />
      <Hero />
      <Authors />
      <About />
      <Portfolio />
      <Features />
      <BestSeller />
      <Reviews />
      <Brands />
      <Footer />
      <Popup popupDesc="HIRE <strong>TOP GHOSTWRITERS AT 85% OFF</strong> TO CREATE YOUR TIMELESS WORK" />
    </>
  )
}

export default LandingPage1
