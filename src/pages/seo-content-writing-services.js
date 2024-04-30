import LETUSHELPSEO from "@/component/SeoContentWriting/LetUsHelpSEO"
import GhostWriting from "@/component/ghostWritingServices/ghostWriting"
import WMODE from "@/component/workMode1"
import CTA3 from "@/component/cta3"
import BTM from "@/component/bottomLogos"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent2, MRContent1, MRCards } from "@/component"
import Head from "next/head"
// Import Images
import Research from "media/imageAR/research.png"
import Seo from "media/imageAR/seo.png"
import Search from "media/imageAR/search.png"
import Analyse from "media/imageAR/analyse.png"
import Optimization from "media/imageAR/optimization.png"
import Linking from "media/imageAR/linking.png"
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
    classes: "bg-[#F2F2F2] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#40BEE2] hover:!text-white text-center",
    content: [
      {
        icon: Research,
        title: "Research <br/> FAQ Section",
      },
      {
        icon: Seo,
        title: "SEO Copywriting <br /> And Editing",
      },
      {
        icon: Search,
        title: "SEO Title And <br /> Meta Description",
      },
      {
        icon: Analyse,
        title: "Professional <br /> Analysis",
      },
      {
        icon: Optimization,
        title: "Effective Keyword <br /> Optimization",
      },
      {
        icon: Linking,
        title: "In-Depth <br /> Page Linking",
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
const SEOContentWritingServices = () => {
  return (
    <main>
      <Head>
        <title>SEO Content Writing Services | Best Selling Publisher</title>
        <meta name="description" content="Best Selling Publisher offers professional ghostwriting services tailored to your needs. Start your publishing journey today and see why we're the premier choice for authors." />
        

        <meta property="og:url" content="https://bestsellingpublisher.com/seo-content-writing-services/" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public" />

        {/* canonical: */}
        <link rel="canonical" href="https://bestsellingpublisher.com/seo-content-writing-services/" />
      </Head>
      <MRHero
        title="Amplify Your Brand Image Through SEO Content Writing"
        desc="Create SEO-optimized content that converts and attracts more organic search traffic to boost your online visibility and credibility"
        logos="images/banner/img2.png"
        classes='bg-[#fefefe] !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/seo-search-engine.png')]"
        counter={true}
      />
      <Enlistedlogo />
      <MRCards
        subTitle="Let Us Help You"
        title={`What Sets Us Apart?`}
        desc="Best Selling Publisher Ghostwriting is a well-known international ghostwriting and editing firm operating for over a decade. Our experts create well-versed writing that demonstrates true professionalism while exhibiting creativity. Our services are not only economical but also ensure that both the needs of the authors and the preferences of their target audience are adequately met. Some of our platform's distinguishing traits are as follows:"
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[80%] mx-auto"
        cta={true}
        variant="icons"
        data={MRCardData} />
      <MRContent1
        subTitle="Our Comprehensive"
        title="SEO Content Writing Services"
        desc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties."
        img2="/assets/images/newimg/ghostwriting_book.png"
        listTitle="Our process is simple & aims to deliver flawless results for every project."
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
      <CTA3 />
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

export default SEOContentWritingServices