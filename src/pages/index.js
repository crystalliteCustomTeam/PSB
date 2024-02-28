import Head from 'next/head'
// components
import Banner from '@/fa-component/Banner'
import Tradition from '@/fa-component/Tradition'
// import Climax from '@/fa-component/Climax'
import Enlisted from '@/fa-component/Enlisted'
import Audience from '@/fa-component/Audience'
import Broader from '@/fa-component/Broader'
import Dreams from '@/fa-component/Dreams'
import Plans from '@/fa-component/Plans'
import Advice from '@/fa-component/Advice'
import Bookshelf from '@/fa-component/Bookshelf'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import Exceptional from '@/fa-component/Exceptional'
import SwiperTestimonial from '@/fa-component/swiperComponent'
import SwiperComponents from '../component/SwiperComponent'
// import { Helmet } from 'react-helmet'
// images
import bannerImg from 'media/ahsan/home-banner.png'
import img2 from 'media/images/banner/img2.png'
import broader from 'media/ahsan/children-broder.png'
import { MRHero, MRContact, MRQuestioners } from '@/component'
import PublishingNewComponent from '@/fa-component/PublishingNewComponent'


const MRQuestionersData = [
  {
    title: "Experience and Quality",
    desc: "We are a highly experienced and reputable book publishing company."
  },
  {
    title: "Industry Experts",
    desc: "Our best seller publishing team is composed of industry experts."
  },
  {
    title: "Range of Services",
    desc: "We offer a wide range of book publishing services, including manuscript editing, formatting, and publishing consultation."
  },
  {
    title: "Goal-Driven",
    desc: "We have a proven track record of success in helping our  authorschieve their publishing goals."
  },
  {
    title: "Affordable Packages",
    desc: "We offer competitive pricing and terms that are favorable to our authors."
  },
  {
    title: "Passion and Creativity",
    desc: "As a leading book publishing company, we are passionate about helping our authors reach their full potential and bring their vision to life."
  }

]


const amazonpublishing = () => {



  return (
    <>
      <Head>
        <title>The Home of Quality Publishing | Best Book Publishing Company</title>
        <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!"></meta>
         <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/favicon.svg" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>


      <MRHero
        // subTitle="Awarded #1 Book Publishing Services"
        title="Craft Legacy Through <br />Words with the Best Book <br /> Publishing Company "
        // desc="Welcome to Best Selling Publisher, where your publishing dreams turn into reality. As a leading book publishing company, we specialize in bringing authors' visions to life and catapulting their works onto bestseller lists, including Amazon's coveted ranks.With our comprehensive book publishing services, from meticulous editing to bespoke marketing strategies, we're here to guide you every step of the way. Partner with us and see your book shine across the globe."
        containImg="ahsan/home-banner-new.png"
        // fullImg="bg-[url('../../public/assets/images/newimg/man-working-printing-house-with-paper-paints.png')]"
        // classes="bg-right bg-center"
        logos="images/banner/img2.png"
        form={false}
        counter={true}
      />


      {/*========= Clients fold =========*/}
      {/* <Clients /> */}

      <Enlistedlogo />

      {/*========= Tradition fold =========*/}
      <Tradition
        title="Celebrating Your Wins"
        desc="Discover how your publications can be nothing but glorious with Best Selling Publisher."
      />
      <Audience />
      {/*========= Enlisted fold =========*/}
      <MRQuestioners
        subTitle="Be a Part of the Best Sellers’ Fraternity"
        title="What Makes Us the Most Preferred Book Publishers?"
        // desc="As an author, you have a lot of control over the success of your book. But did you know that there are companies out there whose sole purpose is to help you self-publish your book and make it a success? These are called self publishing book services companies, and they can provide everything from writing and editing to marketing and distribution. "
        data={MRQuestionersData}
      />

      {/*========= Publshing Component fold =========*/}
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      {/*========= Exceptional fold =========*/}
      <Exceptional
        title="Explore The Best Writing  <br /> Services We Offer"
        subtitle="Beyond the extraordinary resides an array of services we take immense pride in. That said, It’s time to make your publishing dreams come to life. "
      />
      <Dreams />

      {/*========= Broader fold =========*/}
      <Broader
        subtitle="Capture the Interest of a Bigger Audience"
        title="Amazon Publishing Services"
        desc="Amazon Publishing Services encompass a range of offerings designed to assist authors in bringing their books to market and maximizing their success on the Amazon platform. These services may include editorial support, cover design, formatting assistance, and marketing guidance. Authors can reach a global audience and optimize their visibility to potential readers through Amazon's vast distribution network and marketing tools."
        image={broader}
      />



      {/*========= Audience fold =========*/}


      <Advice />
      {/*========= Plans fold =========*/}
      <Plans />
      <SwiperComponents />
      <MRContact
        subTitle="No Matter What You Pick…"
        title="We Will Always Be There"
        desc="The right publishing partner. It can make all the difference between a manuscript collecting dust and a literary masterpiece capturing hearts worldwide. Best Selling Publisher is the unrivaled beacon of excellence in the dominion of publishing services. What sets Best Selling Publisher apart is its unwavering commitment to author success. With a team of seasoned professionals dedicated to every facet of the publishing process, from scrupulous editing to fascinating cover design and strategic marketing, Best Selling Publisher ensures that each book receives the royal treatment it deserves. <br /> <br /> Best Selling Publisher's innovative approach leverages cutting-edge technology and data-driven insights to maximize a book's visibility and reach across various platforms, including the formidable Amazon marketplace. Authors partnering with Best Selling Publisher gain access to a wealth of resources and expertise and benefit from personalized support every step of the way."
      />
      {/*========= Bookshelf fold =========*/}
      {/* <Bookshelf /> */}
    </>
  )
}

export default amazonpublishing
