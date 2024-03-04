import PWMODE from "@/component/PublishingWorkMode"
import PUBLISHING from "@/component/printing/publishing"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRCards } from "@/component";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import Head from "next/head";

const BookPrinting = () => {
  const MRCardData = [
    {
      classes: "bg-[#fff] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      cta: false,
      stepText: false,
      indexing:false,
      content: [
        {
          title: "Low Upfront Costs",
          textColor:"text-[#40BEE2]",
          desc: "Publishing children's books is no easy undertaking. Even though the book is only a little over 100 pages long, not everything appeals to these tiny beings. It takes several rewrites and re-drafts to concisely express an idea with a clear message, and we are here to assist.",
          minHeight:"overflow-y-scroll h-[130px]",
        },
        {
          title: "Complete Publishing Solution",
          textColor:"text-[#40BEE2]",
          desc: "From publishing your book on the appropriate platform to creating strategies to generate online exposures for your compositions, we provide a complete package of marketing to ebook publishing services, where our professionals devote their time and expertise to ensure your book is getting the attention and acclaim it deserves.",
          minHeight:"overflow-y-scroll h-[130px]",
        },
        {
          title: "Print On Demand",
          textColor:"text-[#40BEE2]",
          desc: "Professional book authors and buyers rely on us to complete high-quality bulk book printing projects on time. We also distribute books without having to buy and store hundreds of books on your own.",
          minHeight:"overflow-y-scroll h-[130px]",
        },
        {
          title: "Reach Millions Of Readers",
          textColor:"text-[#40BEE2]",
          desc: "We will help you reach millions of readers who enjoy the genre of your book through our book promotion services for authors, ensuring an increase in visibility and sales.",
          minHeight:"overflow-y-scroll h-[130px]",
        },
      ]
    },
  ]
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
      <MRCards
        subTitle="Our Comprehensive Publishing Services"
        title={`Are Streamlined To Help Our Clients Bring <br/>
        Their Ideas Onto Paper `}
        desc="Our excellence stems from our unique and client-centric approach. We have catered to projects of various genres, formats, and platforms. Let us do the walking and talking on your behalf and see the exceptional results yourself."
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData}
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