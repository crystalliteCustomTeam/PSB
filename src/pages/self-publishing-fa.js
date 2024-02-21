import Head from 'next/head'
// components
import Banner from '@/fa-component/Banner'
import Tradition from '@/fa-component/Tradition'
// import Climax from '@/fa-component/Climax'
import EnlistedNew from '@/fa-component/selfpublishing/EnlistedNew'
import Audience from '@/fa-component/Audience'
import BroaderNew from '@/fa-component/BroaderNew'
import Plans from '@/fa-component/Plans'
import Bookshelf from '@/fa-component/Bookshelf'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import Exceptional from '@/fa-component/Exceptional'
import SwiperTestimonial from '@/fa-component/swiperComponent'

// import { Helmet } from 'react-helmet'
// images
import bannerImg from 'media/ahsan/self-publishing-banner.png'
import img2 from 'media/images/banner/img2.png'
import broader from 'media/ahsan/self-publishing-broder.png'
import { MRHero } from '@/component'

const amazonpublishing = () => {
  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3 leading-tight'>Best Self Publishing Services <br /> - Your One-Stop Solution<br /> For Self Publishing Success!</h1>
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
        title="Best Self Publishing Services - <br /> Your One-Stop Solution For <br /> Self Publishing Success!"
        logos="images/banner/img2.png"
        counter={true}
      />


      {/*========= Clients fold =========*/}
      {/* <Clients /> */}

      <Enlistedlogo />

      {/*========= Tradition fold =========*/}
      <Tradition
        title="Top-Notch Self Publishing Services "
        desc="Our SkilledPublishing Experts Can Guide You Through The Publishing Process"
      />

      {/*========= Enlisted fold =========*/}
      <EnlistedNew
        subtitle=""
        title="How Best Self Publishing Services <br/> Companies Can Help You Succeed"
        desc=" As A Published Author? "
        desc2=""
        paragraph="As an author, you have a lot of control over the success of your book. But did you know that there are companies out there whose sole purpose is to help you self-publish your book and make it a success? These are called self publishing book services companies, and they can provide everything from writing and editing to marketing and distribution. "
      />
      {/*========= Broader fold =========*/}
      <BroaderNew
        subtitle=""
        title="Publishing Your Dreams <br/> With The Best Seller <br/> Publishing Services! "
        desc="“Whatever you may have heard, self-publishing is not a shortcut to anything. Except maybe insanity. Self-publishing, like every other kind of publishing, is hard work. You don’t wake up one morning good at it. You have to work for that.” — Zoe Winters <br/> <br/>
        When you're ready to publish your book, you want to ensure you're working with a reputable and reliable self-publishing company. Best Selling Publisher is one of the best in the business, and we're proud to offer our services to authors looking to self-publish. Call us today to become a published author!.
        "
        image={broader}
      />
      {/*========= Audience fold =========*/}
      <Audience />

      {/*========= Exceptional fold =========*/}
      <Exceptional
        title="We Are The Best Book Publishing <br/> Company You Will Ever Find!"
        subtitle="We offer a wide range of services to help you self-publish your book, including editing, cover design, printing, and distribution. Best Selling <br/> Publisher has a long history of working with authors to self-publish their books. We've helped many authors achieve success with their self-<br/>published books. Here’s what we bring to the table.  "
      />

      {/*========= swiperComponent fold =========*/}
      <SwiperTestimonial />

      {/*========= Plans fold =========*/}
      <Plans />

      {/*========= Bookshelf fold =========*/}
      <Bookshelf />
    </>
  )
}

export default amazonpublishing
