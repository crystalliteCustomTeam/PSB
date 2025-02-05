import dynamic from "next/dynamic"

const Header = dynamic(() => import("./Header"))
const Hero = dynamic(() => import("./Hero"))
const CTA = dynamic(() => import("./CTA"))
const BrandsLogos = dynamic(() => import("./BrandsLogos"))
const AutoScroll = dynamic(() => import("./Sliders/AutoScroll"))
const ClientsImage = dynamic(() => import("./ClientsImage"))
const JourneyForm = dynamic(() => import("./JourneyForm"))
const BestSellerBooks = dynamic(() => import("./BestSellerBooks"))
const Packages = dynamic(() => import("./Packages"))
const Footer = dynamic(() => import("./Footer"))

export {
  Header,
  Hero,
  CTA,
  BrandsLogos,
  AutoScroll,
  ClientsImage,
  JourneyForm,
  BestSellerBooks,
  Packages,
  Footer,
}
