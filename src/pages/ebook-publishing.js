import Head from "next/head"
import Tradition from "@/fa-component/Tradition"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import SwiperComponent from "@/component/SwiperComponent"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import { MRHero, MRContact, MRQuestioners, MRContent1 } from "@/component"

const MRQuestionersData = [
  {
    title: "Ebooks Are Much Cheaper To Produce Than Print Books. ",
    desc: "You don't have to pay for printing, paper, or shipping costs."
  },
  {
    title: "Ebooks Can Be Published And Distributed Very Quickly.  ",
    desc: "You can have your eBook available for sale within days or weeks."
  },
  {
    title: "Ebooks Are Very Easy To Update.",
    desc: "You can make changes to your eBook and distribute the updated version to your readers without having to go through the traditional printing and distribution process. "
  },
  {
    title: "Ebooks Are Very Easy To Distribute.",
    desc: "You can sell your eBook online or distribute it for free through websites and social media."
  },
  {
    title: "Ebooks Are Very Sustainable.",
    desc: "They don't require trees to be cut down to be produced, and they can be read on electronic devices that use very little energy."
  },
  {
    title: "Ebooks Can Be An Excellent Marketing Tool.",
    desc: "You can use your eBook to promote your other products and services."
  },
  {
    title: "Ebooks Can Help You Build A Community Around Your Brand.",
    desc: "If you distribute your eBook for free, you can attract new readers and followers who will be interested in what you have to say."
  },
  {
    title: "Ebooks Can Be A Great Revenue Stream.",
    desc: "If you sell your eBook, you can make a significant amount of money from it. There are many more benefits to eBook publishing than we have space to list here. Suffice it to say that if you're thinking about publishing a book, you should seriously consider doing it as an eBook. It's a quick, easy, cost-effective way to get your content out there. And who knows? Your eBook could end up being a bestseller!"
  }
]

const EbookPublishing = () => {
  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Ebook Publishing | Best Selling Publisher",
    "url": "https://bestsellingpublisher.com/ebook-publishing",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Ebook Publishing Services | Best Selling Publisher",
    "url": "https://bestsellingpublisher.com/ebook-publishing",
    "logo": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png"
  }
  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ebook Publishing Services | Best Selling Publisher",
    "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    "url": "https://bestsellingpublisher.com/ebook-publishing",
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
    "name": "Ebook Publishing Services | Best Selling Publisher",
    "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    "description": "Hire the ebook publishing services and publish your masterpiece on your favourite platform",
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
    <>
      <Head>
        <title>Ebook Publishing | Best Book Publishing Company</title>
        <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />

        <meta property="og:url" content="https://bestsellingpublisher.com/ebook-publishing" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public" />

        {/* canonical: */}
        <link rel="canonical" href="https://bestsellingpublisher.com/ebook-publishing" />

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaWebsite)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaCorporation)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaProffesionalService)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaProduct)}}/>



      </Head>
      <MRHero
        title="Create The Best-Selling Ebooks With Our Ebook Publishing Services!"
        logos="images/banner/img2.png"
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/woman-reading-book-side-view.png')]"
      />
      <Enlistedlogo />
      <Tradition
        title="EBook Publishers That Deliver Results"
        desc="Let Our EBook Publishers Help You Be The Best Selling Authors Of All Times!"
      />
      <MRQuestioners
        subTitle="Be a Part of the Best Sellers’ Fraternity"
        title="Why Does E Book Publishing Gain A Lot Of Momentum? "
        desc="Ebook publishing has gained a lot of momentum in recent years. This is because it is a very efficient way to publish and distribute content. There are many advantages to using eBooks over traditional print books. Here are some of the most important benefits:"
        data={MRQuestionersData}
      />
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <MRContent1
        subTitle="Here’s A Good Piece Of Advice"
        title="We Are Ebook Publishers You Would Love To Partner With!"
        desc="At Best Selling Publisher, we understand that reading should be an enjoyable experience for everyone. That's why we offer a wide variety of eBooks for you to choose from. Whether you're looking for the latest bestseller or a classic work of literature, we have something for everyone. We also believe that books should be affordable, so we offer our eBooks at a fraction of the cost of print books. So why not take a look at our catalog and see what we have to offer in our book publishing services? You're sure to find something that interests you."
        img1="/ahsan/ebook-broder.png"
      />
      <BTM />
      <CTA />
      <SwiperComponent />
      <MRContact />
    </>
  )
}

export default EbookPublishing