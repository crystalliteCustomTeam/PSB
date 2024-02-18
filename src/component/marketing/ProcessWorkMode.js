
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';


const workMode = () => {




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
            <section className="our-process bg-[#f2f2f2] w-full font-secondary">
                <div className="container max-w-7xl py-24 xs:py-14 text-[#1d1d1f]">
                    <div className="text-center mb-10 justify-center">
                        <h6 className='text-[30px] font-primary capitalize text-[#40BEE2] font-semibold'>
                            Bringing you fame
                        </h6>
                        <h2 className='text-[40px] font-primary font-semibold leading-10 my-5  xs:text-3xl'>
                            The Process of Us Marketing Your Product
                        </h2>
                        <p className='w-[80%] mx-auto md:w-[90%] xs:w-[100%]'>
                            We will discuss below how we get you recognition and fame with the help of our marketing services. Our marketing team is adept at changing situations within the market and capable of utilizing the best practices that lead to the most attention and attraction towards your product, whatever it might be.
                        </p>
                    </div>

                    <div className={`${isLargeScreen ? '' : 'hidden'} grid grid-cols-3 gap-4 md:grid-cols-2 xs:grid-cols-1 md:w-[90%] mx-auto xs:w-[90%]`}>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-white h-[300px]">
                            <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-lg font-semibold font-primary'>Step 01</h5>
                                <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'>Sign Up</h3>
                                <p className='text-[16px] text-[#242424] leading-5'>
                                    You first sign up for our marketing services, be it book promotion, author marketing, or eBook marketing services. You answer these questions in a questionnaire. Once this is done, you will get aligned with one of our sales people who assigns your project to a particular department suited to your needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 h-[300px]">
                            <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold font-primary'>Step 02</h5>
                                <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'>Marketing Review</h3>
                                <p className='text-[16px] text-[#242424] leading-5'>
                                    Our marketing experts then review a marketing strategy to utilize for your goals. This is based on the nature and scope of your project. Everything that follows will vary accordingly. A large project requires more investment and a larger team to cater to your needs..
                                </p>
                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 h-[300px]">
                            <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold font-primary'>Step 03</h5>
                                <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'>Research</h3>
                                <p className='text-[16px] text-[#242424] leading-5'>
                                    We then begin research on the subjects and topics that people are interested in. What are common traits within these topics, such as the covers, titles, and book descriptions? What are the things they try to avoid? These are the questions that we answer during our research phase.
                                </p>
                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 h-[300px]">
                            <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold font-primary'>Step 04</h5>
                                <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'>Target audience selection</h3>
                                <p className='text-[16px] text-[#242424] leading-5'>
                                    Here, we decide who the target audience or demographic will be for your book, the type of product they might like, and how to meet or exceed their expectations.

                                </p>
                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 h-[300px]">
                            <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold font-primary'>Step 05</h5>
                                <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'>Making it look good</h3>
                                <p className='text-[16px] text-[#242424] leading-5'>
                                    Now is the time to work on the book cover. Your cover is the most important piece of marketing of your book, and our cover designers understand this better than anyone else.

                                </p>
                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 h-[300px]">
                            <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold font-primary'>Step 06</h5>
                                <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'> Submitting it for review</h3>
                                <p className='text-[16px] text-[#242424] leading-5'>
                                    Now this is the final stage of the process when we submit it for review and ensure that all the tasks are completed and that your design is perfected. Our team will ensure your success.

                                </p>
                            </div>
                        </div>
                    </div>



                    <div className={`${isLargeScreen ? 'hidden' : ''} grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 sm:items-center xs:items-center xs:grid-cols-1 md:w-[90%] mx-auto sm:px-10 xs:w-[90%]`}>
                        <Slider {...settings}>
                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 h-[300px] hover:text-white">
                                <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-lg font-semibold font-primary'>Step 01</h5>
                                    <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'>Sign Up</h3>
                                    <p className='text-[16px] text-[#242424] leading-5'>
                                        You first sign up for our marketing services, be it book promotion services, author marketing services or eBook marketing services. You answer these questions in a questionnaire. Once this is done you then work with one of our sales people who assigns your project to a particular department suited to your needs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 h-[300px]">
                                <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold font-primary'>Step 02</h5>
                                    <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'>Marketing Review</h3>
                                    <p className='text-[16px] text-[#242424] leading-5'>
                                        Our marketing experts then review a marketing strategy to utilize for your goals, this entirely depends on the nature and scope of your project. Everything that follows through will vary accordingly, a large project might require more investment and a larger team to ensure that your needs are met.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 h-[300px]">
                                <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold font-primary'>Step 03</h5>
                                    <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'>Research</h3>
                                    <p className='text-[16px] text-[#242424] leading-5'>
                                        We then begin research on the subjects and topics that people are interested in, What are common traits within these topics, such as the covers, titles as well as book descriptions. What are the things they try to avoid? These are the questions that we must answer during the research phase.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 h-[300px]">
                                <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold font-primary'>Step 04</h5>
                                    <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'>Target audience selection</h3>
                                    <p className='text-[16px] text-[#242424] leading-5'>
                                        Now we decide who the target audience or demographic will be for your book, the type of product that they might like. And how to meet or exceed their expectations.

                                    </p>
                                </div>
                            </div>
                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 h-[300px]">
                                <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold font-primary'>Step 05</h5>
                                    <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'>Making it look good</h3>
                                    <p className='text-[16px] text-[#242424] leading-5'>
                                        Now is the time to work on the book cover, your cover is the most important piece of marketing in your book and our cover designers understand this better than anyone else ever could.

                                    </p>
                                </div>
                            </div>
                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 h-[300px]">
                                <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-10 px-8 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <h5 className='text-[#d9d9d9] hover:text-[#00C0E4] text-xl font-semibold font-primary'>Step 06</h5>
                                    <h3 className='text-[20px] text-xl my-2 font-semibold font-primary'> Submitting it for review</h3>
                                    <p className='text-[16px] text-[#242424] leading-5'>
                                        Now this is the final stage of the process when we submit it for review and ensure that all the tasks are completed and that your design is perfected. Our team will ensure your success.

                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>


                </div>
            </section>
            <section>

            </section>
        </>


    )
}

export default workMode
