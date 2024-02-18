import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
const LetUsHelpArticle = () => {
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
                    slidesToShow: 3, // Display 1 column at this breakpoint
                    slidesToScroll: 3, // Scroll 1 column at this breakpoint
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
            <section className="py-[100px] relative sm:py-16 ">
                <div className="container max-w-7xl lg:max-w-6xl relative z-10 font-secondary">
                    <div className="text-center justify-content-center ">
                        <h6 className='text-xl mb-4 font-semibold'>Let Us Help You</h6>
                        <h2 className='text-[40px] font-semibold xs:text-4xl'>What Sets Us Apart?</h2>
                        <p className='max-w-[80%] mx-auto my-5  xs:text-justify sm:text-justify sm:max-w-[90%] xs:max-w-[90%]'>
                            Barnett Ghostwriting is a well-known international ghostwriting and editing firm operating for over a decade. Our experts create well-versed writing that demonstrates true professionalism while exhibiting creativity. Our services are not only economical but also ensure that both the needs of the authors and the preferences of their target audience are adequately met. Some of our platform's distinguishing traits are as follows:
                        </p>
                    </div>
                    <div className={`grid w-[85%] mx-auto ${isLargeScreen ? '' : 'hidden'} grid-cols-3 md:grid-cols-2 gap-4 mt-12 items-stretch justify-stretch`}>
                    <div className="  ">
                                <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 hover:invert-1 hover:brightness-100 hover:grayscale '  alt="Seal of Approval" width={100} height={100} />
                                    <h4 className='text-xl font-semibold mx-auto '>Original Key-word  <br></br> optimized content</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 '  alt="Seal of Approval" width={100} height={100} />
                                    <h4 className='text-xl font-semibold mx-auto '>Content writing <br></br>and editing services</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 '  alt="Seal of Approval" width={100} height={100} />
                                    <h4 className='text-xl font-semibold mx-auto '>Professional Writers  <br></br>trained in SEO</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 '  alt="Seal of Approval" width={100} height={100} />
                                    <h4 className='text-xl font-semibold mx-auto '>Easy-to-use  <br></br> platform </h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 '  alt="Seal of Approval" width={100} height={100} />
                                    <h4 className='text-xl font-semibold mx-auto '>Topic  <br></br> Ideation</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 '  alt="Seal of Approval" width={100} height={100} />
                                    <h4 className='text-xl font-semibold mx-auto '>Creative, <br></br>  out-of-the-box taglines</h4>
                                </div>
                            </div>
                    </div>
                    <div className={`grid w-[80%] mx-auto ${isLargeScreen ? 'hidden' : ''} grid-cols-3 gap-4 mt-12 items-stretch justify-stretch sm:grid-cols-1 sm:px-5 xs:grid-cols-1 xs:px-0 md:px-0`}>
                        {/* Medium, Small, and Extra Small screen content */}
                        <Slider {...settings}>
                        <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 hover:invert-1 hover:brightness-100 hover:grayscale '  alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>Original Key-word  <br></br> optimized content</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 '  alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>Content writing <br></br>and editing services</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 '  alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>Professional Writers  <br></br>trained in SEO</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 '  alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>Easy-to-use  <br></br> platform </h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 '  alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>Topic  <br></br> Ideation</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 '  alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>Creative, <br></br>  out-of-the-box taglines</h4>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>

    )
}

export default LetUsHelpArticle
