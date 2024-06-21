import WEARE from "@/component/genre/LetUsWEARE"
import MANUSCRIPT from "@/component/genre/manuscript"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact } from "@/component"
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import Head from "next/head"

const Genre = () => {
  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Genre | Best Selling Publisher",
    "url": "https://bestsellingpublisher.com/genre",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Genre | Best Selling Publisher",
    "url": "https://bestsellingpublisher.com/genre",
    "logo": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png"
  }
  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Genre | Best Selling Publisher",
    "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    "url": "https://bestsellingpublisher.com/genre",
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
    "name": "Genre | Best Selling Publisher",
    "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    "description": "Discover the wide range of book genres that we publish and market",
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
        <title>Genre | Best Selling Publisher</title>
        <meta name="description" content="Have you written an amazing fiction book? Or want to publish an autobiography. Explore our wide range of book genres and get your book published today." />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:url" content="https://bestsellingpublisher.com/genre" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public" />

        {/* canonical: */}
        <link rel="canonical" href="https://bestsellingpublisher.com/genre" />
        
        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html : JSON.stringify(schemaWebsite)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html : JSON.stringify(schemaCorporation)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html : JSON.stringify(schemaProffesionalService)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html : JSON.stringify(schemaProduct)}}/>



      </Head>
      <MRHero
        title="Create Your Literary Legacy, Because Your Story Deserves the Best!"
        desc="Our mission as a company is to bring you literary success. We offer great content for every book genre, whether you need fiction book publishing services, autobiography, top-ranked memoirs publishing, or best children book publishing, we’ve covered it all!"
        logos="images/banner/img2.png"
        counter={true}
        classes='bg-[#fefefe] !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/books-library.png')]"
      />
      <Enlistedlogo />
      <WEARE />
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <MANUSCRIPT />
      <BTM />
      <CTA />
      <SwiperComponents />
      <MRContact 
      titleB="It's Time to Write Your Book!" 
      descB={`Craft tales that transport, captivate, and <br class="hidden mr-sm:block" /> linger in minds with Best Selling Publisher!`}
       />
    </main>
  )
}

export default Genre