import Head from 'next/head'
// components
import Tradition from '@/fa-component/Tradition'
import EnlistedNew from '@/fa-component/childrenIllustration/EnlistedNew'
import BroaderNew from '@/fa-component/BroaderNew'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import SwiperComponent from '@/component/SwiperComponent'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import PublishingNewComponent from '@/fa-component/PublishingNewComponent'

// import { Helmet } from 'react-helmet'
// images
import bannerImg from 'media/ahsan/children-banner.png'
import img2 from 'media/images/banner/img2.png'
import broader from 'media/ahsan/children-broder.png'
import { MRHero, MRContact } from '@/component'

const amazonpublishing = () => {
  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3 leading-tight'>Pinnacle Publishing For<br /> Children's Illustration<br />Book</h1>

  const bannertext = [
    {
      title: newSpan,
      discuss: `LET'S DISCUSS`,
      homebannernum: '800-781-9093',
      bannercounter: 'counter',
      imageban: bannerImg,
      img2: img2,
    }
  ]
  return (
    <>
      <Head>

        <title>Ebook Publishing Company - Best Selling Publisher - Amazon Publishing Services</title>
        <link rel="icon" href="/images/favicon.svg" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />

        {/* <Helmet>
  <script type="application/ld+json">
    {JSON.stringify(schema)}
  </script>
 </Helmet> */}
      </Head>

      <MRHero
        title="Pinnacle Publishing For <br /> Children's Illustration Book"
        logos="images/banner/img2.png"
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/rendering-cartoon-fantasy-scene-illustration.png')]"
      />


      {/*========= Clients fold =========*/}
      {/* <Clients /> */}

      <Enlistedlogo />

      {/*========= Tradition fold =========*/}
      <Tradition
        title="Top-Notch Children's Illustration Services "
        desc="Our Skilled Publishing Experts Can Guide You Through The Publishing Process"
      />

      {/*========= Enlisted fold =========*/}
      <EnlistedNew
        subtitle="Be a Part of the Best Sellers’ Fraternity"
        title="How Best Self Publishing Services Companies Can Help You Succeed As A Published Author? "
        paragraph="As an author, you have a lot of control over the success of your book. But did you know that there are companies out there whose sole purpose is to help you self-publish your book and make it a success? These are called self publishing book services companies, and they can provide everything from writing and editing to marketing and distribution.  "
      />

      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />

      {/*========= Broader fold =========*/}
      <BroaderNew
        subtitle=""
        title="Publishing Children's <br/> Illustration With The Best <br/> Seller Publishing Services! "
        desc="“Whatever you may have heard, self-publishing is not a shortcut to anything. Except maybe insanity. Self-publishing, like every other kind of publishing, is hard work. You don’t wake up one morning good at it. You have to work for that.” — Zoe Winters <br/> <br/>
        When you're ready to publish your book, you want to ensure you're working with a reputable and reliable self-publishing company. Best Selling Publisher is one of the best in the business, and we're proud to offer our services to authors looking to self-publish. Call us today to become a published author!.
        "
        image={broader}
      />
      {/*========= CTA fold =========*/}
      <BTM />
      <CTA />

      {/*========= swiperComponent fold =========*/}
      <SwiperComponent />

      {/*========= Bookshelf fold =========*/}
      <MRContact />
    </>
  )
}

export default amazonpublishing
