import Head from 'next/head'
// components
import Banner from '@/fa-component/Banner'
import Tradition from '@/fa-component/Tradition'
// import Climax from '@/fa-component/Climax'
import EnlistedNew from '@/fa-component/BookPublishing/EnlistedNew'
import Audience from '@/fa-component/Audience'
import BroaderNew from '@/fa-component/BroaderNew'
import Plans from '@/fa-component/Plans'
import Bookshelf from '@/fa-component/Bookshelf'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import Exceptional from '@/fa-component/Exceptional'
import SwiperTestimonial from '@/fa-component/swiperComponent'

// import { Helmet } from 'react-helmet'
// images
import bannerImg from 'media/ahsan/bookpublishingbanner.png'
import img2 from 'media/images/banner/img2.png'
import broader from 'media/ahsan/bookpublishingbroder.png'
import { MRHero } from '@/component'

const amazonpublishing = () => {
  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3 leading-tight'>Amazon Publishing <br /> Services Company To Make <br /> Your Book Available To <br /> Millions Of Readers!</h1>;

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
  const paratitles = [
    {
      para: 1,
      paraTitle: "What Are Book Publishing Services?",
      paraSubTitle: "Amazon KDP is a self publishing service from Amazon that allows authors to publish and distribute their books worldwide. It's a fast, easy and affordable way to get your book into the hands of readers looking for new titles to enjoy."
    },
    {
      para: 2,
      paraTitle: "Who Needs Book Publishing Services?",
      paraSubTitle: "Anyone who wishes to self-publish their book without going through a traditional publishing house may need book publishing services. This is especially true if you are not familiar with the self-publishing process or do not have the time or resources to do it yourself."
    },
    {
      para: 3,
      paraTitle: "How Much Does It Cost To Publish With Amazon KDP?",
      paraSubTitle: "There are many benefits to using book publishing services offered by book publishers, including professional support, cost savings, and peace of mind. When you work with a reputable book publishing service, you can be confident that your book will be of the highest quality and reach your target audience."
    },
    {
      para: 4,
      paraTitle: "How Do I Choose A Book Publishing Service?",
      paraSubTitle: "There are many factors to consider when choosing a book publishing service, such as cost, services offered, turnaround time, and reputation. It is important to do your research and choose a service that is right for you and your book. Finding the best digital book publishers in the industry is not an easy task. But as the leading book publishers in the industry, Best Selling Publisher offers various publishing services just for you! "
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
          title="Amazon Publishing Services Company To Make Your Book Available To Millions Of Readers!"
          logos="images/banner/img2.png"
          counter={true}
        />


      {/*========= Clients fold =========*/}
      {/* <Clients /> */}

      <Enlistedlogo />

      {/*========= Tradition fold =========*/}
      <Tradition 
      title="Proficient Books Publishers Services"
      desc="We Publish Books That Sell!"
      />

      {/*========= Enlisted fold =========*/}
      <EnlistedNew
        subtitle=""
        title="Why Are We "
        desc="The Best Book Publishing"
        desc2="Company for You?"
        data={paratitles}
      />
      {/*========= Broader fold =========*/}
      <BroaderNew
        title="Where Your Words Could Change The World"
        desc="At Best Selling Publisher, we understand that book publishing can be a daunting task for authors. We are here to help you every step of the way, from start to finish. We have years of experience in the industry, and our team of experts is dedicated to helping you reach your publishing goals. We offer a variety of services to choose from, such as eBook publishing services, digital publishing services, and Amazon publishing services, so you can find the perfect fit for your needs. We are here to help you succeed! <br/><br/>
        We are the leading book publishers in the industry with the creative flair and dedication that you need. Whether you are looking for children's book publishers or science fiction publishers, we have you covered! We publish your dreams so call us today!
        "
        image={broader}
      />
      {/*========= Audience fold =========*/}
      <Audience />

      {/*========= Exceptional fold =========*/}
      <Exceptional
        title="First-Rated Book & Digital Publishing Services
        We Offer"
        subtitle=""
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
