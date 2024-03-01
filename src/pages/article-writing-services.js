import LHArticle from "@/component/ArticleWritingServices/LetUsHelpArticle"
import GhostWriting from "@/component/ghostWritingServices/ghostWriting"
import WMODE from "@/component/workMode1"
import CTA from "@/component/cta3"
import BTM from "@/component/bottomLogos"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent2, MRContent1, MRCards } from "@/component"
import Head from "next/head"

const ArticleWritingServices = () => {
  const MRContent2Data = [
    {
      title: "Fiction",
      desc: "Immerse yourself in a world of endless possibilities with fiction, where imagination knows no bounds. From thrilling adventures to heartwarming romances, fiction offers an escape into enchanting narratives crafted by talented storytellers."
    },
    {
      title: "Informative",
      desc: "Immerse yourself in a world of endless possibilities with fiction, where imagination knows no bounds. From thrilling adventures to heartwarming romances, fiction offers an escape into enchanting narratives crafted by talented storytellers."
    },
    {
      title: "Memoir",
      desc: "Journey through the world of lived experiences with memoirs, where personal narratives weave tales of triumph, resilience, and self-discovery. Memoirs offer a glimpse into the intimate moments and transformative events that shape a person's life, inviting readers to connect with the raw authenticity of the human experience."
    },
    {
      title: "Children's Book",
      desc: "Spark the imagination and ignite a love for reading with children's books, where whimsy and wonder abound on every page. From colorful picture books to enchanting fairy tales, children's literature enthralls young minds and fosters a lifelong passion for learning and creativity. "
    },
    {
      title: "Self Help Book",
      desc: "Empower yourself to steer life's challenges and unlock your full potential with self-help books, where personal growth and transformation take center stage. From practical strategies for success to insights on mindfulness and resilience, self-help literature offers valuable tools and guidance for individuals striving to live happier, healthier, and more fulfilling lives."
    },
    {
      title: "Biography",
      desc: "Probe into the lives of extraordinary individuals and explore the world of human existence with biographies, where real-life stories unfold with depth and authenticity. From historical figures to modern-day icons, biographies offer a glimpse into the triumphs, tribulations, and defining moments that shape a person's legacy."
    }
  ]
  const MRCardData = [
    {
      classes: "bg-[#fff] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-center",
      content: [
        {
          icon: "",
          title: "Original Key-Word </br> Optimized Content",
        },
        {
          icon: "",
          title: "Content Writing </br> And Editing Services",
        },
        {
          icon: "",
          title: "Professional Writers </br> Trained In SEO",
        },
        {
          icon: "",
          title: "Easy-To-Use </br> Platform",
        },
        {
          icon: "",
          title: "Topic </br> Ideation",
        },
        {
          icon: "",
          title: "Creative, Out-Of-The- </br> Box Taglines",
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
        <title>Best Selling Publisher | Exceptional Article Writing Services</title>
        <meta name="description" content="At Best Selling Publisher, we take pride in our exceptional article writing services. Connect with us to start your publishing journey today!" />
      </Head>
      <MRHero
        title="Craft Your Narrative with Our Help — Premier Article Writing Excellencee"
        desc="Ever pondered the diverse essence of an article? It's more than words. It's a fusion of informative prowess, persuasive elegance, and illuminative depth. Ready to explore where words hold the power to captivate?"
        logos="images/banner/img2.png"
        counter={true}
        classes='!py-[80px] bg-[#FEFEFE]'
        beforeImg="before:mr-md:bg-[url('../../public/imageAR/business-woman-working.png')]"
      />
      <Enlistedlogo />
      <MRCards
        subTitle="Our Services Have Been Constantly Hailed as Remarkable"
        title={`What Makes Us the Premier Choice in <br class="mr-xl:block hidden" /> Professional Ghostwriting?`}
        desc="Best Selling Publisher's ghostwriting services truly stand out as a class apart. Their team of expert writers possesses an unparalleled ability to capture the unique voice and essence of each client, flawlessly translating their ideas into fascinating prose. What sets them apart is their dedication to understanding the vision and goals of their clients."
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[80%] mx-auto"
        cta={true}
        variant="icons"
        data={MRCardData} />
      <MRContent1
        subTitle="Our Exceptional"
        title="Article Writing Services"
        desc="At Best Selling Publisher, we take pride in exceptional article-writing services that consistently exceed expectations. With our dedicated team of experienced writers, we deliver compelling and well-researched articles tailored to meet your unique needs. Our commitment to excellence shines through in every piece."
        img1="/assets/images/newimg/ghostwriting_book.png"
        listTitle="Our process is simple yet effective."
        listTitleClasses="bg-white p-3 !text-black w-max pr-20 [clip-path:polygon(0_0,_90%_0,_80%_99%,_0_100%)]"
        textTheme="text-white"
        list={[
          "Genuine Content",
          "Extensive Formatting",
          "Critical Reviews and Assessments",
          "Copy Editing",
          "Editing and Proofreading",
          "Publishing, Marketing, and Promotions",
          "Creative Consultancy",
          "Line and Developmental Editing"
        ]}
        classes="bg-[url('../../public/imageAR/serviceBG.png')]"
        theme="dark"
      />
      <MRContent2
        subTitle="Our Creative Ghostwriters,"
        title="Breathe Life into the Mundane"
        desc="Our ghostwriters embellish your ideas on a whole different level. Every project that we work on inevitably becomes a page-turner."
        data={MRContent2Data}
      />
      <BTM />
      <CTA />
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

export default ArticleWritingServices