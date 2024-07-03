import React from 'react'
import { MRCTA } from '..'
import Image from 'next/image'
// Images
import Audio1 from "media/assets/audiobook/audio-book-1.png"
import Audio2 from "media/assets/audiobook/audio-book-2.png"
import Audio3 from "media/assets/audiobook/audio-book-3.png"
import playIcon from "media/assets/audiobook/playIcon.png"
import Link from 'next/link'

const AudioBooks = () => {
    return (
        <section className='bg-[#F3F3F3] py-[50px] mr-md:py-[80px]'>
            <div className="mr-container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="flex-col mr-lg:flex-row flex items-center justify-between pb-5">
                            <div className="txt">
                                <h2 className='text-[25px] mr-md:text-[30px] mr-lg:text-[40px] font-[600] mr-md:leading-[70px] secondary pb-2'>Discover the Best Audio Books</h2>
                                <p className='text-[14px] mr-md:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-4 mr-xl:mr-5 mr-xl:pr-5'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost <br className='mr-lg:block hidden' /> your literal presence. Our seasoned marketing professionals expertly employ advanced,</p>
                            </div>
                            <div className="btn mr-auto mr-lg:mr-0 mr-lg:ml-auto block">
                                <div className="w-full mr-md:w-max">
                                    <MRCTA classes="mt-5 w-full !px-12 !font-medium secondary" animation="__animatedPing" text="View All" />
                                </div>
                            </div>
                        </div>
                        <div className="books border-t-2 pt-6 pb-6 flex items-center gap-y-10">
                            <div className="image !w-full mr-md:!w-[35%] mr-lg:!w-[26%] mr-xl:!w-[20%] mr-2xl:!w-[17%] !p-0 relative">
                                <Image src={Audio1} alt='PSB' />
                                <Link href="javascript:;" className="cursor-pointer playIcon absolute right-[20px] top-0 mr-md:hidden block">
                                    <Image src={playIcon} alt='PSB' width={60} height={60} className='ml-auto' />
                                </Link>
                            </div>
                            <div className="content w-full mr-md:w-[70%] mr-lg:w-[65%]">
                                <div className="flex items-center gap-x-14">
                                    <p className='secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181]'>Podcastermaster</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex align-items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">30 min</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex align-items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">Episode 08</p>
                                </div>
                                <h3 className='text-[25px] leading-[45px] font-semibold pb-2'>Dance Two Hearts</h3>
                                <p className='text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2 mr-xl:mr-5 mr-xl:pr-5'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                <div className="btn">
                                    <div className="w-full mr-md:w-max">
                                        <MRCTA classes="mt-5 w-full !font-[300] secondary" animation="__animatedPing" text="Connect With Us!" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[10%] mr-md:block hidden mr-lg:w-[18%]'>
                                <Image src={playIcon} alt='PSB' width={60} height={60} className='ml-auto' />
                            </div>
                        </div>
                        <div className="books border-t-2 pt-6 pb-6 flex items-center gap-y-10">
                            <div className="image !w-full mr-md:!w-[35%] mr-lg:!w-[26%] mr-xl:!w-[20%] mr-2xl:!w-[17%] !p-0 relative">
                                <Image src={Audio2} alt='PSB' />
                                <Link href="javascript:;" className="cursor-pointer playIcon absolute right-[20px] top-0 mr-md:hidden block">
                                    <Image src={playIcon} alt='PSB' width={60} height={60} className='ml-auto' />
                                </Link>
                            </div>
                            <div className="content w-full mr-md:w-[70%] mr-lg:w-[65%]">
                                <div className="flex items-center gap-x-14">
                                    <p className='secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181]'>Podcastermaster</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex align-items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">30 min</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex align-items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">Episode 08</p>
                                </div>
                                <h3 className='text-[25px] leading-[45px] font-semibold pb-2'>The Haunting Of Blackwood House</h3>
                                <p className='text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2 mr-xl:mr-5 mr-xl:pr-5'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                <div className="btn">
                                    <div className="w-full mr-md:w-max">
                                        <MRCTA classes="mt-5 w-full !font-[300] secondary" animation="__animatedPing" text="Connect With Us!" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[10%] mr-md:block hidden mr-lg:w-[18%]'>
                                <Image src={playIcon} alt='PSB' width={60} height={60} className='ml-auto' />
                            </div>
                        </div>
                        <div className="books border-t-2 pt-6 pb-6 flex items-center gap-y-10">
                            <div className="image !w-full mr-md:!w-[35%] mr-lg:!w-[26%] mr-xl:!w-[20%] mr-2xl:!w-[17%] !p-0 relative">
                                <Image src={Audio3} alt='PSB' />
                                <Link href="javascript:;" className="cursor-pointer playIcon absolute right-[20px] top-0 mr-md:hidden block">
                                    <Image src={playIcon} alt='PSB' width={60} height={60} className='ml-auto' />
                                </Link>
                            </div>
                            <div className="content w-full mr-md:w-[70%] mr-lg:w-[65%]">
                                <div className="flex items-center gap-x-14">
                                    <p className='secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181]'>Podcastermaster</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex align-items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">30 min</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex align-items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">Episode 08</p>
                                </div>
                                <h3 className='text-[25px] leading-[45px] font-semibold pb-2'>The Story Of A Lifetime</h3>
                                <p className='text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2 mr-xl:mr-5 mr-xl:pr-5'>Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost effectiveness.</p>
                                <div className="btn">
                                    <div className="w-full mr-md:w-max">
                                        <MRCTA classes="mt-5 w-full !font-[300] secondary" animation="__animatedPing" text="Connect With Us!" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[10%] mr-md:block hidden mr-lg:w-[18%]'>
                                <Image src={playIcon} alt='PSB' width={60} height={60} className='ml-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AudioBooks
