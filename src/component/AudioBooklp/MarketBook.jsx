import React from 'react'
import Image from 'next/image';
import { MRCTA, MRCTAGroup } from "@/component";
// Images
import formParticle from "media/assets/audiobook/form-particle.png"

const MarketBook = () => {
    return (
        <section className='py-[50px] mr-lg:py-[80px] '>
            <div className='mr-container'>
                <div className='grid grid-cols-12 items-center gap-y-5'>
                    <div className='col-span-12 mr-lg:col-span-6'>
                        <div className="txt">
                            <h2 className='text-[25px] mr-md:text-[30px] mr-lg:text-[40px] font-[600] mr-md:leading-[70px] secondary pb-2'>How We Market Your Book?</h2>
                            <p className='text-[14px] mr-md:text-[16px] leading-[26px] font-[300] secondary pb-4 mr-xl:mr-5 mr-xl:pr-5'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing.</p>
                            <div className='pb-3'>
                                <div className="w-full mr-md:w-max">
                                    <MRCTA classes="mt-5 w-full !font-medium secondary" animation="__animatedPing" text="Book An Appointment" />
                                </div>
                            </div>
                            <div className='flex flex-wrap align-items-center gap-y-4 gap-x-3 mr-md:gap-x-0 justify-between mt-5 pt-5'>
                                <div className="flex align-items-center gap-x-2 mr-md:gap-x-4">
                                    <div className="number">
                                        <span className='mr-md:text-[25px] mr-lg:text-[40px] mr-lg:leading-[48px] font-bold secondary'>10</span>
                                    </div>
                                    <div className="txt">
                                        <p className='text-[#A2A2A2] text-[14px] mr-md:text-[16px] leading-[25px] secondary font-[300]'>Years Of <br className='mr-lg:block hidden' />
                                            Experience</p>
                                    </div>
                                </div>
                                <div className="flex align-items-center gap-x-2 mr-md:gap-x-4 relative mr-xl:before:content-[''] mr-xl:before:absolute mr-xl:before:bg-[#6DDEFF] mr-xl:before:w-[15px] mr-xl:before:h-[15px] mr-xl:before:rounded-full mr-xl:before:border-4 mr-xl:before:border-[#40BEE2] mr-xl:before:top-[50%] mr-xl:before:translate-y-[-50%] mr-xl:before:left-[-25%]">
                                    <div className="number">
                                        <span className='mr-md:text-[25px] mr-lg:text-[40px] mr-lg:leading-[48px] font-bold secondary'>474</span>
                                    </div>
                                    <div className="txt">
                                        <p className='text-[#A2A2A2] text-[14px] mr-md:text-[16px] leading-[25px] secondary font-[300]'>Published <br className='mr-lg:block hidden' />
                                            Last 12 Months</p>
                                    </div>
                                </div>
                                <div className="flex align-items-center gap-x-2 mr-md:gap-x-4 relative mr-xl:before:content-[''] mr-xl:before:absolute mr-xl:before:bg-[#6DDEFF] mr-xl:before:w-[15px] mr-xl:before:h-[15px] mr-xl:before:rounded-full mr-xl:before:border-4 mr-xl:before:border-[#40BEE2] mr-xl:before:top-[50%] mr-xl:before:translate-y-[-50%] mr-xl:before:left-[-40%]">
                                    <div className="number">
                                        <span className='mr-md:text-[25px] mr-lg:text-[40px] mr-lg:leading-[48px] font-bold secondary'>39</span>
                                    </div>
                                    <div className="txt">
                                        <p className='text-[#A2A2A2] text-[14px] mr-md:text-[16px] leading-[25px] secondary font-[300]'>Published <br className='mr-lg:block hidden' />
                                            Last Month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg:col-span-1"></div>
                    <div className='col-span-12 mr-lg:col-span-5'>
                        <div className="form relative bg-white shadow-2xl py-[20px] mr-md:py-[40px] pl-[45px] pr-[20px] mr-md:pr-[35px] z-0">
                            <div className="image absolute top-0 left-[-32px]">
                                <Image src={formParticle} alt='PSB' />
                            </div>
                            <h3 className='text-center text-[23px] mr-md:text-[30px] leading-[40px] mr-md:leading-[70px] secondary font-[600]'>Request A <span className='text-[#40BEE2]'>Free</span> Quote</h3>
                            <p className='text-center text-[14px] mr-md:text-[16px] secondary mr-md:leading-[25px] pb-8'>Cost-effectiveness. Consumer-centric—the crudity of <br className='mr-lg:block hidden' /> book marketing, delivered!</p>
                            <form action="javascript:;" className='relative z-[999]'>
                                <input type="text" placeholder='Full Name *' className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />
                                <input type="text" placeholder='Email * ' className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />
                                <input type="text" placeholder='Phone *' className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />
                                <textarea type="text" placeholder='Message' className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[116px] w-full rounded-[6px] px-4 py-2 resize-none mb-4 focus:outline-0'></textarea>
                                <button className='w-full h-[45px] rounded-[6px] bg-[#2E2E2E] text-white secondary font-[300] leading-[20px]'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketBook
