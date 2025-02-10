import {
  BestSellerBooks,
  BrandsLogos,
  ClientsImage,
  ContactForm,
  Footer,
  Header,
  Hero,
  JourneyForm,
  JourneyStart,
  MadeEasy,
  Packages,
  Process,
  SelfPublishing,
  Testimonials,
} from "@/component/Lp-Seven"

export default function LpPublishing() {
  return (
    <>
      <Header />
      <Hero />
      <BrandsLogos />
      <ClientsImage />
      <JourneyForm />
      <BestSellerBooks />
      <Packages />
      <Testimonials />
      <Process />
      <SelfPublishing />
      <JourneyStart />
      <MadeEasy/>
      <ContactForm/>
      <Footer />
    </>
  )
}
