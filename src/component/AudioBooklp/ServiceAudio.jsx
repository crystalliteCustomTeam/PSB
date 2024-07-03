import React from 'react'
import Image from 'next/image';
import { MRCTA } from '..';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service1 from "media/assets/audiobook/services-1.png"
import Service2 from "media/assets/audiobook/services-2.png"
import Service3 from "media/assets/audiobook/services-3.png"
import Service4 from "media/assets/audiobook/services-4.png"
import Service5 from "media/assets/audiobook/services-5.png"
import Service6 from "media/assets/audiobook/services-6.png"
import Service7 from "media/assets/audiobook/services-7.png"
import Service8 from "media/assets/audiobook/services-8.png"
import Service9 from "media/assets/audiobook/services-9.png"

const ServiceAudio = () => {
    let servicesSlider = {
        dots: false,
        arrows: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className='pt-[80px] mr-lg:pb-[100px]'>
            <div className="mr-container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="txt text-center">
                            <h2 className='text-[25px] mr-md:text-[30px] mr-lg:text-[40px] font-[600] mr-md:leading-[70px] secondary'>Services Audio Books</h2>
                            <p className='text-[14px] mr-md:text-[16px] leading-[26px] font-[300] secondary pb-7 mr-lg:pb-10 mr-xl:mr-5 mr-xl:pr-5'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost <br className='mr-xl:w-7/12 mx-auto' /> your literal presence. Our seasoned marketing professionals expertly employ advanced,</p>
                        </div>
                        <Slider {...servicesSlider} className='servicesSlider'>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#40BEE2] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[500px] flex flex-col justify-between">
                                        <div>
                                            <div className="cardimage w-2/12">
                                                <Image src={Service1} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div>
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Social Media Marketing</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Call Us Now!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#40BEE2] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[500px] flex flex-col justify-between">
                                        <div>
                                            <div className="cardimage w-2/12">
                                                <Image src={Service2} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div>
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Audio Book Voice-Over & Editing</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Call Us Now!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#40BEE2] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[500px] flex flex-col justify-between">
                                        <div>
                                            <div className="cardimage w-2/12">
                                                <Image src={Service3} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div>
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Custom Website</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Call Us Now!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#40BEE2] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[500px] flex flex-col justify-between">
                                        <div>
                                            <div className="cardimage w-2/12">
                                                <Image src={Service4} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div>
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>SEO</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Call Us Now!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#40BEE2] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[500px] flex flex-col justify-between">
                                        <div>
                                            <div className="cardimage w-2/12">
                                                <Image src={Service5} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div>
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Online Reputation Management</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Call Us Now!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#40BEE2] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[500px] flex flex-col justify-between">
                                        <div>
                                            <div className="cardimage w-2/12">
                                                <Image src={Service6} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div>
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Paid Marketing</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Call Us Now!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#40BEE2] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[500px] flex flex-col justify-between">
                                        <div>
                                            <div className="cardimage w-2/12">
                                                <Image src={Service7} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div>
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Audio Book Distribution</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Call Us Now!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#40BEE2] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[500px] flex flex-col justify-between">
                                        <div>
                                            <div className="cardimage w-2/12">
                                                <Image src={Service8} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div>
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Influencer Collaboration</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Call Us Now!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#40BEE2] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[500px] flex flex-col justify-between">
                                        <div>
                                            <div className="cardimage w-2/12">
                                                <Image src={Service9} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div>
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Search Engine Marketing</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Call Us Now!
                                                </Link>
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

export default ServiceAudio