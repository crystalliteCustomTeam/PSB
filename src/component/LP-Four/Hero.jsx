// Media
import Bg from "media/lp-four/herobg.png"
import Logo1 from "media/lp-four/heroLogo1.svg"
import Logo2 from "media/lp-four/heroLogo2.svg"
// Next
import Image from "next/image"
// Components
import { MRCTA } from "@/component"
import { Hero3dSlider } from "./"

export default function Hero() {
    return (
        <section>
            <div className="relative pt-[100px] pb-[50px] mr-lg:py-0 mr-lg:h-[750px] z-10 bg-gray-700">
                <Image src={Bg} alt="Bg" fill={true} className="object-cover object-center -z-10" priority={true} />
                <div className="mr-container h-full flex flex-col justify-center relative">
                    <div className="grid grid-cols-1 mr-lg:grid-cols-2 items-center gap-5">
                        <div>
                            <h1 className="text-white mr-xs:text-[26px] mr-sm:text-[35px] mr-md:text-[55px] mr-lg:text-[36px] mr-xl:text-[43px] mr-2xl:text-[50px] font-semibold leading-snug mb-[20px]">
                                Transform Your Manuscript <br className="hidden mr-lg:block" /> Into A Bestseller With Premier <br className="hidden mr-lg:block" /> Book Publishing Services
                            </h1>
                            <p className="mr-xs:text-justify text-[16px] mr-lg:text-[15px] mr-2xl:text-[17px] font-normal text-white leading-relaxed !mb-[20px] mr-lg:!mb-[30px] block">
                                We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves. We will strategically promote your books online to optimize sales
                            </p>
                            <div className="flex gap-4 mb-[50px]">
                                <MRCTA text="Connect With Us!" classes="mr-xs:!px-5" />
                                <MRCTA text="Call Us Now!" classes="bg-white mr-xs:!px-5 !text-black" />
                            </div>
                            <Image src={Logo1} alt="logo" className="mb-[30px]" />
                            <Image src={Logo2} alt="logo" />
                        </div>
                        <div className="overflow-hidden mt-[30px] mr-lg:mt-0">
                            <Hero3dSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}