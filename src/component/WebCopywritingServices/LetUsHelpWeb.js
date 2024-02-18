
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';

const LetUsHelpWeb = () => {
    var settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
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
                    slidesToShow: 1, // Display 1 column at this breakpoint
                    slidesToScroll: 1, // Scroll 1 column at this breakpoint
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
            <section className="py-20 relative md:py-10">
                <div className='flex sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 xs:px-8 '   >
                    <div className='basis-[50%] md:items-center md:py-10'>
                        <Image quality={95} width={1000} height={100} className=' hover:-translate-y-1 hover:scale-105' src='/assets/images/newimg/communicate.png' alt='communicate' />
                    </div>
                    <div className='w-[60%] sm:w-[100%] xs:w-[100%] col-span-1'>
                        <div className='py-10 md:py-0 xs:py-5 sm:px-10 sm:text-center'>
                            <h6 className='text-[30px] font-primary text-[#40BEE2] font-semibold'>Communicate</h6>
                            <h1 className='font-primary font-bold leading-[60px] text-[40px] md:leading-tight md:text-2xl sm:text-4xl sm:py-5  xs:text-3xl xs:w-[100%] '>
                                Your Brand’s Message Efficiently
                            </h1>
                            <p className='w-[70%] md:w-[90%] sm:w-[100%] xs:w-[95%] xs:py-3'>
                                Our professional SEO writers produce keyword-rich content to help you beat the competition, bringing in the high ranking needed to elevate your website for better outreach, branding, and visibility.
                            </p>
                            <div className='w-[40%] md:w-[70%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 sm:mx-auto sm:w-[80%] xs:w-[90%]'>
                                <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                                <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container max-w-7xl lg:max-w-6xl relative z-10 font-secondary">
                    <div className={`${isLargeScreen ? '' : 'hidden'} grid w-[90%] mx-auto md:grid-cols-2 grid-cols-3 gap-4 mt-6 items-stretch justify-stretch xs:grid-cols-1 xs:px-5 md:px-5`}>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Original Key-word <br></br> Optimized content</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Content Writing<br></br> and Editing Services</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Professional Writers <br></br> trained in SEO</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Easy-to-use <br></br> platform </h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Topic<br></br> Ideation</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Creative <br></br> Out-of-the-box taglines</h4>
                            </div>
                        </div>
                    </div>



                    <div className={`${isLargeScreen ? 'hidden' : ''} grid w-[90%] mx-auto md:grid-cols-2 grid-cols-3 gap-4 mt-6 items-stretch justify-stretch sm:grid-cols-1 sm:px-5 xs:grid-cols-1 xs:px-5 md:px-5`}>
                        <Slider {...settings}>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Original Key-word <br></br> Optimized content</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Content Writing<br></br> and Editing Services</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Professional Writers <br></br> trained in SEO</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Easy-to-use <br></br> platform </h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Topic<br></br> Ideation</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Creative <br></br> Out-of-the-box taglines</h4>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>

    )
}

export default LetUsHelpWeb
