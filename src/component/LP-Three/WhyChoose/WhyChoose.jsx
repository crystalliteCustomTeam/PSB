import Image from "next/image";
import Banner from "media/book-illustrations/whyChooseBanner.png"
import Arrow from "media/book-illustrations/arrowBlue.svg"
import { MRCTA } from "@/component";
const WhyChoose = () => {
    return (
        <section className="font-sans">
            <div className="relative z-10 mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                <Image src={Banner} alt="heroBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover" priority={true} />
                <div className="mr-container">
                    <div className="text-white mr-sm:text-center text-justify mr-xl:w-[60%] mr-lg:w-[70%] mr-md:w-[90%] w-full mx-auto">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mb-3">Why Choose Us</h2>
                        <p className="mr-md:text-base text-sm leading-normal font-normal">Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective</p>
                    </div>
                    <div className="grid mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-md:grid-cols-2 grid-cols-1 items-center mr-xl:gap-x-8 gap-8 mr-md:mt-16 mt-10">
                        {
                            [
                                ["Engage Your Audience",
                                    "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal"],
                                ["Engage Your Audience",
                                    "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal"],
                                ["Engage Your Audience",
                                    "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal"],
                                ["Engage Your Audience",
                                    "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal"]
                            ].map(([title, desc], i) => (
                                <div key={i} className="relative bg-white group hover:bg-primary-100 transition-all duration-500 ease-in-out rounded-2xl mr-2xl:px-6 px-4 mr-2xl:py-10 py-8 before:border-2 before:border-white before:absolute before:w-full before:h-full before:rounded-2xl before:top-3 before:left-3 before:-z-10">
                                    <div className="border-b-4 group-hover:border-white group-hover:text-white border-primary-100 pb-4">
                                        <h4 className="mr-2xl:text-[25px] mr-lg:text-[22px] text-[20px] leading-tight font-semibold mb-4">{title}</h4>
                                        <p className="mr-2xl:text-base text-[15px] leading-normal font-normal">{desc}</p>
                                    </div>
                                    <a href="javascript:;" className="flex items-center gap-x-2 mt-4">
                                        <span className="block group-hover:text-white text-primary-100 text-base leading-normal">More Information</span>
                                        <Image src={Arrow} alt="arrow" className="block group-hover:brightness-0 group-hover:invert" />
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                    <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mr-md:mt-16 mt-10">
                        <MRCTA text="Connect With Us!" classes="__animatedPing !rounded-full hover:bg-transparent hover:border-white" />
                        <MRCTA text="Call Us Now!" classes="__animatedPing !rounded-full bg-transparent border-white hover:bg-black hover:border-black" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhyChoose;