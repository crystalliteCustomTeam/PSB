import Head from 'next/head'
// components
import Banner from '@/fa-component/Banner'
import Tradition from '@/fa-component/Tradition'
// import Climax from '@/fa-component/Climax'
import EnlistedNew from '@/fa-component/digitalbookpublishing/EnlistedNew'
import Audience from '@/fa-component/Audience'
import BroaderNew from '@/fa-component/BroaderNew'
import Plans from '@/fa-component/Plans'
import Bookshelf from '@/fa-component/Bookshelf'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import Exceptional from '@/fa-component/Exceptional'
import SwiperTestimonial from '@/fa-component/swiperComponent'

// import { Helmet } from 'react-helmet'
// images
import bannerImg from 'media/ahsan/digital-book-banner.png'
import img2 from 'media/images/banner/img2.png'
import broader from 'media/ahsan/digital-book-broder.png'
import { MRHero } from '@/component'

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
      <EnlistedNew
        subtitle=""
        title="Why Should You Hire Us,"
        desc="The Digital Book Publishers?"
        desc2=""
        paragraph="Amazon KDP is a self publishing service from Amazon that allows authors to publish and distribute their books worldwide. It's a fast, easy and affordable way to get your book into the hands of readers looking for new titles to enjoy."
      />
      {/*========= Broader fold =========*/}
      <BroaderNew
        title="We Are Better Than Other Digital Book Publishing Companies Out There!"
        desc="We enjoy being a prominent name based on several demanding features. Not to mention, our book publishers provide authors with platforms to publish and sell their books, as well as reach new readers. In addition, our seasoned publishers offer editorial and marketing services to help authors promote their books. Above all else, our digital book publishers also partner with traditional print publishers, giving authors the option to publish their books in both formats. This way, you are able to reach the widest possible audience for your work! <br/><br/>
        This is how we are different from others. First, our books publisher offer a unique approach to digital book publishing that allows authors to keep more of the rights to their work. This means that authors can control how their books are distributed and marketed, and they can also receive a higher percentage of the royalties. Last but not least, we offer our authors competitive royalties and marketing support, so they can continue to grow their careers and reach new readers.
        "
        image={broader}
      />
      {/*========= Audience fold =========*/}
      <Audience />

      {/*========= Exceptional fold =========*/}
      <Exceptional
        title="We Are TheBest Digital Book Publishers Bringing <br/>
        A Plethora Of Services To Your Doorstep!"
        subtitle="Our best digital book publishers bring sheer expertise in publishing to the table, ensuring you get the perfect publication of your asset. Our <br/> publishing packages don't create holes in your pocket, so rest assured you get the best results at accessible price points. "
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
