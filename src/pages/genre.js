import WEARE from "@/component/genre/LetUsWEARE"
import MANUSCRIPT from "@/component/genre/manuscript"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact } from "@/component"
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import Head from "next/head"

const Genre = () => {
  return (
    <main>
      <Head>
        <title>Genre | Best Selling Publisher</title>
        <meta name="description" content="At Best Selling Publisher, we take pride in our exceptional article writing services. Connect with us to start your publishing journey today!" />
      </Head>
      <MRHero
        title="We Are The Gatekeepers Of Literary Success"
        desc="Our mission as a company is to bring you literary success. How we go about achieving that is our ghostwriter’s magic. We offer great content for every book genre, whether you need fiction, autobiography, memoirs, or children’s books."
        logos="images/banner/img2.png"
        counter={true}
        classes='bg-[#fefefe] !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/books-library.png')]"
      />
      <Enlistedlogo />
      <WEARE />
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <MANUSCRIPT />
      <BTM />
      <CTA />
      <SwiperComponents />
      <MRContact />
    </main>
  )
}

export default Genre