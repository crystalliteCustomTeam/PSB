import LETUSHELP from "@/component/ghostWritingServices/LetUsHelp"
import WMODE from "@/component/workMode1"
import CTA from "@/component/cta3"
import BTM from "@/component/bottomLogos"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent2, MRContent1 } from "@/component"
import Head from "next/head"

const ProfessionalGhostwriting = () => {
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
  return (
    <main>
      <Head>
        <title>Professional Ghostwriting Services | Best Selling Publisher</title>
        <meta name="description" content="Best Selling Publisher offers professional ghostwriting services tailored to your needs. Start your publishing journey today and see why we're the premier choice for authors." />
      </Head>
      <MRHero
        title="Affordable and Professional  <br /> Ghostwriting Services"
        desc="Do you know how to make your content incredible? You team up with the experts! Over the years, we have assisted innumerable authors who aspired to become the next best sellers. If you plan to be one of them, we are here for you."
        logos="images/banner/img2.png"
        counter={true}
        classes='!py-[80px] bg-[#fefefe]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/serious-man.png')]"
      />
      <Enlistedlogo />
      <LETUSHELP />
      <MRContent1
        subTitle="Our Exceptional"
        title="Ghostwriting Services"
        desc="What if we tell you that you no longer have to worry about writing? It’ll ease so many of your problems, right? <span class='h-3 block'></span> Best Selling Publisher's exceptional ghostwriting services set them apart in the industry. Their team of skilled writers possesses a rare talent for impeccably embodying the voice and vision of their clients, whether it's for a memoir, a novel, or corporate literature."
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
        title="Bringing Your Imagination To Life."
        desc={`You may have an idea for the next best-seller, but you may not have the time or expertise to write it yourself. Our platform meets all of the <br class="mr-xl:block hidden"/> requirements and offers a diverse range of writing styles, including:`}
        data={MRContent2Data}
      />
      <CTA />
      <BTM />
      <WMODE
        subtitle="We Pursue"
        title="A Swift Work Mode that Involves 4 Easy Steps"
        desc="We emphasize prompt deliveries because we don’t like to keep you waiting. Following are the 4 easy steps that keep us streamlined from the beginning:"
        GridCols="grid-cols-4"
        StoryPlotData={[
          {
            steps: "Step 01",
            heading: "Submit Your Manuscript",
            desc: "Start your publishing process by sharing your manuscript with us."
          },
          {
            steps: "Step 02",
            heading: "Edit & Design",
            desc: "We add our artistic expertise while retaining your unique voice."
          },
          {
            steps: "Step 03",
            heading: "Review & Approve",
            desc: "We will NEVER go above your head! Your approval matters, and we want to ensure our creative contributions align with your vision."
          },
          {
            steps: "Step 04",
            heading: "Publish & Distribute",
            desc: "Witness your book being published and reaching readers across the globe."
          }
        ]}
      />
      <SwiperComponents />
      <MRContact />
    </main>
  )
}

export default ProfessionalGhostwriting