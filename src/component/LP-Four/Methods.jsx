import Image from 'next/image'
import backgroundImage from "media/lp-four/portfolioBg.png"
import Ellipse from "media/lp-four/methods/Ellipse.png"
import Logo1 from "media/lp-four/methods/1.png"
import Logo2 from "media/lp-four/methods/2.png"
import Logo3 from "media/lp-four/methods/3.png"
import Logo4 from "media/lp-four/methods/4.png"
import Logo5 from "media/lp-four/methods/5.png"
import Logo6 from "media/lp-four/methods/6.png"
import Logo7 from "media/lp-four/methods/1.svg"
import Logo8 from "media/lp-four/methods/2.svg"
import Logo9 from "media/lp-four/methods/3.svg"
import Logo10 from "media/lp-four/methods/4.svg"
import Logo11 from "media/lp-four/methods/5.svg"
import Logo12 from "media/lp-four/methods/6.svg"
import { MRCTA } from '..';
import { useId, useState } from 'react';
const Methods = () => {
    const [openIndex, setOpenIndex] = useState(3);
    const toggleAccordion = (i) => {
        setOpenIndex(prevIndex => (prevIndex === i ? null : i));
    };
    return (
        <section>
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] relative z-10">
                <Image src={backgroundImage} alt="consultationBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority={true} />
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify text-white mr-xl:w-[65%] mr-lg:w-[75%] mr-md:w-[90%] w-full mx-auto">
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-medium leading-normal mb-3'>Diverse Book Promo Methods</h2>
                        <p className='mr-md:text-base text-sm font-normal leading-normal'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective</p>
                    </div>
                    <div className="grid mr-lg:grid-cols-6 mr-sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-7 mr-md:mt-16 mt-12 w-full mx-auto">
                        {[
                            ["Amazon KDP"],
                            ["Lulu Book Publishing"],
                            ["Walmart"],
                            ["Ingramspark Publishing"],
                            ["Apple Books"],
                            ["Google Books"]
                        ].map(([name], i) => (
                            <div key={useId()} className="text-center">
                                <h4 className={`${openIndex === i ? "border-[#40BEE2] bg-primary-100" : "border-[#707070]"} border-2 text-white py-2 rounded-md mr-2xl:text-base text-sm`}>
                                    <button onClick={() => toggleAccordion(i)}>{name}</button>
                                </h4>
                            </div>
                        ))}
                    </div>
                    {[
                        [Logo12, "Amazon KDP", Logo6, "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. "],
                        [Logo11, "Lulu Book Publishing", Logo5, "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. "],
                        [Logo10, "Walmart", Logo4, "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. "],
                        [Logo7, "Ingramspark Publishing", Logo1, "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. "],
                        [Logo9, "Apple Books", Logo3, "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. "],
                        [Logo8, "Google Books", Logo2, "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. "]
                    ].map(([img, title, textLogos, desc], i) => (
                        <div key={useId()} className={`${openIndex === i ? "grid" : "hidden"} mr-md:grid-cols-2 grid-cols-1 mr-md:gap-x-5 gap-5 items-center mr-lg:mt-[100px] mr-md:mt-[80px] mt-[50px]`}>
                            <div className='text-white'>
                                <div className='flex items-center gap-x-5 mb-4'>
                                    <h3 className="mr-md:text-[30px] text-[20px] leading-normal font-semibold border-s-4 border-primary-100 ps-5">{title}</h3>
                                    <Image src={textLogos} alt='logos' className="block" />
                                </div>
                                <p className="mr-lg:text-base text-sm mr-sm:text-start text-justify leading-normal font-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                                <div className="grid grid-cols-1 mr-sm:flex mr-sm:gap-x-5 gap-5 mt-8">
                                    <MRCTA text="Connect With Us!" classes="__animatedPing hover:bg-transparent hover:border-black" />
                                    <MRCTA text="Call Us Now!" classes="__animatedPing bg-white !border-black !text-black hover:bg-black hover:!text-white hover:border-black" />
                                </div>
                            </div>
                            <div className='relative'>
                                <Image src={Ellipse} alt="books" className="block mx-auto" />
                                <Image src={img} alt='logos' className='absolute top-[40%] mr-lg:w-max mr-sm:w-[300px] w-[250px] h-auto bottom-0 left-0 right-0 z-10 block mx-auto' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Methods;