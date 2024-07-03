import Image from "next/image";
import Banner from "media/book-illustrations/heroBanner.png"
import { MRCTA } from "@/component";
import Logos from "../Logos/LogosCarousal";
import PortfolioCarousal from "../PortfolioCarousal/PortfolioCarousal";
const Hero = () => {
    return (
        <section className="font-sans">
            <div className="relative z-10 pt-[100px] pb-[50px]">
                <Image src={Banner} alt="heroBanner" className="absolute bg-primary-100 top-0 left-0 right-0 bottom-0 -z-10 w-full h-[85%] object-cover" priority={true} />
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify text-white mr-xl:w-[65%] mr-md:w-[75%] w-full mx-auto">
                        <h1 className="mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] mb-3 leading-normal font-semibold">Transform Your Manuscript with Our Book Illustration Services</h1>
                        <p className="mr-md:text-base text-sm font-normal leading-normal">We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves. We will strategically promote your books online to optimize sales</p>
                        <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mt-8">
                            <MRCTA text="Connect With Us!" classes="__animatedPing !rounded-full hover:bg-transparent hover:border-white" />
                            <MRCTA text="Call Us Now!" classes="__animatedPing !rounded-full bg-transparent border-white hover:bg-black hover:border-black" />
                        </div>
                    </div>
                    <Logos />
                </div>
                <PortfolioCarousal />
            </div>
        </section>
    )
}
export default Hero;