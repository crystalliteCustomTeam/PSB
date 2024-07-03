import { MRCTA } from "@/component";
import Image from "next/image";
import BannerBG from "media/book-illustrations/types-of-illustrations/banner.png"
import SideImage from "media/book-illustrations/types-of-illustrations/sideImage.png"
const StandOut = () => {
    return (
        <section className="font-sans">
            <div className="mr-lg:mt-[40px] mr-lg:py-0 mr-md:py-[60px] py-[40px] relative z-10">
                <Image src={BannerBG} alt="banner" className="absolute mr-xl:top-14 top-0 left-0 right-0 bottom-0 -z-10 w-full mr-xl:h-[85%] h-full object-auto" priority={true} />
                <div className="mr-container">
                    <div className="grid grid-cols-12 items-center mr-lg:gap-x-5 gap-5">
                        <div className="mr-2xl:col-span-5 mr-lg:col-span-6 col-span-12">
                            <div className="text-white mr-sm:text-start text-justify">
                                <h2 className="mr-2xl:text-[60px] mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-semibold mb-3">Ready To Make Your <br className="mr-xl:block hidden" /> Book Stand Out?</h2>
                                <p className="mr-md:text-base text-sm leading-normal font-normal">Our seasoned marketing professionals expertly employ advanced, effective  <br className="mr-xl:block hidden" /> techniques to boost your literal presence. Our seasoned marketing professionals  <br className="mr-xl:block hidden" /> expertly employ advanced, effective techniques to boost your Consistency.</p>
                                <MRCTA text="Book An Appointment" classes="__animatedPing mt-5 !rounded-full hover:bg-transparent hover:border-white" />
                            </div>
                        </div>
                        <div className="mr-2xl:col-span-6 mr-lg:col-span-6 col-span-12">
                            <Image src={SideImage} alt="illustrations" className="block me-auto" />
                        </div>
                        <div className="mr-2xl:col-span-1"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StandOut;