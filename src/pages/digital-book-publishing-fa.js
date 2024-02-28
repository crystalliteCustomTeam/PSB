import Head from 'next/head'
// components
import Banner from '@/fa-component/Banner'
import Tradition from '@/fa-component/Tradition'
// import Climax from '@/fa-component/Climax'
import Audience from '@/fa-component/Audience'
import BroaderNew from '@/fa-component/BroaderNew'
import SwiperComponent from '@/component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import PublishingNewComponent from '@/fa-component/PublishingNewComponent'
// import { Helmet } from 'react-helmet'
// images
import bannerImg from 'media/ahsan/digital-book-banner.png'
import img2 from 'media/images/banner/img2.png'
import broader from 'media/ahsan/digital-book-broder.png'
import { MRHero, MRContact, MRQuestioners } from '@/component'

const MRQuestionersData = [
  {
    title: "You'll Save Time:",
    desc: "A professional book publishing service will handle all the technical aspects of creating and formatting your book, so you can focus on writing."
  },
  {
    title: "You'll Get Expert Help: ",
    desc: "A good digital book publishing service will have a team of experienced editors, designers, and marketers who can help make your book the best it can be."
  },
  {
    title: "You'll Reach A Wider Audience: ",
    desc: "With the help of a digital book publishing service , your book will be available to readers all over the world. "
  },
  {
    title: "You'll Make More Money: ",
    desc: "A professional book publishing service will ensure your book is priced correctly and marketed effectively, so you can earn more royalties. "
  }
]

const amazonpublishing = () => {
  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3 leading-tight'>Digital Book Publishing<br /> Services To Help You Get <br /> Your Book Into The Hands <br />  Of Interested Readers!</h1>;

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

        <title>Best Book Publishing Company - Best Selling Publisher - Amazon Publishing Services</title>
        <link rel="icon" href="/images/favicon.svg" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />

        {/* <Helmet>
  <script type="application/ld+json">
    {JSON.stringify(schema)}
  </script>
 </Helmet> */}
      </Head>

      {/*========= Banner =========*/}
      {/* {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          bannercounter={item.bannercounter}
          imageban={item.imageban}
          img2={item.img2}
        />
      )} */}
      <MRHero
        title="Digital Book Publishing Services To Help You Get Your Book Into The Hands Of Interested Readers!"
        logos="images/banner/img2.png"
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/front-view-beutiful-woman-working.png')]"
      />


      {/*========= Clients fold =========*/}
      {/* <Clients /> */}

      <Enlistedlogo />

      {/*========= Tradition fold =========*/}
      <Tradition
        title="Our Best Seller Publishing Services"
        desc="Let us help you make an impact through your words!"
      />

      {/*========= Enlisted fold =========*/}
      <MRQuestioners
        subTitle="Be a Part of the Best Sellers’ Fraternity"
        title="Why Should You Hire Us, The Digital Book Publishers?"
        desc="Amazon KDP is a self publishing service from Amazon that allows authors to publish and distribute their books worldwide. It's a fast, easy and affordable way to get your book into the hands of readers looking for new titles to enjoy."
        data={MRQuestionersData}
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
        title="We Are Better Than Other Digital Book Publishing Companies Out There!"
        desc="We enjoy being a prominent name based on several demanding features. Not to mention, our book publishers provide authors with platforms to publish and sell their books, as well as reach new readers. In addition, our seasoned publishers offer editorial and marketing services to help authors promote their books. Above all else, our digital book publishers also partner with traditional print publishers, giving authors the option to publish their books in both formats. This way, you are able to reach the widest possible audience for your work! <br/><br/>
        This is how we are different from others. First, our books publisher offer a unique approach to digital book publishing that allows authors to keep more of the rights to their work. This means that authors can control how their books are distributed and marketed, and they can also receive a higher percentage of the royalties. Last but not least, we offer our authors competitive royalties and marketing support, so they can continue to grow their careers and reach new readers.
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
