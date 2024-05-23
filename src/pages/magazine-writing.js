import LHMagazine from "@/component/MagazineWriting/LetUsMagazine"
import GhostWriting from "@/component/ghostWritingServices/ghostWriting"
import WMODE from "@/component/workMode1"
import CTA from "@/component/cta3"
import BTM from "@/component/bottomLogos"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent2, MRContent1, MRCards } from "@/component"
import Head from "next/head";
// Import Images
import Essay from "media/imageAR/Essay.png"
import Historical from "media/imageAR/Historical.png"
import Profile from "media/imageAR/Profile.png"
import Service from "media/imageAR/Service.png"
import Articles from "media/imageAR/Articles.png"
import Informative from "media/imageAR/Informative.png"
const MagazineWriting = () => {
  const MRContent2Data = [
    {
      title: "Fiction",
      desc: "Our fiction writers will assist you in creatively expressing your ideas into enticing literacy that will captivate your audience. All aspects of a story are considered, particularly the author’s major plot and characters. "
    },
    {
      title: "Informative",
      desc: "Our writers comprehend the nuance of your text. They ensure their information is reliable and well-acknowledged worldwide, under the available data and facts."
    },
    {
      title: "Memoir",
      desc: "Our writers have been trained to write memoirs, not to confuse them with autobiographies. Furthermore, they cherish your sentiments and emotions and go to great lengths to turn your precious memories into a book."
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
          icon: Essay,
          title: "Essay </br> Articles",
        },
        {
          icon: Historical,
          title: "Historical </br> Articles",
        },
        {
          icon: Profile,
          title: "Profile </br> Articles",
        },
        {
          icon: Service,
          title: "Service </br> Articles",
        },
        {
          icon: Articles,
          title: "Research </br> Articles",
        },
        {
          icon: Informative,
          title: "Informative </br> Articles",
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
      "name": "Magazine Writing Services | Best Selling Publisher",
      "url": "https://bestsellingpublisher.com/magazine-writing",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
    const schemaCorporation = {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name": "Magazine Writing Services | Best Selling Publisher",
      "url": "https://bestsellingpublisher.com/magazine-writing",
      "logo": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png"
    }
    const schemaProffesionalService = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Magazine Writing Services | Best Selling Publisher",
      "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
      "url": "https://bestsellingpublisher.com/magazine-writing",
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
      "name": "Magazine Writing Services | Best Selling Publisher",
      "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
      "description": "Hire our professional magazine writing services and make your magazine a masterpiece",
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
        <title>Magazine Writing | Best Selling Publisher</title>
        <meta name="description" content="At Best Selling Publisher, we take pride in our exceptional article writing services. Connect with us to start your publishing journey today!" />
        
        <meta property="og:url" content="https://bestsellingpublisher.com/magazine-writing" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public" />

        {/* canonical: */}
        <link rel="canonical" href="https://bestsellingpublisher.com/magazine-writing" />

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaWebsite)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaCorporation)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaProffesionalService)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaProduct)}}/>
        
        


      </Head>
      <MRHero
        title="Our Magazine Writers Bring It All Altogether"
        desc="Attracting the reader at the first step can be tricky, but our expert writers effortlessly bring all the content together, instantly hooking your readers from the very first sentence."
        logos="images/banner/img2.png"
        classes='bg-[#fefefe] !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/magazine.png')]"
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
        title="Magazine Writting Services"
        desc="We have a vast pool of writers and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties."
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
        subTitle="Our Creative Writers,"
        title="Bringing Your Imagination To Life."
        desc={`You may have an idea for the next best-seller, but you may not have the time or expertise to write it yourself. Our platform meets all of the <br class="mr-xl:block hidden"/> requirements and offers a diverse range of writing styles, including:`}
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

export default MagazineWriting