
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';

const PublishingSlider = () => {
    var settings = {
        dots: false,
        spacing: 50,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        autoplay: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }

        ]
    };


    return (
        <>
            <section className='publishing-slider font-secondary py-10 md:py-0 xs:py-0'>
                <div className='container max-w-7xl lg:max-w-6xl justify-center mt-10 testimonial mx-auto mb-20 testimonial md:px-5 xs:px-7'>
                    <div className='py-10 text-center xs:py-5'>
                        <h6 className='text-[30px] leading-tight font-primary text-[#40BEE2] font-semibold sm:text-base xs:text-base'>Book Cover</h6>
                        <h3 className='font-bold font-primary text-4xl py-2'>Types Of Cover Designs</h3>
                        {/* <p className='w-[62%] mx-auto xs:w-[100%]'>At , we provide a variety of book trim size options, cover styles, bookbinding kinds, and other elevated possibilities. We can do whatever you can think of.</p> */}
                    </div>
                    <div className='justify-center mr-lg:w-[80%] m-auto grid grid-cols-1 gap-2 items-center space-y-10 sm:px-14 '>
                        <Slider {...settings} className='__slides'>
                            <div className='mx-auto px-2'>
                                <div className='relative'>
                                    <Image quality={95} src='/assets/images/newimg/bold-typography.png' width={240} height={240} alt="bold-typography" />
                                    <div >
                                        <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                        <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>Bold Typography</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='publishing relative  px-2'>
                                <div className='relative'>
                                    <Image quality={95} src='/assets/images/newimg/Illustrations.png' width={240} height={240} alt="Illustrations" />
                                    <div >
                                        <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                        <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>Illustrations</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='publishing relative  px-2'>
                                <div className='relative'>
                                    <Image quality={95} src='/assets/images/newimg/Retro.png' width={240} height={240} alt="Retro" />
                                    <div >
                                        <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                        <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>Retro</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='publishing relative  px-2'>
                                <div className='relative'>
                                    <Image quality={95} src='/assets/images/newimg/millennial-pink.png' width={240} height={240} alt="millennial-pink" />
                                    <div >
                                        <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                        <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>Millennial Pink</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='publishing relative  px-2'>
                                <div className='relative'>
                                    <Image quality={95} src='/assets/images/newimg/colorful-children.png' width={240} height={240} alt="Colorful children books illustrations" />
                                    <div >
                                        <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                        <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>Colorful children books illustrations</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='publishing relative  px-2'>
                                <div className='relative'>
                                    <Image quality={95} src='/assets/images/newimg/designs-for-classic-literature.png' width={240} height={240} alt="designs-for-classic-literature" />
                                    <div >
                                        <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                        <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>Designs for classic literature</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='publishing relative  px-2'>
                                <div className='relative'>
                                    <Image quality={95} src='/assets/images/newimg/photography.png' width={240} height={240} alt="photography.png" />
                                    <div >
                                        <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                        <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>Photography</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='publishing relative  px-2'>
                                <div className='relative'>
                                    <Image quality={95} src='/assets/images/newimg/minimalist-covers.png' width={240} height={240} alt="minimalist-covers" />
                                    <div >
                                        <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                        <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>Minimalist Covers</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='publishing relative  px-2'>
                                <div className='relative'>
                                    <Image quality={95} src='/assets/images/newimg/Portrait.png' width={240} height={240} alt="Portrait" />
                                    <div >
                                        <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                        <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>Portrait</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='publishing relative  px-2'>
                                <div className='relative'>
                                    <Image quality={95} src='/assets/images/newimg/Classic.png' width={240} height={240} alt="Classic" />
                                    <div >
                                        <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                        <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>Classic</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='publishing relative  px-2'>
                                <div className='relative'>
                                    <Image quality={95} src='/assets/images/newimg/hand-drawn-covers.png' width={240} height={240} alt="hand-drawn-covers" />
                                    <div >
                                        <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                        <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>Hand Drawn Covers</h6>
                                    </div>
                                </div>
                            </div>
                        </Slider>


                    </div>
                </div>
            </section>


        </>

    )
}

export default PublishingSlider
