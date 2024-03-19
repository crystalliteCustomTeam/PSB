import Tradition from "@/fa-component/Tradition"
import SwiperComponent from "@/component/SwiperComponent"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import BroaderNew from "@/fa-component/BroaderNew"
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRQuestioners, MRContent1 } from "@/component"
import Head from "next/head"

const MRQuestionersData = [
  {
    title: "What Are Book Publishing Services?",
    desc: "Amazon KDP is a self publishing service from Amazon that allows authors to publish and distribute their books worldwide. It's a fast, easy and affordable way to get your book into the hands of readers looking for new titles to enjoy."
  },
  {
    title: "Who Needs Book Publishing Services?",
    desc: "Anyone who wishes to self-publish their book without going through a traditional publishing house may need book publishing services. This is especially true if you are not familiar with the self-publishing process or do not have the time or resources to do it yourself."
  },
  {
    title: "Benefits Of Using Book Publishing Services?",
    desc: "There are many benefits to using book publishing services offered by book publishers, including professional support, cost savings, and peace of mind. When you work with a reputable book publishing service, you can be confident that your book will be of the highest quality and reach your target audience."
  },
  {
    title: "How Do I Choose A Book Publishing Service?",
    desc: "There are many factors to consider when choosing a book publishing service, such as cost, services offered, turnaround time, and reputation. It is important to do your research and choose a service that is right for you and your book. Finding the best digital book publishers in the industry is not an easy task. But as the leading book publishers in the industry, Best Selling Publisher offers various publishing services just for you! "
  }
]

const BookPublishing = () => {
  return (
    <main>
      <Head>
        <title>Book Publishing | Best Book Publishing Company</title>
        <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
      </Head>
      <MRHero
        title="Publishing Your Amazing Book Swiftly And Aiding You In Bringing About Great Success"
        logos="images/banner/img2.png"
        counter={true}
        groupCTA={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/handsome-guy-study-library.png')]"
      />
      <Enlistedlogo />
      <Tradition
        title="Proficient Books Publishers Services "
        desc="We Publish Books That Sell!"
      />
      <MRQuestioners
        subTitle="Be a Part of the Best Sellers’ Fraternity"
        title="Why Are We  The Best Book Publishing Company For You?"
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
      <MRContent1
        title="Where Your Words Could Change The World"
        desc="At Best Selling Publisher, we understand that book publishing can be a daunting task for authors. We are here to help you every step of the way, from start to finish. We have years of experience in the industry, and our team of experts is dedicated to helping you reach your publishing goals. We offer a variety of services to choose from, such as eBook publishing services, digital publishing services, and Amazon publishing services, so you can find the perfect fit for your needs. We are here to help you succeed! <span class='h-3 block'></span> We are the leading book publishers in the industry with the creative flair and dedication that you need. Whether you are looking for children's book publishers or science fiction publishers, we have you covered! We publish your dreams so call us today!"
        img1="/ahsan/spacious-bookstore.png"
      />
      <BTM />
      <CTA />
      <SwiperComponent />
      <MRContact />
    </main>
  )
}

export default BookPublishing