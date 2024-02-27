
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import { MRCTAGroup } from '.';
import Ebook from 'media/ahsan/ebook.png'
import Tradebook from 'media/ahsan/tradeBook.png'
import Magazines from 'media/ahsan/magazine.png'
import photoBook from 'media/ahsan/photoBook.png'

const data = [
    {
        ImagePath: Ebook,
        heading: 'E-Book',
        desc: 'Make your book publication available in the digital form comprising of story, text, and images and is convenient to read.',
        alt: 'Best Publishing E-Book'
    },
    {
        ImagePath: Tradebook,
        heading: 'Trade-book',
        desc: 'A book that is intended and designed for the general public, which a commercial publisher publishes.',
        alt: 'Best Publishing Trade-book'
    },
    {
        ImagePath: Magazines,
        heading: 'Magazines',
        desc: 'It is a printed or digital published item that consists of articles, stories, and poems, mostly in the form of illustrations.',
        alt: 'Best Publishing Magazines'
    },
    {
        ImagePath: photoBook,
        heading: 'Photo Book',
        desc: 'Make your book publication available in the digital form comprising of story, text, and images and is convenient to read.',
        alt: 'Best Publishing Photo Book'
    },
]

const writingservices = () => {
    var settings = {
        dots : true,
        infinite: true,
        speed: 500,
        // autoplay: true,
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
                    slidesToShow: 2, // Display 1 column at this breakpoint
                    slidesToScroll: 2, // Scroll 1 column at this breakpoint
                }
            },
            {
                breakpoint: 575,
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
        setIsLargeScreen(window.innerWidth >= 992); // Customize the breakpoint as needed
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

            <div className="w-full px-8 py-16 xs:py-8 md:px-2 bg-[#fff] ">
                <div className='mr-container'>
                    <div className='grid mr-xl:grid-cols-12 items-center'>
                        <div className='mr-xl:col-span-4 col-span-12 m-auto mr-xl:mb-0 mb-10'>
                            <h4 className='mr-2xl:text-[50px] text-[40px] mr-lg:text-[40px] font-primary font-bold md:py-5 mr-xl:!text-left !text-center mr-md:text-[40px] mr-xs:text-[40px] xs:py-3 leading-tight'>Exceptional <br className='mr-2xl:block hidden'/> Book Writing <br className='mr-2xl:block hidden'/> Service!</h4>
                            <MRCTAGroup classes='mt-4 mr-2xl:flex-nowrap mr-xl:flex-wrap mr-lg:flex-wrap mr-xl:!w-[100%] mr-lg:mx-auto mr-xl:justify-start justify-center' />
                        </div>

                        <div className={`${isLargeScreen ? '' : 'hidden'} flex col-span-8 mr-xl:pl-2`}>
                            {data?.map((e, i) => (
                                <div key={i} className='m-auto col-span-3'>
                                    <Image quality={100} src={e.ImagePath} className='mr-auto' width={130} height={200} alt={e.alt} />
                                    <h5 className='text-[25px] font-bold mt-5'>{e.heading}</h5>
                                    <p className='text-base'>{e.desc}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className={`${isLargeScreen ? 'hidden' : ''} m-auto p-5`}>
                        <Slider {...settings} className='ImgSliderWS'>
                            {data?.map((e, i) => (
                                <div key={i} className='col-span-3 '>
                                    <Image quality={100} src={e.ImagePath} className='block mr-md:mr-auto mx-auto' width={130} height={200} alt={e.alt} />
                                    <h5 className='text-[25px] font-bold mt-5'>{e.heading}</h5>
                                    <p className='text-base'>{e.desc}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>



                </div>

            </div>
        </>
    )
}
export default writingservices