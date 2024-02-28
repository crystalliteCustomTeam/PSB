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
        <title>Best Book Publishing Company - Best Selling Publisher - Amazon Publishing Services</title>
        <link rel="icon" href="/images/favicon.svg" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>


      <MRHero
        // subTitle="Awarded #1 Book Publishing Services"
        title="Best Book Publishing <br /> Company – The Home Of <br /> Quality Publishing!"
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
        title="Explore Our Recent Publishing Successes"
        desc="Discover How Our Expert Publishing Team Can Elevate Your Work"
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
        title="Discover What Exceptional Writing <br /> Services We Offer"
        subtitle="Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. <br/> Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned."
      />
      <Dreams />

      {/*========= Broader fold =========*/}
      <Broader
        subtitle="Engage with a Larger Audience Our"
        title="Amazon Publishing Services"
        desc="Best Selling Publisher's Amazon publishing services are among the most popular and well-known in the industry. Our process is simple and straightforward, and we provide a high-quality product that is easy to use and reliable. Additionally, our customer service is excellent, and they offer a wide range of options for writers looking to publish their work."
        image={broader}
      />



      {/*========= Audience fold =========*/}


      <Advice />
      {/*========= Plans fold =========*/}
      <Plans />
      <SwiperComponents />
      <MRContact
        subTitle="Whether Bookshelf or Amazon Book Publishing"
        title="First-Class Book Publishers"
        desc="Best Selling Publisher offers a wide range of traditional publishing services for businesses of all sizes and authors of all genres. We have a team of experienced professionals who can help you through every step of the publishing process, from editing and formatting to publication and distribution. We also offer a variety of custom publishing options to fit your specific needs, such as digital publishing services and Amazon publishing services. <br /> <br /> Best Selling Publisher is a cutting-edge books publisher that offers a suite of services designed to help authors navigate the ever-changing world of publishing. Our book publishing services are tailored to meet the needs of today's authors. From providing guidance on self-publishing to offering and publishing support, we are committed to helping authors succeed in an increasingly competitive marketplace. What sets Best Selling Publisher apart from other publishers is our commitment to quality. We work with each author on an individual basis, providing the personalized attention that is so essential to success in today's publishing landscape."
      />
      {/*========= Bookshelf fold =========*/}
      {/* <Bookshelf /> */}
    </>
  )
}

export default amazonpublishing
