import LHArticle from "@/component/ArticleWritingServices/LetUsHelpArticle"
import GhostWriting from "@/component/ghostWritingServices/ghostWriting"
import WMODE from "@/component/workMode1"
import CTA from "@/component/cta3"
import BTM from "@/component/bottomLogos"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent2, MRContent1 } from "@/component"
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
      <LHArticle />
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
      <WMODE
        subtitle="Carrying out"
        title="The Fastest Work Mode, Get Your <br className='mr-lg:block hidden' /> Work in 4 Easy Steps"
        desc=" Working with us gives you prompt delivery of work because we have set up everything systematically. Here is our 4 step process, which keeps us streamlined from the beginning."
        GridCols="grid-cols-4"
        StoryPlotData={[
          {
            steps: "Step 01",
            heading: "Submit Your Manuscript",
            desc: "After making up your mind about working with us, you place your order."
          },
          {
            steps: "Step 02",
            heading: "Edit & Design",
            desc: "We refine your text and design your book's cover."
          },
          {
            steps: "Step 03",
            heading: "Review & Approve",
            desc: "You review our work and give the green light."
          },
          {
            steps: "Step 04",
            heading: "Publish & Distribute",
            desc: "Your book is published and distributed on schedule."
          }
        ]}
      />
      <SwiperComponents />
      <MRContact />
    </main>
  )
}

export default ArticleWritingServices