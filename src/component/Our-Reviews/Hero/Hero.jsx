import { MRCTAGroup } from "@/component";
import Image from "next/image";
import HeroBanner from "media/our-reviews/banner.png"
import HeroImage from "media/our-reviews/books.png"
import Logos from "media/our-reviews/logos.png"
const Hero = () => {
    return (
        <section className="relative z-10">
            <Image src={HeroBanner} alt="banner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority={true} />
            <div className="mr-md:pt-[150px] pt-[120px] mr-lg:pb-[80px] mr-md:pb-[60px] pb-[40px]">
                <div className="mr-container">
                    <div className="grid mr-lg:grid-cols-2 grid-cols-1 mr-lg:gap-x-5 gap-y-5 items-center">
                        <div className="text-white">
                            <h1 className="mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-semibold mb-5"><span className="border-t-4 border-primary-100">Case Studies</span> Fulfilling All <br className="mr-md:block hidden" /> Your Writing <span className="border-b-4 border-primary-100">Needs</span></h1>
                            <p className="text-base leading-normal font-normal">We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves. We will strategically promote your books online to optimize sales We <br className="mr-2xl:block hidden" />  will strategically promote your books online to optimize sales and secure the well-deserved</p>
                            <MRCTAGroup classes="mt-10" />
                        </div>
                        <div>
                            <Image src={HeroImage} alt="hero" className="block mx-auto" />
                        </div>
                    </div>
                    <div className="mr-md:mt-20 mt-12"><Image src={Logos} alt="logos" className="block mx-auto" /></div>
                </div>
            </div>
        </section>
    )
}

export default Hero;