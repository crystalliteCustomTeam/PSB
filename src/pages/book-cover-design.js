import WEARE from "@/component/CoverDesign/LetUsWEARE"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import BOOKCOVERS from "@/component/CoverDesign/BookCovers"
import TAbNAVIGATION from "@/component/CoverDesign/TabNavigateCovers"
import WORKON from "@/component/CoverDesign/ProcessWorkMode"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent1 } from "@/component"
import OurComprehensive from "@/component/OurComprehensive"
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import Head from "next/head"

const BookCoverDesign = () => {
  return (
    <main>
      <Head>
        <title>Magazine Writing | Best Selling Publisher</title>
        <meta name="description" content="At Best Selling Publisher, we take pride in our exceptional article writing services. Connect with us to start your publishing journey today!" />
      </Head>
      <MRHero
        title="The Most Attractive Cover Designs To Gain The Attention Of Potential Readers"
        desc="Our creative designers understand the importance of creating attractive cover designs that compel the readers who might potentially want to see your book to purchase it."
        logos="images/banner/img2.png"
        classes='!py-[80px] bg-[#fefefe]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/world-book-day.png')]"
        counter={true}
      />
      <Enlistedlogo />
      <MRContent1
        subTitle="The Most Immaculate Book Cover Designs"
        title="Create An Outstanding Book Cover That Stands Out"
        desc="Our creative designers will work to bring life to your book project with their amazing and artistic creative skill set. The importance of a good book cover cannot be understated. It can make or break your book and therefore it must be handled with priority."
        img1="/imageAR/cover-design2.png"
        list={[
          "We Provide Diverse Formats And Design Types",
          "Customer Satisfaction Is Our Driving Force.",
          "You Are The Sole Owner Of The Design Once It's Delivered.",
          "We Are Available 24/7 For Your Assistance."
        ]}
        direction="flex-row-reverse"
      />
      <OurComprehensive />
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
      <CTA />
      <SwiperComponents />
      <MRContact />
    </main>
  )
}

export default BookCoverDesign