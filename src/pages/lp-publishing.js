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
import { Popup } from "@/component/LP-Eight"
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
      <Popup popupDesc={`HIRE <strong>TOP Publishers AT 85% OFF</strong> TO CREATE YOUR TIMELESS WORK`} />
    </>
  )
}
