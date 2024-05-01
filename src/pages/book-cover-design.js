import WEARE from "@/component/CoverDesign/LetUsWEARE"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import BOOKCOVERS from "@/component/CoverDesign/BookCovers"
import TAbNAVIGATION from "@/component/CoverDesign/TabNavigateCovers"
import WORKON from "@/component/CoverDesign/ProcessWorkMode"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent1, MRCards } from "@/component"
import OurComprehensive from "@/component/OurComprehensive"
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import Head from "next/head"

const BookCoverDesign = () => {
  const MRCardData = [
    {
      classes: "bg-[#fff] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      cta: false,
      stepText: false,
      indexing: false,
      content: [
        {
          title: "Concept Development:",
          textColor: "text-[#40BEE2]",
          desc: "Creating the perfect book cover starts with an idea, a spark that captures the essence of your story. Our design process starts with concept development, a stage we approach with careful attention to detail. We get it — your book's cover is much more than just a visual; it’s the first impression of the story within. and that’s exactly what we prioritize. ",
        },
        {
          title: "Custom Illustration and Artwork:",
          textColor: "text-[#40BEE2]",
          desc: "Our team of talented artists and illustrators is dedicated to bringing each author's vision to life through bespoke artwork that reflects the essence of their story. Your story is unique, and so should be its visual companion. Let’s create something unforgettable together",
        },
        {
          title: "Typography and Layout:",
          textColor: "text-[#40BEE2]",
          desc: "Whether your story whispers of age-old mysteries through elegant serif fonts or pulses with the heart-stopping pace of modern thrillers through bold, contemporary typefaces, we carefully craft the typography to resonate with your book's genre, mood, and intended audience.",
        },
        {
          title: "Print and Digital Optimization:",
          textColor: "text-[#40BEE2]",
          desc: "Your book needs to make a splash, both in hand and on screen. That’s why we're careful about every pixel and print detail in your book cover design. Our commitment to mastering print and digital mediums means your story gets the spotlight it deserves everywhere your readers are.",
        },
      ]
    },
  ]
  const MRCardData2 = [
    {
      classes: "bg-[#fff] shadow-lg mr-2xl:px-4 px-2 rounded-xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      stepText: "Step",
      indexing: true,
      content: [
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Submit Your Manuscript",
          desc: "Share your manuscript, and we will get started.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Edit & Design",
          desc: "We retain the context but add that artistic flavor.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Review & Approve",
          desc: "You review and approve our creative contributions.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Publish & Distribute",
          desc: "Your book has been published and distributed.",
        },
      ]
    }]
  return (
    <main>
      <Head>
        <title>Custom Book Cover Designs | Best Selling Publisher</title>
        <meta name="description" content="Stand out in a crowded shelf with our innovative book cover designs. Let our creative team design a cover that commands attention. Contact us today!" />

        <meta property="og:url" content="https://bestsellingpublisher.com/book-cover-design" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public" />

        {/* canonical: */}
        <link rel="canonical" href="https://bestsellingpublisher.com/book-cover-design" />
      </Head>
      <MRHero
        title="Covers that Let You Judge a Book"
        desc="First impressions matter — BIG TIME! Do you want to make a great first impression of your book? <span class='h-3 block'></span>
        At Best Selling Publisher, we believe the success of your book starts with its cover. Our goal is to create the most attractive cover designs, turning your manuscript into a visual standout that commands attention. Let's start this creative process together."
        logos="images/banner/img2.png"
        classes='!py-[80px] bg-[#fefefe]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/world-book-day.png')]"
        counter={true}
      />
      <Enlistedlogo />
      <MRContent1
        subTitle="The Most Immaculate Book Cover Designs"
        title="Creating Captivating Book Cover Designs For Your Books"
        desc="Whether it's through striking imagery, elegant typography, or innovative concepts, a book’s cover is its initial introduction to potential readers, offering a glimpse into the adventure that awaits inside. <span class='h-3 block'></span>
        At Best Selling Publisher, we recognize the significance of this first interaction. Our team of creative designers is committed to producing designs that reflect the essence of your story while enticing readers to explore further.
        "
        img1="/imageAR/cover-design2.png"
        list={[
          "We retain your concept and offer immaculate embellishment.",
          "Customer satisfaction is our top priority.",
          "Complete ownership over the final book cover.",
          " 24/7 assistance for all your queries and concerns."
        ]}
        direction="flex-row-reverse"
      />
      <MRCards
        subTitle="Our Book Covers Offer"
        title={`An Exceptional First Impression of Your Book`}
        desc="We treat every book cover like a canvas. Our trained professionals ensure that every stroke on the canvas projects vibrancy and vividness."
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8"
        classes="bg-[url('../../public/imageAR/our-comprehensive.png')] bg-no-repeat bg-cover bg-center"
        cta={true}
        variant="steps"
        data={MRCardData}
        theme="dark"
      />
      <BOOKCOVERS />
      <TAbNAVIGATION />
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <WORKON />
      <BTM />
      <CTA
        subtitle="We Can't Wait to "
        title="Get Started on Your Project!"
        desc="Our dedicated team is here to assist you during our working hours, always eager to answer your questions and cater to your needs. We warmly invite you to reach out and start a conversation with us. Your vision and requirements are our top priority. Don't hesitate to get in touch and let us help you get your book to the right audience!"
      />
      <MRCards
        subTitle="We Pursue"
        title={`A Swift Work Mode that Involves <br class="mr-xl:block hidden" /> 4 Easy Steps`}
        desc={`We emphasize prompt deliveries because we don’t like to keep you waiting. Following are the <br class="mr-xl:block hidden" /> 4 easy steps that keep us streamlined from the beginning:`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData2} />
      <SwiperComponents />
      <MRContact />
    </main>
  )
}

export default BookCoverDesign