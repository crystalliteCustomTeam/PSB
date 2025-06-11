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
  CtaSection,
} from "@/component/Lp-Seven-2";
import { Popup } from "@/component/LP-Eight";

import { MRVideoTestimonials } from "@/component";

export default function LpPublishing() {
  return (
    <>
      <Header />
      <Hero />
      <BrandsLogos />
      {/* <ClientsImage /> */}
      <JourneyForm />
      <BestSellerBooks />
      <CtaSection />
      {/* <Packages />
      <Testimonials /> */}
      {/* Video Testimonials Section */}
      <MRVideoTestimonials colorChange={true} />
      {/* Video Testimonials Section */}
      <Process />
      <SelfPublishing />
      <JourneyStart />
      <MadeEasy />
      <ContactForm />
      <Footer />
      <Popup
        popupDesc={`HIRE <strong>TOP Publishers AT 85% OFF</strong> TO CREATE YOUR TIMELESS WORK`}
      />
    </>
  );
}
