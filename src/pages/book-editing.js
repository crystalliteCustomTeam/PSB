import WEARE from "@/component/editing/LetUsWEARE"
import PWMODE from "@/component/editing/CoverDesign"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent1, MRCards } from "@/component"
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import Head from "next/head"

const BookEditing = () => {
  const MRCardData = [
    {
      classes: "bg-[#fff] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      cta: false,
      stepText: false,
      indexing:false,
      content: [
        {
          title: "Copy-Editing",
          textColor:"text-[#40BEE2]",
          desc: "The process of revising the written material to improve the readability of the book ensures it is free of grammatical errors. Work with our professional book editing services, you will be provided with all the fixes you need.",
        },
        {
          title: "Line-Editing:",
          textColor:"text-[#40BEE2]",
          desc: "In this form of editing, our expert editors’ help with the flow, writing style, and comprehension of the manuscript.",
        },
        {
          title: "Proof-reading:",
          textColor:"text-[#40BEE2]",
          desc: "Our expert proofreaders check your text for errors before sharing it. We offer the best proofreading services in the industry.",
        },
      ]
    },
  ]
  return (
    <main>
      <Head>
        <title>Book Editing | Best Selling Publisher</title>
        <meta name="description" content="At Best Selling Publisher, we take pride in our exceptional article writing services. Connect with us to start your publishing journey today!" />
      </Head>
      <MRHero
        title="An Editing Process That Leads To Perfection On Every Page"
        desc="An ideal editing process that creates perfect work, editing is an important aspect of writing and crafting an amazing book. Our editors are well-trained in the art of perfecting a novel or a book."
        logos="images/banner/img2.png"
        counter={true}
        classes='bg-[#fefefe] !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/night-laptop.png')]"
      />
      <Enlistedlogo />
      <MRContent1
        subTitle="Bring Quality To Your Book"
        title="Our Immaculate Editing And Proofreading Services"
        desc="Our editors ensure that your work is improved and your story structured into a work of art. From identifying what should stay and what should go to finessing your words so they are embellished in your voice, our editors’ offer stunning success. Our services consist of:"
        img1="/imageAR/book-editing2.png"
        list={[
          "Substantial Editing - To Improve Structure",
          "Error Free Text - Grammar & Punctuation",
          "Writing Critical Reviews - Filling In The Loopholes",
          "Editing - Rewriting Or Paraphrasing",
          "Manuscript Formatting - Well Organized Writing",
          "Publishing - Comprehensive Publishing Services"
        ]}
        direction="flex-row-reverse"
      />
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <MRCards
        subTitle="High quality editing"
        title={`Editing Tailored to Your Needs `}
        desc="We create the ideal editing workflow to suit all your editing needs. Our editors are the best at creating an ideal environment for refining your manuscripts and producing the highest quality. Our outstanding results are a testament to the hard work of affordable book editing services the people at Best Selling Publisher Ghostwriting provide."
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[80%] mx-auto"
        cta={true}
        variant="steps"
        data={MRCardData}
      />
      <BTM />
      <CTA />
      <SwiperComponents />
      <MRContact />
    </main>
  )
}

export default BookEditing