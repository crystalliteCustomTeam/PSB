
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';


const workMode = () => {
    var settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        nextArrow: <Image quality={95} src={'/assets/images/newimg/right-arrow.png'} className='img-fluid' width={500} height={500} alt='sliderarrow' />,
        prevArrow: <Image quality={95} src={'/assets/images/newimg/prev-arrow.png'} className='img-fluid' width={500} height={500} alt='sliderarrow' />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3, // Display 2 columns at this breakpoint
                    slidesToScroll: 3, // Scroll 2 columns at this breakpoint
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Display 1 column at this breakpoint
                    slidesToScroll: 2, // Scroll 1 column at this breakpoint
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1, // Display 1 column at this breakpoint
                    slidesToScroll: 1, // Scroll 1 column at this breakpoint
                }
            }
        ]
    };

    // Initialize state for screen size
    const [isLargeScreen, setIsLargeScreen] = useState(true); // Default to true for larger screens

    // Function to update the screen size state
    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 768); // Customize the breakpoint as needed
    };

    // Add an event listener to update the screen size state on resize
    useEffect(() => {
        updateScreenSize(); // Initial call

        const handleResize = () => {
            updateScreenSize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            // Clean up the event listener
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <section className="our-process bg-[#f2f2f2] bg-cover bg-no-repeat w-full font-secondary">
                <div className="container max-w-7xl lg:max-w-6xl py-24 xs:py-10 text-[#1d1d1f]">
                    <div className="text-center mb-14 justify-center">
                        <h6 className='text-[30px] text-[#40BEE2] font-primary font-semibold mb-2'>
                            Carrying out
                        </h6>
                        <h2 className='text-[45px] font-bold font-primary leading-tight mt-3 mb-3 sm:text-[30px] xs:text-[30px]'>
                            The Fastest Work Mode, Get Your<br /> Work in 4 Easy Steps
                        </h2>
                        <p className='w-[54%] mx-auto md:w-[90%] sm:w-[80%] xs:w-[100%] xs:px-5'>
                            Working with us gives you prompt delivery of work because we have set up everything systematically. Here is our 4 step process, which keeps us streamlined from the beginning.
                        </p>
                    </div>

                    <div className={`grid grid-cols-4 grid-rows-1 ${isLargeScreen ? '' : 'hidden'}  gap-4 md:grid-cols-2 md:w-[90%] mx-auto`}>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-16 px-4 border-0 border-solid transition-[.5s] hover:bg-[#00c0e4] hover:border-white">
                                <h5 className='text-[#d9d9d9] text-xl font-semibold mb-3'>Step 01</h5>
                                <p className='text-[25px] font-primary text-[#242424] font-semibold leading-tight m-0 mb-3 transition-[.5s all]'>
                                Submit Your Manuscript
                                    <span className='block text-[16px] leading-5 mt-3'>
                                    Send us your manuscript to get started.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-16 px-4 border-0 border-solid transition-[.5s] hover:bg-[#00c0e4] hover:border-white">
                                <h5 className='text-[#d9d9d9] text-xl font-semibold mb-3'>Step 02</h5>
                                <p className='text-[25px] font-primary text-[#242424] font-semibold leading-tight m-0 transition-[.5s all]'>
                                Edit & Design
                                    <span className='block text-[16px] leading-5 mt-3'>
                                    We refine your text and design your book's cover.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-16 px-4 border-0 border-solid transition-[.5s] hover:bg-[#00c0e4] hover:border-white">
                                <h5 className='text-[#d9d9d9] text-xl font-semibold mb-3'>Step 03</h5>
                                <p className='text-[25px] font-primary text-[#242424] font-semibold leading-tight m-0 transition-[.5s all]'>
                                Review & Approve
                                    <span className='block text-[16px] leading-5 mt-3'>
                                    You review our work and give the green light.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-16 px-4 border-0 border-solid transition-[.5s] hover:bg-[#00c0e4] hover:border-white">
                                <h5 className='text-[#d9d9d9] text-xl font-semibold mb-3'>Step 04</h5>
                                <p className='text-[25px] font-primary text-[#242424] font-semibold leading-tight m-0 transition-[.5s all]'>
                                Publish & Distribute
                                    <span className='block text-[16px] leading-5 mt-3'>
                                    Your book is published and distributed on schedule.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className={`grid w-[80%] mx-auto ${isLargeScreen ? 'hidden' : ''} grid-cols-3 md:w-[80%] md:grid-cols-1 sm:grid-cols-1 gap-4 mt-12 items-stretch justify-stretch xs:grid-cols-1 xs:px-0 md:px-0`}>
                        <Slider {...settings}>
                            <div className="col-md h-[340px] hover:-translate-y-1 hover:scale-95 duration-300 ">
                                <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-24 px-7 md:py-24 md:px-10 border-0 border-solid transition-[.5s] hover:bg-[#00c0e4] hover:border-white">
                                    <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold mb-3'>Step 01</h5>
                                    <p className='text-[19px] text-[#242424] font-semibold leading-6 m-0 mb-3 transition-[.5s all]'>
                                        Place Your Order

                                        <span className='block text-[16px] leading-5 mt-3'>
                                            This is where you place your order once you’ve made up your mind.
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md h-[340px] hover:-translate-y-1 hover:scale-95 duration-300">
                                <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-24 px-7 md:py-24 md:px-10 border-0 border-solid transition-[.5s] hover:bg-[#00c0e4] hover:border-white">
                                    <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold mb-3'>Step 02</h5>
                                    <p className='text-[19px] text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>

                                        Drafting Outline
                                        <span className='block text-[16px] leading-5 mt-3'>
                                            We draft an outline before commencing your work.
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md h-[340px] hover:-translate-y-1 hover:scale-95 duration-300">
                                <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-24 px-7 md:py-24 md:px-10 border-0 border-solid transition-[.5s] hover:bg-[#00c0e4] hover:border-white">
                                    <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold mb-3'>Step 03</h5>
                                    <p className='text-[19px] text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                        Seeking Your Approval
                                        <span className='block text-[16px] leading-5 mt-3'>
                                            Every task completed reaches you for your approval.
                                        </span>
                                        <br />
                                    </p>
                                </div>
                            </div>
                            <div className="col-md h-[340px] hover:-translate-y-1 hover:scale-95 duration-300">
                                <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-24 px-7 md:py-24 md:px-10 border-0 border-solid transition-[.5s] hover:bg-[#00c0e4] hover:border-white">
                                    <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold mb-3'>Step 04</h5>
                                    <p className='text-[19px] text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                        Timely Deliverance Of Work
                                        <span className='block text-[16px] leading-5 mt-3'>
                                            No matter the deadline, we deliver on time.
                                        </span>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </section>
        </>


    )
}

export default workMode
