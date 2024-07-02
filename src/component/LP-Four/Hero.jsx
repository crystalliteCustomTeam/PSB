// Media
import Bg from "media/lp-four/herobg.png"
import Logo1 from "media/lp-four/heroLogo1.svg"
import Logo2 from "media/lp-four/heroLogo2.svg"
// Next
import Image from "next/image"
// Components
import { MRCTA } from "@/component"
import Hero3dSlider from "./Hero3dSlider"

export default function Hero() {
    return (
        <section>
            <div className="relative h-[750px] z-10">
                <Image src={Bg} alt="Bg" fill={true} className="object-cover object-center -z-10" priority={true} />
                <div className="mr-container h-full flex flex-col justify-center">
                    <div className="grid grid-cols-2 items-center gap-5">
                        <div>
                            <h1 className="text-white text-[43px] mr-2xl:text-[50px] font-semibold leading-snug mb-[20px]">
                                Transform Your Manuscript <br /> Into A Bestseller With Premier <br /> Book Publishing Services
                            </h1>
                            <p className="text-[15px] mr-2xl:text-[17px] font-normal text-white leading-relaxed !mb-[20px] block">
                                We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves. We will strategically promote your books online to optimize sales
                            </p>
                            <div className="flex gap-4 mb-[30px]">
                                <MRCTA text="Connect With Us!" />
                                <MRCTA text="Call Us Now!" classes="bg-white !text-black" />
                            </div>
                            <Image src={Logo1} alt="logo" className="mb-[30px]" />
                            <Image src={Logo2} alt="logo" />
                        </div>
                        <div>
                            <Hero3dSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}