import { MRCTAGroup } from "@/component";
import LogosCarousal from "../Logos/LogosCarousal";

const Hero = ({ title, desc }) => {
    return (
        <section className="relative mr-xl:before:bg-[url('../../public/lp-two-images/hero/1.png')] mr-xl:before:bg-cover mr-xl:before:bg-center mr-xl:before:bg-no-repeat mr-xl:before:w-[440px] mr-xl:before:h-[100%] mr-xl:before:absolute mr-2xl:before:-left-16 mr-xl:before:-left-36 mr-xl:before:top-16 before:z-50 mr-xl:after:bg-[url('../../public/lp-two-images/hero/2.png')] mr-xl:after:bg-cover mr-xl:after:bg-center mr-xl:after:bg-no-repeat mr-xl:after:w-[425px] mr-xl:after:h-[100%] mr-xl:after:absolute mr-2xl:xl:after:-right-16 mr-xl:after:-right-36 mr-xl:after:top-16 after:z-50">
            <div className="font-sans mr-lg:py-[80px] mr-md:py-[60px] pt-[60px] pb-[40px]">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-xl:w-[65%] mr-lg:w-[75%] w-full mx-auto text-black">
                        <h1 className="mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="mr-md:text-base leading-normal text-sm font-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                        <MRCTAGroup classes="justify-center mt-8" />
                    </div>
                    <LogosCarousal />
                </div>
            </div>
        </section>
    )
}

export default Hero;