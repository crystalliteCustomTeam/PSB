import Head from 'next/head'
// components
import Banner from '@/fa-component/Banner'
import Tradition from '@/fa-component/Tradition'
// import Climax from '@/fa-component/Climax'
import EnlistedNew from '@/fa-component/ebookpublishing/EnlistedNew'
import Audience from '@/fa-component/Audience'
import BroaderNew from '@/fa-component/BroaderNew'
import Plans from '@/fa-component/Plans'
import Bookshelf from '@/fa-component/Bookshelf'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import Exceptional from '@/fa-component/Exceptional'
import SwiperTestimonial from '@/fa-component/swiperComponent'

// import { Helmet } from 'react-helmet'
// images
import bannerImg from 'media/ahsan/ebook-banner.png'
import img2 from 'media/images/banner/img2.png'
import broader from 'media/ahsan/ebook-broder.png'
import { MRHero } from '@/component'

const amazonpublishing = () => {
  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3 leading-tight'>Create The Best-Selling<br /> Ebooks With Our Ebook <br /> Publishing Services !</h1>;

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
        title="Create The Best-Selling <br /> Ebooks With Our Ebook <br /> Publishing Services!"
        logos="images/banner/img2.png"
        counter={true}
      />



      {/*========= Clients fold =========*/}
      {/* <Clients /> */}

      <Enlistedlogo />

      {/*========= Tradition fold =========*/}
      <Tradition
        title="EBook Publishers That Deliver Results"
        desc="Let Our EBook Publishers Help You Be The Best Selling Authors Of All Times!"
      />

      {/*========= Enlisted fold =========*/}
      <EnlistedNew
        subtitle=""
        title="Why Does E book Publishing"
        desc=" Gain A Lot of Momentum? "
        desc2=""
        paragraph="Ebook publishing has gained a lot of momentum in recent years. This is because it is a very efficient way to publish and distribute content. There are many advantages to using eBooks over traditional print books. Here are some of the most important benefits:"
      />
      {/*========= Broader fold =========*/}
      <BroaderNew
        subtitle="Here’s A Good Piece Of Advice;"
        title="We Are Ebook Publishers You Would Love To Partner With!"
        desc="At Best Selling Publisher, we understand that reading should be an enjoyable experience for everyone. That's why we offer a wide variety of eBooks for you to choose from. Whether you're looking for the latest bestseller or a classic work of literature, we have something for everyone. We also believe that books should be affordable, so we offer our eBooks at a fraction of the cost of print books. So why not take a look at our catalog and see what we have to offer in our book publishing services? You're sure to find something that interests you. .
        "
        image={broader}
      />
      {/*========= Audience fold =========*/}
      <Audience />

      {/*========= Exceptional fold =========*/}
      <Exceptional
        title="Our eBook Publishing House Prices Its Services <br/>
        At The Most Accessible Rates!"
        subtitle="Are you looking for affordable eBook publishing services? Look no further than us! We offer some of the most competitive prices in the industry without <br/> compromising on quality or service. Our team of professionals will work with you to ensure that your eBook is designed and formatted correctly. We are committed <br/> to providing our customers with the best possible experience, and our affordable eBook publishing services are just one way to do this.  "
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
