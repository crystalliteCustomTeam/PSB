import PWMODE from "@/component/PublishingWorkMode"
import PUBLISHING from "@/component/printing/publishing"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact } from "@/component";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import Head from "next/head";

const BookPrinting = () => {
  return (
    <main>
      <Head>
        <title>Book Printing | Best Book Publishing Company</title>
        <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
      </Head>
      <MRHero
        title="Take Your Book Where Your Audience Is"
        desc="With thousands of publishing options to consider, our team helps you identify the right platform for your book."
        logos="images/banner/img2.png"
        counter={true}
        classes='bg-right bg-center !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/bookstore-with-bookshelf.png')]"
      />
      <Enlistedlogo />
      <PWMODE
        subTitle="Our Comprehensive Publishing Services"
        title="Are Streamlined To Help Our Clients Bring <br/> Their Ideas Onto Paper"
        desc="Our excellence stems from our unique and client-centric approach. We have catered to projects of various genres, formats, and platforms. Let us do the walking and talking on your behalf and see the exceptional results yourself."
      />
      <PUBLISHING />
      <PublishingNewComponent
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/WhiteBG.png')]"
        classes="!bg-cover !bg-no-repeat"
        textBG="bg-black"
        txtBlK="!text-black"
      />
      <BTM />
      <CTA />
      <SwiperComponents />
      <MRContact />
    </main>
  )
}

export default BookPrinting