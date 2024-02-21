import Head from 'next/head'
// components
import Banner from '@/fa-component/Banner'
import Tradition from '@/fa-component/Tradition'
// import Climax from '@/fa-component/Climax'
import EnlistedNew from '@/fa-component/EnlistedNew'
import Audience from '@/fa-component/Audience'
import BroaderNew from '@/fa-component/BroaderNew'
import Plans from '@/fa-component/Plans'
import Bookshelf from '@/fa-component/Bookshelf'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import Exceptional from '@/fa-component/Exceptional'
import SwiperTestimonial from '@/fa-component/swiperComponent'

// import { Helmet } from 'react-helmet'
// images
import bannerImg from 'media/images/banner/amazonbanner.png'
import img2 from 'media/images/banner/img2.png'
import broader from 'media/images/flods/amazonpublishingbroder.png'
import { MRHero } from '@/component'

const amazonpublishing = () => {
  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3 leading-tight'>Amazon Publishing Services Company To Make Your Book Available To Millions Of Readers!</h1>;

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
      paraTitle: "What is Amazon KDP?",
      paraSubTitle: "Amazon KDP is a self publishing service from Amazon that allows authors to publish  and distribute their books worldwide. It's a fast, easy and affordable way to get your book into the hands of readers looking for new titles to enjoy."
    },
    {
      para: 2,
      paraTitle: "How Does Amazon KDP Work?",
      paraSubTitle: "Amazon KDP works by allowing authors to upload their book files to the Amazon Kindle Store, where they can be sold and downloaded by readers. Authors can also choose to have their books printed and shipped to customers via Amazon's CreateSpace service."
    },
    {
      para: 3,
      paraTitle: "How Much Does It Cost To Publish With Amazon KDP?",
      paraSubTitle: "It costs nothing to publish your book with Amazon KDP. You will only be charged when your book is sold, and you will receive a 70% royalty on each sale."
    },
    {
      para: 4,
      paraTitle: "What Are The Requirements For My Book?",
      paraSubTitle: "Your book must be at least 20 pages long and have a professional cover design. Additionally, your book must be formatted correctly to be accepted into the Amazon Kindle Store."
    },
    {
      para: 5,
      paraTitle: "What Are The Benefits Of Publishing With Amazon KDP?",
      paraSubTitle: "It costs nothing to publish your book with Amazon KDP. You will only be charged when your book is sold, and you will receive a 70% royalty on each sale."
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
      title="Top-Notch Amazon Self Publishing Services"
      desc="Let our publishing pros make your books rock on amazon!"
      />

      {/*========= Enlisted fold =========*/}
      <EnlistedNew
        subtitle=""
        title={"Some Questions Whirling Around Your <br/> Mind About Amazon KDP Publishing <br/> "}
        desc="Have Answers Over Here!"
        data={paratitles}
      />
      {/*========= Broader fold =========*/}
      <BroaderNew
        title="Amazon Ebook Publishing To Help Your Work Be A Cut Above The Rest!"
        desc="Amazon eBook publishing is a great way to get your work out without spending much money. If you're looking for a company that can help you publish your Amazon eBook, look no further than us! We have the experience and expertise to get your book onto Kindle and into the hands of readers worldwide. We know the ins and outs of the Amazon digital book publishing process and can help you navigate it successfully. We'll work with you to format and convert your book, design a professional cover, and create an engaging description. We'll also help you price your book competitively and promote it effectively. And, of course, we'll take care of all the technical details involved in getting your book published on Amazon. If you're ready to take your eBook publishing dreams to the next level, contact us today! We'll be happy to answer any of your questions and get you started on the path to Amazon success owing to our amazon publishing services!"
        image={broader}
      />
      {/*========= Audience fold =========*/}
      <Audience />

      {/*========= Exceptional fold =========*/}
      <Exceptional
        title="KDP Amazon Self Publishing, A Reason for the <br/> Massive Success of Your Book!"
        subtitle="At Best Selling Publisher, we offer professional KDP amazon self publishing services to help you publish your book. We have a team of experienced <br/> professionals who will guide you through the entire process, from editing and designing your book to marketing and selling it. Our books publisher also <br/> offers a wide range of other services, such as self publishing, eBook conversion, and book printing."
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
