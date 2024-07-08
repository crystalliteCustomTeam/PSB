import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { MRCTA } from '..'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import logo1 from "media/assets/audiobook/banner-1.png"
import logo2 from "media/assets/audiobook/banner-2.png"
import logo3 from "media/assets/audiobook/banner-3.png"
import logo4 from "media/assets/audiobook/banner-4.png"
import Book1 from "media/assets/audiobook/banner-book-1.png"
import Book2 from "media/assets/audiobook/banner-book-2.png"
import Book3 from "media/assets/audiobook/banner-book-3.png"
import Book4 from "media/assets/audiobook/banner-book-4.png"
import Prev from "media/assets/audiobook/prev.png"
import Next from "media/assets/audiobook/next.png"
import Pause from "media/assets/audiobook/pause.png"
import play from "media/assets/audiobook/play.png"
import circle from "media/assets/audiobook/circle-bg.png"

const Banner = () => {
    let enlistedslider = {
        dots: false,
        arrows: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            }
        ]
    };
    return (
        <section className="pt-[30px] pb-[30px] mr-md:pt-[80px] mr-lg:bg-[url('/assets/audiobook/banner-bg.png')] bg-cover bg-no-repeat bg-center mr-lg:mt-[-90px]">
            <div className="mr-container">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 mr-lg:col-span-6">
                        <div className="txt">
                            <h1 className='text-[35px] mr-lg:text-[40px] mr-xl:text-[50px] leading-[45px] mr-xl:leading-[50px] mr-md:leading-[70px] secondary font-semibold mb-4'>We Provide Stunning <br className='mr-lg:block hidden' /> Audio Book Production</h1>
                            <p className='text-[14px] mr-md:text-[16px] mr-xl:pr-[140px] pb-3'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-start mr-md:gap-4">
                            <div className="w-full mr-md:w-max">
                                <MRCTA classes="mt-5 w-full !font-medium" animation="__animatedPing" text="Connect With Us!" />
                            </div>
                            <div className="w-full mr-md:w-max">
                                <MRCTA classes="mt-5 w-full !border !border-black bg-transparent !text-black" animation="__animatedPing" text="Call Us Now!" />
                            </div>
                        </div>
                        <div className="flex pt-14 mr-lg:w-[80%]">
                            <div className="image p-0">
                                <Image src={logo1} alt='PSB' width={90} height={25} />
                            </div>
                            <div className="image p-0">
                                <Image src={logo2} alt='PSB' width={135} height={25} />
                            </div>
                            <div className="image p-0">
                                <Image src={logo3} alt='PSB' width={85} height={25} />
                            </div>
                            <div className="image p-0">
                                <Image src={logo4} alt='PSB' width={135} height={25} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 mr-lg:col-span-6">
                        <Slider {...enlistedslider} className='audiobannerSlider relative mr-lg:pt-[50px]'>
                            <div>
                                <div className="sliderMain pt-8 lg:pt-0 relative">
                                    <div className="SliderImage w-[80%] ml-auto">
                                        <Image src={Book1} alt='PSB' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sliderMain pt-8 lg:pt-0 relative">
                                    <div className="SliderImage w-[80%] ml-auto">
                                        <Image src={Book2} alt='PSB' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sliderMain pt-8 lg:pt-0 relative">
                                    <div className="SliderImage w-[80%] ml-auto">
                                        <Image src={Book3} alt='PSB' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sliderMain pt-8 lg:pt-0 relative">
                                    <div className="SliderImage w-[80%] ml-auto">
                                        <Image src={Book1} alt='PSB' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sliderMain pt-8 lg:pt-0 relative">
                                    <div className="SliderImage w-[80%] ml-auto">
                                        <Image src={Book4} alt='PSB' />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
