import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';

const LibrarySphere = ({
    subtitle = "",
    title = "",
    desc = "",
    background = "",
    BGclasses = "",
    CardClasses = "",
    GridClasses="mr-md:grid-cols-3 mr-lg:grid-cols-4",
    data
}) => {
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
        setIsLargeScreen(window.innerWidth >= 767); // Customize the breakpoint as needed
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
            <section className={`${background} ${BGclasses}`}>
                <div className="mr-container font-sans">
                    <div className="text-center justify-content-center ">
                        <h6 className='mr-lg:text-[30px] text-[20px] font-semibold text-[#40BEE2]'>{subtitle}</h6>
                        <h2 className={`mr-lg:text-[45px] text-[30px] font-bold mt-2`} dangerouslySetInnerHTML={{ __html: title }} />
                        <p className='mr-lg:w-[80%] m-auto'> {desc}</p>
                    </div>
                    <div className={`grid  ${isLargeScreen ? '' : 'hidden'} m-auto ${GridClasses} gap-3 mt-12 items-stretch justify-stretch mr-xs:grid-cols-1`}>
                        {data?.map((e, i) => (
                            <div key={i} className="">
                                <div className={`hover:shadow-lg hover:shadow-[#707070] hover:scale-95  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#fff] py-12 items-center justify-center m-auto rounded-lg ${CardClasses}`} >
                                    <Image quality={95} width={50} height={50} className='m-auto mb-5' src={e.imagePath} alt={e.alt} />
                                    <h4 className={`text-xl font-semibold mx-auto`} dangerouslySetInnerHTML={{ __html: e.title }} />
                                </div>
                            </div>
                        ))}
                    </div>





                    <div className={`grid xs:w-[90%] ${isLargeScreen ? 'hidden' : ''} mx-auto gap-5 mt-12 items-stretch justify-stretch sm:grid-cols-1 sm:px-20 xs:grid-cols-1 xs:px-5 md:px-5`}>
                        <Slider {...settings}>
                            {data?.map((e, i) => (
                                <div key={i} className="">
                                    <div className={`hover:shadow-lg hover:shadow-[#707070] hover:scale-95  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#fff] py-10 items-center justify-center m-auto rounded-lg ${CardClasses}`} >
                                        <Image quality={95} width={50} height={50} className='m-auto mb-5' src={e.imagePath} alt={e.alt} />
                                        <h4 className={`text-xl font-semibold mx-auto`} dangerouslySetInnerHTML={{ __html: e.title }} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>

    )
}

export default LibrarySphere
