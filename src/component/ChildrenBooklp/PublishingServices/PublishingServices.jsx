import React from 'react'
import Image from 'next/image'
import { MRCTA } from '@/component'
// Images
import PublishBg from "media/children-book-lp/publish-bg.png"
import sun from "media/children-book-lp/sun.svg"
import BlueParticle from "media/children-book-lp/heading-particle.png"
import WhiteParticle from "media/children-book-lp/heading-particle2.png"
import PublishParticle from "media/children-book-lp/publishParticle.svg"

const PublishingServices = () => {
    const cardData = [
        {
            title: "Print-On-Demand Publishing",
            desc: "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book",
            image: BlueParticle
        },
        {
            title: "Vanity Publishing",
            desc: "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book",
            image: WhiteParticle
        },
        {
            title: "Self-Publishing",
            desc: "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book",
            image: BlueParticle
        },
        {
            title: "Standard Publishing",
            desc: "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book",
            image: WhiteParticle
        },
        {
            title: "Hybrid Publishing",
            desc: "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book",
            image: BlueParticle
        },
        {
            title: "E-Book Publishing",
            desc: "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book",
            image: WhiteParticle
        },
    ]
    return (
        <section className='relative pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px]'>
            <Image src={PublishBg} alt='Casestudy' fill={true} className='object-center object-cover -z-10' />
            <div className="absolute left-0 top-[60px] mr-sm:block hidden">
                <Image src={PublishParticle} alt='BSP' />
            </div>
            <div className="mr-container relative">
                <div className="absolute mr-sm:block hidden right-0 mr-lg:right-[30px] mr-xl:right-[70px] top-[-60px] mr-lg:top-[-20px] ">
                    <Image src={sun} alt='Sun' className='mr-lg:w-10/12 animate-pulse' />
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mb-3 text-center text-white'>
                            Types Of <span className='text-[#40BEE2] font-normal'>Publishing </span> Services We Offer
                        </h2>
                        <p className='mr-md:text-base text-sm font-normal leading-normal text-white text-center mr-lg:w-9/12 mr-xl:w-6/12 mx-auto pb-8 mr-xl:pb-14'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 mr-sm:gap-x-7 gap-y-12">
                    {cardData.map((data, index) => (
                        <div className="col-span-12 mr-md:col-span-6 mr-lg:col-span-4" key={index}>
                            <div className="card">
                                <div className="relative mb-4 py-7 mr-sm:py-9 mr-md:py-4 mr-xl:py-3 mr-2xl:py-2">
                                    <Image src={data.image} alt='Casestudy' fill={true} className='object-center object-contain mr-xs:object-cover -z-10' />
                                    <h2 className='text-center text-[20px] font-semibold leading-[0px] mr-sm:leading-[30px] mr-xl:leading-[50px] mr-2xl:leading-[70px]'>{data.title}</h2>
                                </div>
                                <div className="bg-[#282828] rounded-[15px] py-5 px-[15px] min-h-[200px] flex items-center justify-center">
                                    <p className='text-center mr-md:text-[14px] text-sm font-normal leading-[25px] px-[6px] text-white'>{data.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mt-5 mr-lg:mt-10">
                    <MRCTA text="Connect With Us!" handle="onclick='parent.LC_API.open_chat_window();return false;'" classes="__animatedPing !rounded-[6px] hover:bg-transparent hover:border-white" />
                    <MRCTA text="Call Us Now!" link="tel:800-781-9093" classes="__animatedPing !rounded-[6px] bg-transparent !border-0 hover:bg-black !bg-white !text-black hover:border-black" />
                </div>
            </div>
        </section>
    )
}

export default PublishingServices
