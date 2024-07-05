// Components
import { AutoPlaySlider } from "./"
// Media
import One from "media/lp-four/casestudies/1.png"
import Two from "media/lp-four/casestudies/2.png"
import Three from "media/lp-four/casestudies/3.png"
import Four from "media/lp-four/casestudies/4.png"
import Logo1 from "media/lp-four/casestudies/logo1.svg"
import Logo2 from "media/lp-four/casestudies/logo2.svg"
import Logo3 from "media/lp-four/casestudies/logo3.svg"
import Logo4 from "media/lp-four/casestudies/logo4.svg"
import Logo5 from "media/lp-four/casestudies/logo5.svg"
import Logo6 from "media/lp-four/casestudies/logo6.svg"
import Logo7 from "media/lp-four/casestudies/logo7.svg"
import Logo8 from "media/lp-four/casestudies/logo8.svg"
// Next
import Image from "next/image"

export default function CaseStudies() {
    return (
        <section>
            <div className="py-[80px]">
                <div className="text-center text-black">
                    <h2 className="text-[30px] mr-md:text-[40px] font-semibold leading-snug mb-[15px]">
                        Our Casestudy's
                    </h2>
                    <p className="text-[16px] leading-relaxed font-normal mr-md:max-w-[80%] mr-lg:max-w-[60%] mr-2xl:max-w-[50%] mx-auto">
                        Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced
                    </p>
                </div>
                <AutoPlaySlider wrapperClasses="mt-[50px]">
                    {
                        [
                            {
                                img: One,
                                title: "In The Line of Fire",
                                desc: "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing. Our seasoned marketing",
                                list: ["Our seasoned marketing professionals expertly employ advanced, effective", "Techniques to boost your literal presence. Our seasoned marketing professionals", "Expertly employ advanced, effective techniques to boost your Consistency."],
                                bg: "bg-[#563B29]",
                                color: "text-white"
                            },
                            {
                                img: Two,
                                title: "When He Calls",
                                desc: "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing. Our seasoned marketing",
                                list: ["Our seasoned marketing professionals expertly employ advanced, effective", "Techniques to boost your literal presence. Our seasoned marketing professionals", "Expertly employ advanced, effective techniques to boost your Consistency."],
                                bg: "bg-[#C8D5D8]",
                                color: "text-black"
                            },
                            {
                                img: Three,
                                title: "Love Tapestry",
                                desc: "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing. Our seasoned marketing",
                                list: ["Our seasoned marketing professionals expertly employ advanced, effective", "Techniques to boost your literal presence. Our seasoned marketing professionals", "Expertly employ advanced, effective techniques to boost your Consistency."],
                                bg: "bg-[#344960]",
                                color: "text-white"
                            },
                            {
                                img: Four,
                                title: "Last Summer",
                                desc: "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing. Our seasoned marketing",
                                list: ["Our seasoned marketing professionals expertly employ advanced, effective", "Techniques to boost your literal presence. Our seasoned marketing professionals", "Expertly employ advanced, effective techniques to boost your Consistency."],
                                bg: "bg-[#8A7D5F]",
                                color: "text-white"
                            },
                        ].map(({ bg, title, desc, list, img, color }, i) => (
                            <div key={i} className={`grow-0 shrink-0 basis-[85%] mr-xl:basis-[75%] mr-2xl:basis-[65%] min-w-0 pl-4`}>
                                <div className={`${bg} ${color} p-[20px] mr-md:p-[40px] rounded-2xl`}>
                                    <div className="grid grid-cols-12 gap-5 items-center">
                                        <div className="col-span-12 mr-lg:col-span-4">
                                            <Image src={img} alt="img" className="mr-lg:w-full h-[300px] mr-lg:h-auto mx-auto" />
                                        </div>
                                        <div className="col-span-12 mr-lg:col-span-8">
                                            <h3 className="text-[30px] font-semibold leading-snug">
                                                {title}
                                            </h3>
                                            <p className="text-[16px] text-justify mr-md:text-left mr-lg:text-[14px] mr-2xl:text-[16px] font-normal leading-normal mt-[15px]">
                                                {desc}
                                            </p>
                                            <ul className="[&>*:not(:last-child)]:mb-4 mt-[15px] !list-inside !list-disc">
                                                {
                                                    list?.map((e, i) => (
                                                        <li key={i} className="text-[16px] mr-lg:text-[14px] mr-2xl:text-[16px] font-normal leading-normal">
                                                            {e}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <div className="grid grid-cols-4 justify-between mt-[30px] gap-5 items-center">
                                                {
                                                    [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8].map((e, i) => (
                                                        <Image src={e} alt="logo" />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </AutoPlaySlider>
            </div>
        </section>
    )
}