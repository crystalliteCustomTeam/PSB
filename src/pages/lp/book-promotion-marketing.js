import {
  BookPromotionFooter,
  BookPromotionHeader,
  BrandLogos,
  ClientLogos,
  ContactForm,
  FrequentlyAskedQuestions,
  Hero,
  Portfolio,
  Pricing,
  Process,
  PromoteBook,
  Qualify,
  Reviews,
  WhyChoose,
} from "@/component/LP-Eight"
import Head from "next/head"

const BookPromotionMarketing = () => {
  return (
    <>
     <Head>
        <title>Book Promotion Marketing - Best Selling Publisher</title>
        <meta property="og:title" content="Join over 500 successful authors and achieve bestseller status with premium-grade book promotion services at Best Selling Publisher!" key="promotion" />
      </Head>
      <BookPromotionHeader />
      <Hero />
      <ClientLogos />
      <Qualify />
      <PromoteBook />
      <WhyChoose />
      <Pricing />
      <Portfolio />
      <BrandLogos />
      <Process />
      <ContactForm/>
      <FrequentlyAskedQuestions />
      <Reviews />
      <BookPromotionFooter />
    </>
  )
}

export default BookPromotionMarketing
