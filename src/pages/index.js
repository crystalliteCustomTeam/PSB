import Head from "next/head"
// components
import Tradition from "@/fa-component/Tradition"
import Audience from "@/fa-component/Audience"
import Dreams from "@/fa-component/Dreams"
import Plans from "@/fa-component/Plans"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import SwiperComponents from "@/component/SwiperComponent"
import { MRHero, MRContact, MRQuestioners, MRContent1, MRCards, } from "@/component"
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"

const MRQuestionersData = [
  {
    title: "Experience and Quality",
    desc: "Our team is stacked with seasoned professionals who’ve got one thing on their minds, top-notch quality and no exceptions. "
  },
  {
    title: "Industry Experts",
    desc: "Leading the charge, we’re all about delivering solutions that are not just optimal but downright revolutionary."
  },
  {
    title: "Range of Services",
    desc: "Our services vary from ghostwriting that whispers your story to the world, SEO content that puts you on the map, and articles, magazines, and web copy that speak volumes. Not to mention press releases and scripts that make waves — we've got all your writing needs covered!"
  },
  {
    title: "Goal-Driven",
    desc: "At Best Selling Publisher, We have our priorities set straight. Our main and ultimate goal is client satisfaction and nothing else."
  },
  {
    title: "Affordable Packages",
    desc: "Don’t you deserve a taste of victory too? We don’t want you to miss out on your literary potential. Let’s make your writing dreams come true with affordable digital publishing. "
  },
  {
    title: "Passion and Creativity",
    desc: "Guess what? We’re not afraid to burn the midnight oil regarding passion and creativity. Our passion burns like a candle that can never be snuffed. So what are you waiting for? "
  }

]
const MRCardData = [
  {
    indexing: true,
    classes: "bg-white shadow-lg px-3 rounded-lg relative pt-[40px] pb-[40px] mt-[40px] transition-all duration-300 ease-in-out hover:!bg-[#40BEE2] hover:!text-white",
    cta: false,
    stepText: "",
    content: [
      {
        title: "Amazon Publishing",
        desc: "With this esteemed collaboration, you can gain access to Amazon's vast distribution network and cutting-edge publishing technology, ensuring their work reaches a global audience. We offer a diverse range of imprints covering various genres, including mystery, romance, science fiction, and non-fiction. You can count on Best Selling Publisher.",
      },
      {
        title: "Book Publishing",
        desc: "Book publishing is the process of bringing your written works to the market for public consumption! Exciting isn’t it? It involves various stages, from acquiring manuscripts or ideas, editing, design, production, and distribution to marketing and sales. Publishers play a crucial role in curating and refining content, ensuring its quality and relevance to target your audience.",
      },
      {
        title: "Digital Book Publishing",
        desc: "You’re probably wondering how book publishing works. Here’s the thing: it leverages digital technologies to offer readers convenient access to a wide range of literary content on various devices. These include e-readers, tablets, and smartphones. Digital book publishing has revolutionized the traditional publishing industry, enabling you to reach global audiences.",
      },
      {
        title: "E-Book Publishing",
        desc: "eBook publishing, a cornerstone of digital literature, involves the creation, distribution, and consumption of books in electronic format. Unlike traditional print publishing, eBook publishing eliminates the need for you to have physical copies. You can easily reach readers anywhere in the world.",
      },
      {
        title: "Self-publishing",
        desc: "Empowered authors like you can bring their literary creations directly to readers without the involvement of traditional publishing houses. This involves the author overseeing all aspects of the publishing process, including editing, formatting, cover design, and distribution.",
      },
      {
        title: "Book Marketing",
        desc: "Book marketing encompasses the strategic efforts to promote and sell a book to your target audience. It involves a wide range of activities to increase visibility, generate interest, and ultimately drive sales.",
      },
    ]
  },
]
const MRCardData2 = [
  {
    classes: "bg-[#F2F2F2] shadow-lg px-4 rounded-lg relative py-[20px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-center",
    cta: true,
    content: [
      {
        title: "Top-Notch Services",
        border: "border-b border-[#707070]",
        padding: "pb-2",
        desc: "The first thing that’s probably on your mind is why we are the best. Our services prioritize quality, reliability, and customer satisfaction. We aim to exceed expectations and deliver exceptional value. By consistently delivering superior results, our top-notch services earn your trust, loyalty, and a reputation for excellence that sets us apart in a competitive marketplace.",
        minHeight: "min-h-[140px]"
      },
      {
        title: "Experience and Dedication",
        border: "border-b border-[#707070]",
        padding: "pb-2",
        desc: "Our team of experts has years of experience that allows them to pursue every project with great dedication. We strongly believe there should never be any compromise on quality and your satisfaction.",
        minHeight: "min-h-[140px]"
      },
      {
        title: "Cost-Effective Packages",
        border: "border-b border-[#707070]",
        padding: "pb-2",
        desc: "These packages are designed to meet the needs of budget-conscious consumers or businesses without compromising on quality. They often include a combination of products or services bundled together at a discounted rate compared to purchasing each item separately. ",
        minHeight: "min-h-[140px]"
      },
    ]
  },
]
const Home = () => {

  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Best Selling Publisher",
    "url": "https://bestsellingpublisher.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "[search_term_string]",
      "query-input": "required name=search_term_string"
    }
  }
  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Best Selling Publisher",
    "url": "https://bestsellingpublisher.com/",
    "logo": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png"
  }

  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Best Selling Publisher",
    "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    "url": "https://bestsellingpublisher.com/",
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
    "name": "Best Selling Publisher",
    "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    "description": "Best Selling Publisher can publish your book in no time as we are the leading book publishers in US",
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
        <title>The Home of Quality Publishing | Best Book Publishing Company</title>
        <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />

        <meta property="og:url" content="https://bestsellingpublisher.com" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public" />

        {/* canonical: */}
        <link rel="canonical" href="https://bestsellingpublisher.com" />

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html : JSON.stringify(schemaWebsite)}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html : JSON.stringify(schemaCorporation)}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html : JSON.stringify(schemaProffesionalService)}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html : JSON.stringify(schemaProduct)}} />



          
      </Head>
      <MRHero
        title="Craft Legacy Through <br /> Words with the Best Book <br /> Publishing Company "
        containImg="ahsan/home-banner-new.png"
        logos="images/banner/img2.png"
        form={false}
        counter={true}
      />
      <Enlistedlogo />
      <Tradition
        title="Celebrating Your Wins"
        desc="Discover how your publications can be nothing but glorious with Best Selling Publisher."
      />
      <Audience />
      <MRQuestioners
        subTitle="Time again, folks like you have celebrated our services as nothing short of remarkable. "
        title="Here’s what sets us apart from all the others"
        data={MRQuestionersData}
      />
      <PublishingNewComponent
        subtitle="Becoming the Next Best Seller has"
        title="Never Been Easier with "
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <MRCards
        title="Explore The Best Writing  <br class='mr-lg:block hidden' /> Services We Offer" desc="Beyond the extraordinary resides an array of services we take immense pride in. That said, <br class='mr-lg:block hidden' /> It’s time to make your publishing dreams come to life."
        gridsClasses="mr-lg:grid-cols-3 mr-sm:grid-cols-2 grid-cols-1 !gap-x-8"
        cta={true}
        data={MRCardData} />
      <MRCards
        title={`Dreams Don’t Turn to Dust with <br class="mr-xl:block hidden" /> Best Selling Publisher `}
        desc="Your dreams matter to us. We understand that there is nothing more painful for a writer than to witness their written word go to waste. We know exactly how to publish your work and emphasize it in unimaginable ways that will leave the readers wanting more."
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8"
        cta={false}
        variant="steps"
        data={MRCardData2}
      />
      <MRContent1
        subTitle="Capture the Interest of a Bigger Audience"
        title="Amazon Publishing Services"
        desc="Amazon Publishing Services encompass a range of offerings designed to assist authors in bringing their books to market and maximizing their success on the Amazon platform. These services may include editorial support, cover design, formatting assistance, and marketing guidance. Authors can reach a global audience and optimize their visibility to potential readers through Amazon's vast distribution network and marketing tools."
        listTitle="Our Package Include"
        list={[
          "Idea research and analysis",
          "Manuscript drafting",
          "Proofreading to eliminate errors",
          "Critical reviews",
          "Book Cover design and illustration",
          "Preparing text for publication",
          "Traditional and self-publishing",
          "Publishing on best libraries",
          "Video Book Trailers",
          "Branding and marketing"
        ]}
        img1="/images/flods/broader.png"
      />
      <MRContent1
        subTitle="Would you like to know a secret?"
        title="Less Is Never More for Us – It Can Be If You Want It to Be!"
        img1="/images/flods/advice.png"
        direction="flex-row-reverse"
      />
      <Plans />
      <SwiperComponents />
      <MRContact
        subTitle="No Matter What You Pick…"
        title="We Will Always Be There"
        desc="The right publishing partner. It can make all the difference between a manuscript collecting dust and a literary masterpiece capturing hearts worldwide. Best Selling Publisher is the unrivaled beacon of excellence in the dominion of publishing services. What sets Best Selling Publisher apart is its unwavering commitment to author success. With a team of seasoned professionals dedicated to every facet of the publishing process, from scrupulous editing to fascinating cover design and strategic marketing, Best Selling Publisher ensures that each book receives the royal treatment it deserves. <br /> <br /> Best Selling Publisher's innovative approach leverages cutting-edge technology and data-driven insights to maximize a book's visibility and reach across various platforms, including the formidable Amazon marketplace. Authors partnering with Best Selling Publisher gain access to a wealth of resources and expertise and benefit from personalized support every step of the way."
      />
    </main>
  )
}

export default Home