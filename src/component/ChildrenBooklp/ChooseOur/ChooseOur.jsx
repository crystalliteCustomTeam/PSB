import React from 'react'
import Image from 'next/image'
import { MRCTA } from '@/component'
// Images
import Choose1 from "media/children-book-lp/choose1.svg"
import Choose2 from "media/children-book-lp/choose2.svg"
import Choose3 from "media/children-book-lp/choose3.svg"
import Choose4 from "media/children-book-lp/choose4.svg"
import Particle1 from "media/children-book-lp/choose-particle-1.svg"
import Particle2 from "media/children-book-lp/choose-particle-2.svg"

const ChooseOur = () => {
    return (
        <section className='pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px] bg-[#F3F3F3]'>
            <div className="mr-container relative">
                <div className="absolute right-[30px] top-[50px] mr-2xl:block hidden">
                    <Image src={Particle1} alt='BSP' />
                </div>
                <div className="absolute left-[-30px] top-0 mr-lg:top-[50px] mr-sm:block hidden">
                    <Image src={Particle2} alt='BSP' />
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mb-3 text-center text-black'>Why <span className='text-[#40BEE2] font-normal'>Choose</span> Our Book <span className='text-[#40BEE2] font-normal'>Publishing</span> Company?</h2>
                        <p className='mr-md:text-base text-sm font-normal leading-normal text-black text-center mr-lg:w-11/12 mr-xl:w-8/12 mx-auto pb-8 mr-xl:pb-20'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mr-lg:gap-0">
                    <div className="col-span-12 mr-md:col-span-6 mr-lg:col-span-3">
                        <div className="card px-3 mr-2xl:px-5 py-5 mr-2xl:py-10 duration-700 ease-in-out hover:bg-white border-2 mr-lg:border-r-0 rounded-r-[15px] mr-lg:rounded-r-[0px] rounded-l-[15px] border-[#40BEE2]">
                            <Image src={Choose1} alt='Services' className='mx-auto' />
                            <h3 className='text-[20px] leading-[30px] font-medium text-center py-6'>Timely Delivery</h3>
                            <p className='mr-md:text-base text-sm font-normal leading-normal text-center pb-8'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.</p>
                        </div>
                    </div>
                    <div className="col-span-12 mr-md:col-span-6 mr-lg:col-span-3">
                        <div className="card px-3 mr-2xl:px-5 py-5 mr-2xl:py-10 duration-700 ease-in-out hover:bg-white border-2 mr-lg:border-r-0 rounded-l-[15px] mr-lg:rounded-l-[0px] rounded-r-[15px] mr-lg:rounded-r-[0px] border-[#40BEE2]">
                            <Image src={Choose2} alt='Services' className='mx-auto' />
                            <h3 className='text-[20px] leading-[30px] font-medium text-center py-6'>Timely Delivery</h3>
                            <p className='mr-md:text-base text-sm font-normal leading-normal text-center pb-8'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.</p>
                        </div>
                    </div>
                    <div className="col-span-12 mr-md:col-span-6 mr-lg:col-span-3">
                        <div className="card px-3 mr-2xl:px-5 py-5 mr-2xl:py-10 duration-700 ease-in-out hover:bg-white border-2 mr-lg:border-r-0 rounded-l-[15px] mr-lg:rounded-l-[0px] rounded-r-[15px] mr-lg:rounded-r-[0px] border-[#40BEE2]">
                            <Image src={Choose3} alt='Services' className='mx-auto' />
                            <h3 className='text-[20px] leading-[30px] font-medium text-center py-6'>Customer Satisfaction</h3>
                            <p className='mr-md:text-base text-sm font-normal leading-normal text-center pb-8'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.</p>
                        </div>
                    </div>
                    <div className="col-span-12 mr-md:col-span-6 mr-lg:col-span-3">
                        <div className="card px-3 mr-2xl:px-5 py-5 mr-2xl:py-10 duration-700 ease-in-out hover:bg-white border-2 border-[#40BEE2] rounded-l-[15px] mr-lg:rounded-l-[0px] rounded-r-[15px]">
                            <Image src={Choose4} alt='Services' className='mx-auto' />
                            <h3 className='text-[20px] leading-[30px] font-medium text-center py-6'>100% Ownership</h3>
                            <p className='mr-md:text-base text-sm font-normal leading-normal text-center pb-8'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence.</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mt-8 mr-lg:mt-16">
                    <MRCTA text="Connect With Us!" handle="onclick='parent.LC_API.open_chat_window();return false;'" classes="__animatedPing !rounded-[6px]" />
                    <MRCTA text="Call Us Now!" link="tel:800-781-9093" classes="__animatedPing !rounded-[6px] !bg-[#161616] !border-0 hover:bg-black text-white hover:border-black" />
                </div>
            </div>
        </section>
    )
}

export default ChooseOur
