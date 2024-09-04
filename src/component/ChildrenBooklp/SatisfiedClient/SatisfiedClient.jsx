import Image from 'next/image'
import { MRCTA } from '@/component'
import React from 'react'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Images
import PublishBg from "media/children-book-lp/publish-bg.png"
import sun from "media/children-book-lp/sun.svg"
import PublishParticle from "media/children-book-lp/publishParticle.svg"
import googleReview from "media/children-book-lp/google-review-new.svg"
import trustpilot from "media/children-book-lp/trustpilot-review-new.svg"
import Client1 from "media/children-book-lp/client-1.svg"
import Star from "media/children-book-lp/star.svg"

const SatisfiedClient = () => {
    const sliderData = [
        {
            desc: 'Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish.',
            clientName: 'Jason Taylor -',
            clientLocation: 'Las Vegas, Nevada',
            clientImage: Client1,
        },
        {
            desc: 'Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish.',
            clientName: 'Jason Taylor -',
            clientLocation: 'Las Vegas, Nevada',
            clientImage: Client1,
        },
        {
            desc: 'Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish.',
            clientName: 'Jason Taylor -',
            clientLocation: 'Las Vegas, Nevada',
            clientImage: Client1,
        },
    ]
    // Slider Setting
    const clientSlider = {
        arrows: true,
        autoplay: true, 
        autoplaySpeed: 3000,
        slidesToShow: 1,
        fade: true,
    };
    return (
        <section className='relative pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px]'>
            <Image src={PublishBg} alt='Casestudy' fill={true} className='object-center object-cover -z-10' />
            <div className="absolute left-0 top-[60px] mr-lg:block hidden">
                <Image src={PublishParticle} alt='BSP' />
            </div>
            <div className="mr-container relative">
                <div className="absolute mr-sm:block hidden right-0 mr-lg:right-[30px] mr-xl:right-[70px] top-[-60px] mr-lg:top-[-20px] ">
                    <Image src={sun} alt='Sun' className='mr-lg:w-10/12 animate-pulse' />
                </div>
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 mr-lg:col-span-6">
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mb-3 text-white'>
                            Satisfied <span className='text-[#40BEE2] font-normal'>Client's</span>
                        </h2>
                        <p className='mr-md:text-base text-sm font-normal leading-normal text-white pb-8'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced</p>
                        <div className="btn">
                            <MRCTA text="Connect With Us!" handle="onclick='parent.LC_API.open_chat_window();return false;'" classes="__animatedPing !rounded-[6px] hover:bg-transparent hover:border-white" />
                        </div>

                        <div className="flex items-center justify-between gap-5 mr-lg:w-10/12 mt-12">
                            <Image src={googleReview} alt='Google Review' className='w-[35%] mr-sm:w-auto'/>
                            <Image src={trustpilot} alt='Trustpilot' className='w-[35%] mr-sm:w-auto'/>
                        </div>
                    </div>
                    <div className="col-span-12 mr-lg:col-span-6">
                        <Slider {...clientSlider} className='childrenClientSlider'>
                            {sliderData.map((data, index) => (
                                <div key={index}>
                                    <div className="card mr-lg:w-10/12 mr-xl:w-8/12 mr-2xl:w-7/12 mx-auto p-4 mr-sm:p-7 relative before:content-[''] before:absolute before:top-[25px] mr-sm:before:top-[25px] mr-lg:before:top-[20px] before:left-[50%] before:translate-x-[-50%] before:h-[86%] mr-lg:before:h-[425px] before:w-[93%] mr-lg:before:w-[350px] before:mx-auto before:bg-[#454545d8] before:z-[-1] before:rounded-[15px] before:rotate-[-5deg] mr-lg:before:rotate-[-8deg] after:content-[''] after:absolute after:top-[25px] mr-sm:after:top-[25px] mr-lg:after:top-[20px] after:left-[50%] after:translate-x-[-50%] after:h-[86%] mr-lg:after:h-[420px] after:w-[93%] mr-lg:after:w-[350px] after:mx-auto after:bg-[#454545] after:z-[-1] after:rounded-[15px] after:rotate-[5deg] mr-lg:after:rotate-[8deg]">
                                        <div className="bg-white pt-5 pb-10 min-h-[180px] mr-lg:min-h-[300px] px-5 rounded-t-[15px]">
                                            <p className='text-[18px] leading-[35px] font-normal mr-sm:pr-[20px]'>{data.desc}</p>
                                        </div>
                                        <div className="bg-[#40BEE2] py-7 px-7 rounded-b-[15px] flex items-center justify-between">
                                            <div className='flex items-center gap-x-4'>
                                                <div>
                                                    <Image src={data.clientImage} alt='CLient 1' />
                                                </div>
                                                <div>
                                                    <h6 className='text-white text-[18px] leading-[24px] font-normal'>{data.clientName}</h6>
                                                    <p className='text-white text-[16px] leading-[19px] font-normal'>{data.clientLocation}</p>
                                                </div>
                                            </div>
                                            <div className='flex items-end space-x-1'>
                                                <Image src={Star} alt='BSP' className='invert-[1] brightness-0' />
                                                <span className='text-white text-[11px] font-bold mt-[10px]'>4.7</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SatisfiedClient
