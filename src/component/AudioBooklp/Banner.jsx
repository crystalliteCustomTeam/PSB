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
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    arrows: false,
                }
            }
        ]
    };
    return (
        <section className="pt-[30px] pb-[30px] mr-md:pb-0 mr-md:pt-[80px] relative mr-lg:bg-[url('/assets/audiobook/banner-bg.png')] bg-cover bg-no-repeat bg-center mr-lg:mt-[-90px]">
            <div className="mr-container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 mr-lg:col-span-6">
                        <div className="txt pt-[25px] mr-md:pt-[65px] mr-lg:pt-[100px]">
                            <h1 className='text-[35px] mr-md:text-[50px] leading-[50px] mr-md:leading-[70px] secondary font-semibold mb-4'>We Provide Stunning <br className='mr-lg:block hidden' /> Audio Book Production</h1>
                            <p className='text-[14px] mr-md:text-[16px] mr-lg:pr-[140px] pb-3'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. </p>
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
                                <div className="sliderMain pt-8 lg:pt-0 relative mr-lg:h-screen mr-3xl:h-[75vh]">
                                    <div className="image">
                                        <Image src={Book1} alt='PSB' />
                                    </div>
                                    <div className="songName backdrop-blur-sm bg-[#565656]/80 rounded-[15px] w-[65%] mr-md:w-[45%] mr-lg:w-5/12 py-[14px] px-[20px] absolute bottom-[-1%] mr-md:bottom-[0%] lg:bottom-[16%] mr-2xl:bottom-[31%] left-[13px] mr-md:left-[100px] h-[165px]">
                                        <h3 className='text-[20px] leading-[30px] secondary font-medium text-white'>Separate Ways</h3>
                                        <p className='text-[14px] text-[#8D8D8D] font-[300] secondary'>Carole A Lee</p>
                                        <span className="border-4 border-[#8D8D8D] rounded-[10px] w-full block mt-4 relative before:content-[''] before:absolute before:left-[-10px] before:h-[7px] before:bg-white before:w-[65%] before:top-[-4px] before:rounded-[10px]"></span>
                                        <div className="flex items-center justify-center w-full gap-x-3 mt-4">
                                            <div className="prev">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Prev} alt='PSB' width={14} height={15} />
                                                </Link>
                                            </div>
                                            <div className="pause bg-[#40BEE2] rounded-full p-[10px]">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Pause} alt='PSB' width={13} height={15} />
                                                </Link>
                                            </div>
                                            <div className="next">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Next} alt='PSB' width={14} height={15} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="circle backdrop-blur-sm bg-[#565656]/80 rounded-full h-[180px] mr-lg:h-[250px] w-[180px] mr-lg:!w-[250px] absolute left-[50%] bottom-[-1%] lg:bottom-[10%] mr-2xl:bottom-[25%]">
                                        <div className="relative h-full w-full">
                                            <Image src={circle} alt='PSB' className='h-full object-contain w-[85%]' />
                                            <div className="playIcon absolute top-[50%] translate-y-[-50%] left-[51%] translate-x-[-50%]">
                                                <Image src={play} alt='PSB' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sliderMain pt-8 lg:pt-0 relative mr-lg:h-screen mr-3xl:h-[75vh]">
                                    <div className="image">
                                        <Image src={Book2} alt='PSB' />
                                    </div>
                                    <div className="songName backdrop-blur-sm bg-[#565656]/80 rounded-[15px] w-[65%] mr-md:w-[45%] mr-lg:w-5/12 py-[14px] px-[20px] absolute bottom-[-1%] mr-md:bottom-[0%] lg:bottom-[16%] mr-2xl:bottom-[31%] left-[13px] mr-md:left-[100px] h-[165px]">
                                        <h3 className='text-[20px] leading-[30px] secondary font-medium text-white'>A Life Story</h3>
                                        <p className='text-[14px] text-[#8D8D8D] font-[300] secondary'>Carole A Lee</p>
                                        <span className="border-4 border-[#8D8D8D] rounded-[10px] w-full block mt-4 relative before:content-[''] before:absolute before:left-[-10px] before:h-[7px] before:bg-white before:w-[65%] before:top-[-4px] before:rounded-[10px]"></span>
                                        <div className="flex items-center justify-center w-full gap-x-3 mt-4">
                                            <div className="prev">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Prev} alt='PSB' width={14} height={15} />
                                                </Link>
                                            </div>
                                            <div className="pause bg-[#40BEE2] rounded-full p-[10px]">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Pause} alt='PSB' width={13} height={15} />
                                                </Link>
                                            </div>
                                            <div className="next">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Next} alt='PSB' width={14} height={15} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="circle backdrop-blur-sm bg-[#565656]/80 rounded-full h-[180px] mr-lg:h-[250px] w-[180px] mr-lg:!w-[250px] absolute left-[50%] bottom-[-1%] lg:bottom-[10%] mr-2xl:bottom-[25%]">
                                        <div className="relative h-full w-full">
                                            <Image src={circle} alt='PSB' className='h-full object-contain w-[85%]' />
                                            <div className="playIcon absolute top-[50%] translate-y-[-50%] left-[51%] translate-x-[-50%]">
                                                <Image src={play} alt='PSB' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sliderMain pt-8 lg:pt-0 relative mr-lg:h-screen mr-3xl:h-[75vh]">
                                    <div className="image">
                                        <Image src={Book3} alt='PSB' />
                                    </div>
                                    <div className="songName backdrop-blur-sm bg-[#565656]/80 rounded-[15px] w-[65%] mr-md:w-[45%] mr-lg:w-5/12 py-[14px] px-[20px] absolute bottom-[-1%] mr-md:bottom-[0%] lg:bottom-[16%] mr-2xl:bottom-[31%] left-[13px] mr-md:left-[100px] h-[165px]">
                                        <h3 className='text-[20px] leading-[30px] secondary font-medium text-white'>Separate Ways</h3>
                                        <p className='text-[14px] text-[#8D8D8D] font-[300] secondary'>Carole A Lee</p>
                                        <span className="border-4 border-[#8D8D8D] rounded-[10px] w-full block mt-4 relative before:content-[''] before:absolute before:left-[-10px] before:h-[7px] before:bg-white before:w-[65%] before:top-[-4px] before:rounded-[10px]"></span>
                                        <div className="flex items-center justify-center w-full gap-x-3 mt-4">
                                            <div className="prev">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Prev} alt='PSB' width={14} height={15} />
                                                </Link>
                                            </div>
                                            <div className="pause bg-[#40BEE2] rounded-full p-[10px]">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Pause} alt='PSB' width={13} height={15} />
                                                </Link>
                                            </div>
                                            <div className="next">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Next} alt='PSB' width={14} height={15} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="circle backdrop-blur-sm bg-[#565656]/80 rounded-full h-[180px] mr-lg:h-[250px] w-[180px] mr-lg:!w-[250px] absolute left-[50%] bottom-[-1%] lg:bottom-[10%] mr-2xl:bottom-[25%]">
                                        <div className="relative h-full w-full">
                                            <Image src={circle} alt='PSB' className='h-full object-contain w-[85%]' />
                                            <div className="playIcon absolute top-[50%] translate-y-[-50%] left-[51%] translate-x-[-50%]">
                                                <Image src={play} alt='PSB' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sliderMain pt-8 lg:pt-0 relative mr-lg:h-screen mr-3xl:h-[75vh]">
                                    <div className="image">
                                        <Image src={Book1} alt='PSB' />
                                    </div>
                                    <div className="songName backdrop-blur-sm bg-[#565656]/80 rounded-[15px] w-[65%] mr-md:w-[45%] mr-lg:w-5/12 py-[14px] px-[20px] absolute bottom-[-1%] mr-md:bottom-[0%] lg:bottom-[16%] mr-2xl:bottom-[31%] left-[13px] mr-md:left-[100px] h-[165px]">
                                        <h3 className='text-[20px] leading-[30px] secondary font-medium text-white'>Separate Ways</h3>
                                        <p className='text-[14px] text-[#8D8D8D] font-[300] secondary'>Carole A Lee</p>
                                        <span className="border-4 border-[#8D8D8D] rounded-[10px] w-full block mt-4 relative before:content-[''] before:absolute before:left-[-10px] before:h-[7px] before:bg-white before:w-[65%] before:top-[-4px] before:rounded-[10px]"></span>
                                        <div className="flex items-center justify-center w-full gap-x-3 mt-4">
                                            <div className="prev">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Prev} alt='PSB' width={14} height={15} />
                                                </Link>
                                            </div>
                                            <div className="pause bg-[#40BEE2] rounded-full p-[10px]">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Pause} alt='PSB' width={13} height={15} />
                                                </Link>
                                            </div>
                                            <div className="next">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Next} alt='PSB' width={14} height={15} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="circle backdrop-blur-sm bg-[#565656]/80 rounded-full h-[180px] mr-lg:h-[250px] w-[180px] mr-lg:!w-[250px] absolute left-[50%] bottom-[-1%] lg:bottom-[10%] mr-2xl:bottom-[25%]">
                                        <div className="relative h-full w-full">
                                            <Image src={circle} alt='PSB' className='h-full object-contain w-[85%]' />
                                            <div className="playIcon absolute top-[50%] translate-y-[-50%] left-[51%] translate-x-[-50%]">
                                                <Image src={play} alt='PSB' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sliderMain pt-8 lg:pt-0 relative mr-lg:h-screen mr-3xl:h-[75vh]">
                                    <div className="image">
                                        <Image src={Book4} alt='PSB' />
                                    </div>
                                    <div className="songName backdrop-blur-sm bg-[#565656]/80 rounded-[15px] w-[65%] mr-md:w-[45%] mr-lg:w-5/12 py-[14px] px-[20px] absolute bottom-[-1%] mr-md:bottom-[0%] lg:bottom-[16%] mr-2xl:bottom-[31%] left-[13px] mr-md:left-[100px] h-[165px]">
                                        <h3 className='text-[20px] leading-[30px] secondary font-medium text-white'>Separate Ways</h3>
                                        <p className='text-[14px] text-[#8D8D8D] font-[300] secondary'>Carole A Lee</p>
                                        <span className="border-4 border-[#8D8D8D] rounded-[10px] w-full block mt-4 relative before:content-[''] before:absolute before:left-[-10px] before:h-[7px] before:bg-white before:w-[65%] before:top-[-4px] before:rounded-[10px]"></span>
                                        <div className="flex items-center justify-center w-full gap-x-3 mt-4">
                                            <div className="prev">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Prev} alt='PSB' width={14} height={15} />
                                                </Link>
                                            </div>
                                            <div className="pause bg-[#40BEE2] rounded-full p-[10px]">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Pause} alt='PSB' width={13} height={15} />
                                                </Link>
                                            </div>
                                            <div className="next">
                                                <Link href="javascript:;" className='cursor-pointer'>
                                                    <Image src={Next} alt='PSB' width={14} height={15} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="circle backdrop-blur-sm bg-[#565656]/80 rounded-full h-[180px] mr-lg:h-[250px] w-[180px] mr-lg:!w-[250px] absolute left-[50%] bottom-[-1%] lg:bottom-[10%] mr-2xl:bottom-[25%]">
                                        <div className="relative h-full w-full">
                                            <Image src={circle} alt='PSB' className='h-full object-contain w-[85%]' />
                                            <div className="playIcon absolute top-[50%] translate-y-[-50%] left-[51%] translate-x-[-50%]">
                                                <Image src={play} alt='PSB' />
                                            </div>
                                        </div>
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
