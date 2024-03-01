import LHScript from "@/component/ScriptWritingServices/LetUsPress"
import GhostWriting from "@/component/ghostWritingServices/ghostWriting"
import WMODE from "@/component/workMode1"
import CTA from "@/component/cta3"
import BTM from "@/component/bottomLogos"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent2, MRContent1, MRCards } from "@/component"
import Head from "next/head"
// Import Images
import Film from "media/imageAR/Film.png"
import Video from "media/imageAR/Video.png"
import Documentary from "media/imageAR/Documentary.png"
import Story from "media/imageAR/Story.png"
import Manuscript from "media/imageAR/Manuscript.png"
import Content from "media/imageAR/Content.png"

const ScriptWritingServices = () => {
  const MRContent2Data = [
    {
      title: "Fiction",
      desc: "Our fiction ghostwriters will assist you in creatively expressing your ideas into enticing literacy that will captivate your audience. All aspects of a story are considered, particularly the author’s major plot and characters. "
    },
    {
      title: "Informative",
      desc: "Our ghostwriters comprehend the nuance of your text. They ensure their information is reliable and well-acknowledged worldwide, under the available data and facts."
    },
    {
      title: "Memoir",
      desc: "Our ghostwriters have been trained to write memoirs, not to confuse them with autobiographies. Furthermore, they cherish your sentiments and emotions and go to great lengths to turn your precious memories into a book."
    },
    {
      title: "Children's Book",
      desc: "Our well-trained and experienced writers are well-versed in all aspects of children’s books. They use their ingenuity to write classic subjects that young minds can understand, with vibrant graphics that keep them hooked."
    },
    {
      title: "Self Help Book",
      desc: "We allow your ideas to reach the right audiences and serve your experiences to be their holy grail in the relevant endeavor."
    },
    {
      title: "Biography",
      desc: "Our expert writers are keenly interested in learning about your subjects’ stories, holding the skills and expertise to provide you with well-written content for whoever you want to write about. They also conduct extensive research through various channels such as newspapers, blogs, and interviews to ensure they use correct facts and figures."
    }
  ]
  const MRCardData = [
    {
      classes: "bg-[#fff] shadow-lg px-3 rounded-2xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#40BEE2] hover:!text-white text-center",
      content: [
        {
          icon: Film,
          title: "Film </br> Writing",
        },
        {
          icon: Video,
          title: "Video </br> Scripting",
        },
        {
          icon: Documentary,
          title: "Documentary </br> Scripting",
        },
        {
          icon: Story,
          title: "Story </br> Scripting",
        },
        {
          icon: Manuscript,
          title: "Manuscript </br> Scripting",
        },
        {
          icon: Content,
          title: "Content </br> Scripting",
        },
      ]
    }]
    const MRCardData2 = [
      {
        classes: "bg-[#fff] shadow-lg mr-2xl:px-4 px-2 rounded-xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
        stepText: "Step",
        indexing: true,
        content: [
          {
            textColor: "text-[#40BEE2] group-hover:text-white",
            title: "Submit Your Manuscript",
            desc: "After making up your mind about working with us, you place your order.",
          },
          {
            textColor: "text-[#40BEE2] group-hover:text-white",
            title: "Edit & Design",
            desc: "We refine your text and design your book's cover.",
          },
          {
            textColor: "text-[#40BEE2] group-hover:text-white",
            title: "Review & Approve",
            desc: "You review our work and give the green light.",
          },
          {
            textColor: "text-[#40BEE2] group-hover:text-white",
            title: "Publish & Distribute",
            desc: "Your book is published and distributed on schedule.",
          },
        ]
      }]
  return (
    <main>
      <Head>
        <title>Script Writing Services | Best Selling Publisher</title>
        <meta name="description" content="At Best Selling Publisher, we take pride in our exceptional article writing services. Connect with us to start your publishing journey today!" />
      </Head>
      <MRHero
        title="Professional High-Quality <br /> Script by Expert Writers"
        desc="Streamline your content needs with our high-quality script writing service, which educates your audience about your brand and helps elevate you."
        logos="images/banner/img2.png"
        classes='bg-[#fefefe] !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/notebook.png')]"
        counter={true}
      />
      <Enlistedlogo />
      <MRCards
        subTitle="The Script That Is"
        title={`Written With Pure Perfection`}
        desc="Scriptwriting is massive, but with us, it becomes easy and accessible. You choose your script, and our writers do wonders with it. Our scriptwriting is known and acknowledged internationally."
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[80%] mx-auto"
        cta={true}
        variant="icons"
        data={MRCardData} />
      <MRContent1
        subTitle="Our Comprehensive"
        title="Script Writing Services"
        desc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties."
        img1="/assets/images/newimg/ghostwriting_book.png"
        listTitle="Our process is simple and aims to deliver flawless results for every project."
        listTitleClasses="bg-white p-3 !text-black w-max"
        textTheme="text-white"
        list={[
          "Writing Genuine Content Based On Your Idea",
          "Critical Review, Editing, And Proofreading",
          "Extensive Formatting, Typesetting, & Designing",
          "Publishing, Branding, Marketing, And Promotions",
          "Critical Review And Analysis",
          "Book Coaching",
          "Copy Editing",
          "Developmental Editing"
        ]}
        classes="bg-[url('../../public/imageAR/serviceBG.png')]"
        theme="dark"
      />
      <MRContent2
        subTitle="Our Creative Ghostwriters,"
        title="Bringing Your Imagination To Life."
        desc="You may have an idea for the next best-seller, but you may not have the time or expertise to write it yourself. Our platform meets all of the <br class='mr-xl:block hidden'/> requirements and offers a diverse range of writing styles, including:"
        data={MRContent2Data}
      />
      <CTA />
      <BTM />
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

export default ScriptWritingServices