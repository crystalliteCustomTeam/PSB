
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';


const writingservices = () => {
    var settings = {

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
        setIsLargeScreen(window.innerWidth >= 639); // Customize the breakpoint as needed
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

            <div className="w-full px-8 py-16 xs:py-8 md:px-2 bg-[#f2f2f2] ">
                <div className='max-w-7xl lg:max-w-6xl mx-auto flex md:grid gap-4 sm:grid sm:text-center xs:flex-none xs:grid xs:grid-cols-1 xs:text-left xs:gap-5'>
                    <div className='basis-[85%] py-10 xs:py-5'>
                        <h4 className='text-[45px] font-primary font-bold md:py-5 md:text-center md:text-[45px] xs:text-[40px] xs:text-center xs:py-3 leading-tight'>Exceptional Book Writing Service!</h4>
                    </div>

                    <div className={`${isLargeScreen ? '' : 'hidden'} md:grid md:grid-cols-2 md:gap-12 flex gap-4 md:px-10 md:items-center md:justify-center md:text-center sm:gap-10 sm:grid sm:grid-cols-2`}>
                        <div className='basis-[25%] xs:m-0 px-3 md:px-1'>
                            <Image quality={95} src="/assets/images/newimg/Evgenie-Marakou1.png" className='md:mx-auto sm:mx-auto avatar' width={98} height={200} alt="ebook publishing" />
                            <h5 className='font-bold m-1 mt-3 text-[20px] sm:text-[25px]'>E-books</h5>
                            <p className=' text-base sm:text-base '>
                                Transform your book into a digital format, complete with stories, text, and images, for a convenient and enjoyable reading experience.
                            </p>
                        </div>
                        <div className='basis-[25%] px-3 md:px-1'>
                            <Image quality={95} src="/assets/images/newimg/trade-book.png" width={100} height={200} alt="trade books" className='md:mx-auto sm:mx-auto avatar' />
                            <h5 className='font-bold m-1 mt-3 text-[20px] sm:text-[25px]'>Trade Books</h5>
                            <p className=' text-base sm:text-base'>
                                A book intended and designed for the general public that a commercial publisher publishes.
                            </p>
                        </div>

                        <div className='basis-[25%] px-3 md:px-1'>
                            <Image quality={95} src="/assets/images/newimg/magazines.png" width={100} height={200} alt="magazine publishing" className='md:mx-auto sm:mx-auto avatar' />
                            <h5 className='font-bold m-1 mt-3 text-[20px] sm:text-[25px]'>Magazines</h5>
                            <p className=' text-base sm:text-base'>
                                A printed or digitally published compilation of articles, stories, and poems, mostly with illustrations, that is issued regularly with specific frequencies.
                            </p>
                        </div>
                        <div className='basis-[25%] px-3 md:px-1'>
                            <Image quality={95} src="/assets/images/newimg/photo-book.png" width={100} height={200} alt="graphic book" className='md:mx-auto sm:mx-auto avatar border-r-0' />
                            <h5 className='font-bold m-1 mt-3 text-[20px] sm:text-[25px]'>Photo Books</h5>
                            <p className=' text-base sm:text-base'>
                                A publication comprising of photographs as a means of the overall content, for a picture is worth a thousand words!
                            </p>
                        </div>
                    </div>



                    <div className={`${isLargeScreen ? 'hidden' : ''} sm:text-center  xs:text-center`}>
                        <Slider {...settings}>

                            <div className='basis-[15%] xs:m-0 px-3'>
                                <Image quality={95} src="/assets/images/newimg/Evgenie-Marakou1.png" className='p-0 m-0 xs:mx-auto duration-300 shadow-lg-sm	shadow-lg' width={98} height={200} alt="ebook publishing" />
                                <h5 className='font-bold m-1 mt-3 text-[20px]'>E-books</h5>
                                <p className=' text-base'>
                                    Transform your book into a digital format, complete with stories, text, and images, for a convenient and enjoyable reading experience.
                                </p>
                            </div>
                            <div className='basis-[15%] px-3'>
                                <Image quality={95} src="/assets/images/newimg/trade-book.png" width={100} height={130} alt="trade books" className='xs:mx-auto' />
                                <h5 className='font-bold m-1 mt-3 text-[20px]'>Trade Books</h5>
                                <p className=' text-base'>
                                    A book intended and designed for the general public that a commercial publisher publishes.
                                </p>
                            </div>

                            <div className='basis-[15%] px-3'>
                                <Image quality={95} src="/assets/images/newimg/magazines.png" width={100} height={150} alt="magazine publishing" className='xs:mx-auto' />
                                <h5 className='font-bold m-1 mt-3 text-[20px]'>Magazines</h5>
                                <p className=' text-base'>
                                    A printed or digitally published compilation of articles, stories, and poems, mostly with illustrations, that is issued regularly with specific frequencies.
                                </p>
                            </div>
                            <div className='basis-[15%] px-3'>
                                <Image quality={95} src="/assets/images/newimg/photo-book.png" width={100} height={150} alt="graphic book" className='xs:mx-auto' />
                                <h5 className='font-bold m-1 mt-3 text-[20px]'>Photo Books</h5>
                                <p className=' text-base'>
                                    A publication comprising of photographs as a means of the overall content, for a picture is worth a thousand words!
                                </p>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        </>
    )
}
export default writingservices