import LHArticle from "@/component/WebCopywritingServices/LetUsHelpWeb"
import CTA from "@/component/cta3"
import BTM from "@/component/bottomLogos"
import SwiperComponents from "@/component/SwiperComponent"
import WMODE from "@/component/workMode1"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent2, MRContent1, MRCards } from "@/component"
import Head from "next/head"

const WebCopywritingServices = () => {
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
    const schemaWebsite = {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Web Copywriting Services | Best Selling Publisher",
      "url": "https://bestsellingpublisher.com/web-copywriting-services",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }

    const schemaCorporation = {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name": "Web Copywriting Services | Best Selling Publisher",
      "url": "https://bestsellingpublisher.com/web-copywriting-services",
      "logo": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png"
    }

    const schemaProffesionalService = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Web Copywriting Services | Best Selling Publisher",
      "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
      "url": "https://bestsellingpublisher.com/web-copywriting-services",
      "telephone": "(800) 781-9093",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1001 Wilshire Boulevard #1176",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90017",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0518073,
        "longitude": -118.2613875
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      } 
    }

    const schemaProduct = {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "Web Copywriting Services | Best Selling Publisher",
      "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
      "description": "Get the best quality of web copies written with our web copywriting services",
      "brand": {
        "@type": "Brand",
        "name": "Best Selling Publisher"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "1174"
      }
    }
  return (
    <main>
      <Head>
        <title>Web Copywriting Services | Best Selling Publisher</title>
        <meta name="description" content="At Best Selling Publisher, we take pride in our exceptional article writing services. Connect with us to start your publishing journey today!" />

        <meta property="og:url" content="https://bestsellingpublisher.com/web-copywriting-services" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public" />

        {/* canonical: */}
        <link rel="canonical" href="https://bestsellingpublisher.com/web-copywriting-services" />

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaWebsite)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaCorporation)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaProffesionalService)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaProduct)}}/>



      </Head>
      <MRHero
        title="Develop Your Business With The Outstanding Skills And  Expertise of Our Web Copywriters"
        desc="Welcome to Best Selling Publisher Ghostwriting. We offer professional web copywriting services, taking your website to the next level with the help of our expert copywriters."
        logos="images/banner/img2.png"
        classes='bg-[#FEFEFE] !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/front-laptop-keyboard.png')]"
        counter={true}
      />
      <Enlistedlogo />
      <MRContent1
        subTitle="Communicate"
        title="Your Brand’s Message Efficiently"
        desc="Our professional SEO writers produce keyword-rich content to help you beat the competition, bringing in the high ranking needed to elevate your website for better outreach, branding, and visibility."
        img1="/assets/images/newimg/communicate.png"
        direction="flex-row-reverse"
      />
      <MRCards
        subTitle="Our Services Have Been Constantly Hailed as Remarkable"
        title={`What Makes Us the Premier Choice in <br class="mr-xl:block hidden" /> Professional Ghostwriting?`}
        desc="Best Selling Publisher's ghostwriting services truly stand out as a class apart. Their team of expert writers possesses an unparalleled ability to capture the unique voice and essence of each client, flawlessly translating their ideas into fascinating prose. What sets them apart is their dedication to understanding the vision and goals of their clients."
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[80%] mx-auto"
        cta={true}
        variant="icons"
        data={MRCardData} />
      <MRContent1
        subTitle="Our Comprehensive"
        title="Web Copywriting Services"
        desc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties."
        img2="/assets/images/newimg/ghostwriting_book.png"
        listTitle="Our process is simple and aims to deliver flawless results for every project."
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

export default WebCopywritingServices