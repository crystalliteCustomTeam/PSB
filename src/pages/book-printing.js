import PWMODE from "@/component/PublishingWorkMode"
import PUBLISHING from "@/component/printing/publishing"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRCards } from "@/component";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import Head from "next/head";

const BookPrinting = () => {
  const MRCardData = [
    {
      classes: "bg-[#fff] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      cta: false,
      stepText: false,
      indexing:false,
      content: [
        {
          title: "Low Upfront Costs",
          textColor:"text-[#40BEE2]",
          desc: "Looking for an affordable way to publish? We're so glad you found us! <span class='h-3 block'></span> At Best Selling Publisher, we're all about making publishing accessible to everyone. That's why our services come with low upfront costs, perfect for aspiring authors and established writers. With transparent pricing and no hidden fees, you can start your publishing journey confidently, assured that you're getting outstanding value for every penny invested.",
          minHeight:"overflow-y-scroll h-[130px]",
        },
        {
          title: "Complete Publishing Solution",
          textColor:"text-[#40BEE2]",
          desc: "Do you want a publishing partner who's got your back every step of the way? <span class='h-3 block'></span> Best Selling Publisher is here with solutions crafted to meet all your needs. Our journey covers everything from editing and design to distribution and marketing, ensuring your book realizes its full potential. With a team of experts dedicated to your project, we walk you through the entire publishing process, offering personalized advice and support tailored just for you.",
          minHeight:"overflow-y-scroll h-[130px]",
        },
        {
          title: "Print On Demand",
          textColor:"text-[#40BEE2]",
          desc: "Want to share your book with the world without the headache of inventory or storage costs? <span class='h-3 block'></span>  Best Selling Publisher's print-on-demand services make it a breeze. Thanks to our cutting-edge printing technology, we're set up to print and fulfill orders the moment they're placed, guaranteeing your book is ready to meet its readers anytime, anywhere.",
          minHeight:"overflow-y-scroll h-[130px]",
        },
        {
          title: "Reach Millions Of Readers",
          textColor:"text-[#40BEE2]",
          desc: "Want your book to be everywhere readers are looking, both online and in stores? <span class='h-3 block'></span>  Through our partnerships with major retailers, online platforms, and libraries, we ensure your book shines in both digital and print formats wherever books are sold. With Best Selling Publisher, you can share your story with the world and reach millions of readers eager to discover new books and authors. ",
          minHeight:"overflow-y-scroll h-[130px]",
        },
      ]
    },
  ]
  const MRCardData2 = [
    {
      classes: "bg-[#fff] shadow-lg mr-2xl:px-4 px-2 rounded-xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      stepText: "Step",
      indexing: true,
      content: [
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Submit Your Manuscript",
          desc: "Share your manuscript, and we will get started.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Edit & Design",
          desc: "We retain the context but add that artistic flavor.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Review & Approve",
          desc: "You review and approve our creative contributions.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Publish & Distribute",
          desc: "Your book has been published and distributed.",
        },
      ]
    }]
  return (
    <main>
      <Head>
        <title>Affordable Book Printing Services | Best Selling Publisher</title>
        <meta name="description" content="From editing to distribution, Best Selling Publisher offers personalized support and industry-leading book printing services to make your book a standout success." />
      </Head>
      <MRHero
        title="Take Your Book From Manuscript To Masterpiece with Our Book Printing Services"
        desc="Don't you want your book to leap off the page? <span class='h-3 block'></span> At Best Selling Publisher, our printing services are unmatched in quality and precision, making sure every single page bursts to life with vivid colors and crystal-clear detail."
        logos="images/banner/img2.png"
        counter={true}
        classes='bg-right bg-center !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/bookstore-with-bookshelf.png')]"
      />
      <Enlistedlogo />
      <MRCards
        subTitle="Our Printing Services Offer"
        title={`Words that Are Easy to Read and Easy <br class="mr-xl:block hidden"/> to Comprehend`}
        desc={`We have been in the printing business for a very long time. We understand that words on a printed page, if not done properly, <br class="mr-xl:block hidden"/> are nothing but mere squiggles.`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData}
      />
      <PUBLISHING />
      <PublishingNewComponent
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/WhiteBG.png')]"
        classes="!bg-cover !bg-no-repeat"
        textBG="bg-black"
        txtBlK="!text-black"
      />
      <BTM />
      <CTA 
      subtitle="The Wait is Over — It's Go Time!"
      title="Start Your Project With Best Selling Publisher Today!"
      desc="Need help or have questions? Our friendly team is here to assist you during our business hours. We warmly invite you to reach out; your questions and needs always take center stage with us. Feel free to get in touch anytime."
      />
      <MRCards
        subTitle="We Pursue"
        title={`A Swift Work Mode that Involves <br class="mr-xl:block hidden" /> 4 Easy Steps`}
        desc={`We emphasize prompt deliveries because we don’t like to keep you waiting. Following are the <br class="mr-xl:block hidden" /> 4 easy steps that keep us streamlined from the beginning:`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData2} />
      <SwiperComponents />
      <MRContact />
    </main>
  )
}

export default BookPrinting