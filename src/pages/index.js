import Head from "next/head"
// components
import Tradition from "@/fa-component/Tradition"
import Audience from "@/fa-component/Audience"
import Broader from "@/fa-component/Broader"
import Dreams from "@/fa-component/Dreams"
import Plans from "@/fa-component/Plans"
import Advice from "@/fa-component/Advice"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import Exceptional from "@/fa-component/Exceptional"
import SwiperComponents from "../component/SwiperComponent"
import { MRHero, MRContact, MRQuestioners, } from "@/component"
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
// images
import broader from "media/ahsan/children-broder.png"
const MRQuestionersData = [
  {
    title: "Experience and Quality",
    desc: "Our team is stacked with seasoned professionals who’ve got one thing on their minds, top-notch quality and no exceptions. "
  },
  {
    title: "Industry Experts",
    desc: "Leading the charge, we’re all about delivering solutions that are not just optimal but downright revolutionary."
  },
  {
    title: "Range of Services",
    desc: "Our services vary from ghostwriting that whispers your story to the world, SEO content that puts you on the map, and articles, magazines, and web copy that speak volumes. Not to mention press releases and scripts that make waves — we've got all your writing needs covered!"
  },
  {
    title: "Goal-Driven",
    desc: "At Best Selling Publisher, We have our priorities set straight. Our main and ultimate goal is client satisfaction and nothing else."
  },
  {
    title: "Affordable Packages",
    desc: "Don’t you deserve a taste of victory too? We don’t want you to miss out on your literary potential. Let’s make your writing dreams come true with affordable digital publishing. "
  },
  {
    title: "Passion and Creativity",
    desc: "Guess what? We’re not afraid to burn the midnight oil regarding passion and creativity. Our passion burns like a candle that can never be snuffed. So what are you waiting for? "
  }

]

const Home = () => {
  return (
    <>
      <Head>
        <title>The Home of Quality Publishing | Best Book Publishing Company</title>
        <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
      </Head>
      <MRHero
        title="Craft Legacy Through <br /> Words with the Best Book <br /> Publishing Company "
        containImg="ahsan/home-banner-new.png"
        logos="images/banner/img2.png"
        form={false}
        counter={true}
      />
      <Enlistedlogo />
      <Tradition
        title="Celebrating Your Wins"
        desc="Discover how your publications can be nothing but glorious with Best Selling Publisher."
      />
      <Audience />
      <MRQuestioners
        subTitle="Time again, folks like you have celebrated our services as nothing short of remarkable. "
        title="Here’s what sets us apart from all the others"
        data={MRQuestionersData}
      />
      <PublishingNewComponent
        subtitle="Becoming the Next Best Seller has"
        title="Never Been Easier with "
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <Exceptional
        title={`Explore The Best Writing  <br class="mr-lg:block hidden" /> Services We Offer`}
        subtitle={`Beyond the extraordinary resides an array of services we take immense pride in. That said, <br class="mr-lg:block hidden" /> It’s time to make your publishing dreams come to life.`}
      />
      <Dreams />
      <Broader
        subtitle="Capture the Interest of a Bigger Audience"
        title="Amazon Publishing Services"
        desc="Amazon Publishing Services encompass a range of offerings designed to assist authors in bringing their books to market and maximizing their success on the Amazon platform. These services may include editorial support, cover design, formatting assistance, and marketing guidance. Authors can reach a global audience and optimize their visibility to potential readers through Amazon's vast distribution network and marketing tools."
        image={broader}
      />
      <Advice />
      <Plans />
      <SwiperComponents />
      <MRContact
        subTitle="No Matter What You Pick…"
        title="We Will Always Be There"
        desc="The right publishing partner. It can make all the difference between a manuscript collecting dust and a literary masterpiece capturing hearts worldwide. Best Selling Publisher is the unrivaled beacon of excellence in the dominion of publishing services. What sets Best Selling Publisher apart is its unwavering commitment to author success. With a team of seasoned professionals dedicated to every facet of the publishing process, from scrupulous editing to fascinating cover design and strategic marketing, Best Selling Publisher ensures that each book receives the royal treatment it deserves. <br /> <br /> Best Selling Publisher's innovative approach leverages cutting-edge technology and data-driven insights to maximize a book's visibility and reach across various platforms, including the formidable Amazon marketplace. Authors partnering with Best Selling Publisher gain access to a wealth of resources and expertise and benefit from personalized support every step of the way."
      />
     
    </>
  )
}

export default Home