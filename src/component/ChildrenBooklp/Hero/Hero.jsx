import Image from "next/image";
import { MRCTA } from "@/component";
// Images
import Banner from "media/children-book-lp/hero-bg.png"
import Book1 from "media/children-book-lp/hero-book-1.png"
import Book2 from "media/children-book-lp/hero-book-2.png"
import Book3 from "media/children-book-lp/hero-book-3.png"

const Hero = () => {
    return (
        <section className="font-sans">
            <div className="relative z-10 pt-[130px] pb-[50px]">
                <Image src={Banner} alt="heroBanner" fill={true} className='z-[-1] object-cover mr-lg:object-center mt-[-10px]' /> 
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify text-white mr-2xl:w-[70%] mr-lg:w-[75%] w-full mx-auto ">
                        <h1 className="mr-2xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] mb-3 leading-[35px] mr-md:leading-[40px] mr-lg:leading-[60px] mr-2xl:leading-[70px] font-semibold">Turn Your <span className="text-[#40BEE2] font-normal">Children's Story</span> into a Beloved Classic with Premier Publishing <span className="text-[#40BEE2] font-normal">Services</span></h1>
                        <p className="mr-md:text-base text-sm font-normal leading-normal">Unlock the potential of your children's story with our expert publishing services, designed to captivate young readers and create lasting memories. From vibrant illustrations to seamless distribution, we turn your manuscript into a cherished classic that stands the test of time.</p>
                        <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mt-5 mr-2xl:mt-8">
                            <MRCTA text="Connect With Us!" handle="onclick='parent.LC_API.open_chat_window();return false;'" classes="__animatedPing !rounded-[6px] hover:bg-transparent hover:border-white" />
                            <MRCTA text="Call Us Now!" link="tel:800-781-9093" classes="__animatedPing !rounded-[6px] bg-transparent !border-0 hover:bg-black !bg-white !text-black hover:border-black" />
                        </div>
                        <div className="flex items-center justify-center gap-3 mr-lg:gap-5 pt-7 mr-2xl:pt-12">
                            <div>
                                <Image src={Book1} alt="BSP" width={268} height={380} />
                            </div>
                            <div>
                                <Image src={Book2} alt="BSP" width={268} height={380} />
                            </div>
                            <div>
                                <Image src={Book3} alt="BSP" width={268} height={380} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;