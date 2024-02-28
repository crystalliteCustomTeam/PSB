import Head from 'next/head'
// components
import Banner from '@/fa-component/Banner'
import Tradition from '@/fa-component/Tradition'
// import Climax from '@/fa-component/Climax'
import BroaderNew from '@/fa-component/BroaderNew'

import Enlistedlogo from '@/fa-component/Enlistedlogo'
import SwiperComponent from '@/component/SwiperComponent'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import PublishingNewComponent from '@/fa-component/PublishingNewComponent'
// import { Helmet } from 'react-helmet'
// images
import bannerImg from 'media/ahsan/ebook-banner.png'
import img2 from 'media/images/banner/img2.png'
import broader from 'media/ahsan/ebook-broder.png'
import { MRHero, MRContact, MRQuestioners } from '@/component'


const MRQuestionersData = [
  {
      title: "Ebooks Are Much Cheaper To Produce Than Print Books. ",
      desc: "You don't have to pay for printing, paper, or shipping costs."
  },
  {
      title: "Ebooks Can Be Published And Distributed Very Quickly.  ",
      desc: "You can have your eBook available for sale within days or weeks."
  },
  {
      title: "Ebooks Are Very Easy To Update.",
      desc: "You can make changes to your eBook and distribute the updated version to your readers without having to go through the traditional printing and distribution process. "
  },
  {
      title: "Ebooks Are Very Easy To Distribute.",
      desc: "You can sell your eBook online or distribute it for free through websites and social media."
  },
  {
      title: "Ebooks Are Very Sustainable.",
      desc: "They don't require trees to be cut down to be produced, and they can be read on electronic devices that use very little energy."
  },
  {
      title: "Ebooks Can Be An Excellent Marketing Tool.",
      desc: "You can use your eBook to promote your other products and services."
  },
  {
      title: "Ebooks Can Help You Build A Community Around Your Brand.",
      desc: "If you distribute your eBook for free, you can attract new readers and followers who will be interested in what you have to say."
  },
  {
      title: "Ebooks Can Be A Great Revenue Stream.",
      desc: "If you sell your eBook, you can make a significant amount of money from it. There are many more benefits to eBook publishing than we have space to list here. Suffice it to say that if you're thinking about publishing a book, you should seriously consider doing it as an eBook. It's a quick, easy, cost-effective way to get your content out there. And who knows? Your eBook could end up being a bestseller!"
  }
]



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
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/woman-reading-book-side-view.png')]"
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
      <MRQuestioners
        subTitle="Be a Part of the Best Sellers’ Fraternity"
        title="Why Does E Book Publishing Gain A Lot Of Momentum? "
        paragraph="Ebook publishing has gained a lot of momentum in recent years. This is because it is a very efficient way to publish and distribute content. There are many advantages to using eBooks over traditional print books. Here are some of the most important benefits:"
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
        subtitle="Here’s A Good Piece Of Advice;"
        title="We Are Ebook Publishers You Would Love To Partner With!"
        desc="At Best Selling Publisher, we understand that reading should be an enjoyable experience for everyone. That's why we offer a wide variety of eBooks for you to choose from. Whether you're looking for the latest bestseller or a classic work of literature, we have something for everyone. We also believe that books should be affordable, so we offer our eBooks at a fraction of the cost of print books. So why not take a look at our catalog and see what we have to offer in our book publishing services? You're sure to find something that interests you. .
        "
        image={broader}
      />
      {/*========= Audience fold =========*/}
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
