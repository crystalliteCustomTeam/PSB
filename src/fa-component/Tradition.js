import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Tradition.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import mock1 from 'media/images/book-mockup/1.png'
import mock2 from 'media/images/book-mockup/2.png'
import mock3 from 'media/images/book-mockup/3.png'
import mock4 from 'media/images/book-mockup/4.png'
import mock5 from 'media/images/book-mockup/5.png'
import mock6 from 'media/images/book-mockup/6.png'
import mock7 from 'media/images/book-mockup/7.png'


import before from 'media/images/flods/tradition-before.png'

// mport { Fade } from "react-awesome-reveal";
import Link from 'next/link'
import { MRCTA } from '@/component'

const Tradition = ({
    subtitle,
    title,
    desc,
    background = "",
    txtColor = "",
    classes,
    BGclasses
}) => {

    let traditionslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };


    return (
        <>
            <section className={`${styles.traditionFold} ${background} bg-no-repeat bg-cover ${BGclasses}`}>
                <div className='mr-container px-md-5'>
                    <Row className='justify-content-center'>

                        <Col lg={12}>
                            <div className={`${styles.mockupsHead} text-center mb-5`}>
                                <h6 className='text-[30px] text-[#40BEE2] font-semibold mb-3 sm:text-base xs:text-base font-primary'>{subtitle}</h6>
                                <h2 className={`mr-lg:text-[45px] text-[30px] font-bold font-primary text-black mb-3 ${classes}`} dangerouslySetInnerHTML={{ __html: title }} />
                                <p className={`text-[15px] font-secondary text-black ${classes}`}>{desc}</p>
                                <div className='m-auto justify-content-center'>
                                    <Image quality={100} loading="lazy" className='img-fluid justify-content-center'
                                        src={before}
                                        alt='Best_Publisher'
                                    />
                                </div>

                            </div>
                        </Col>


                        <Col lg={12} className='my-5'>
                            <div className='trade'>
                                <Slider {...traditionslider}>
                                    <div>
                                        <Image quality={80} loading="lazy" className='hoverCss img-fluid'
                                            src={mock1}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={80} loading="lazy" className='hoverCss img-fluid'
                                            src={mock2}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={80} loading="lazy" className='hoverCss img-fluid'
                                            src={mock3}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={80} loading="lazy" className='hoverCss img-fluid'
                                            src={mock4}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={80} loading="lazy" className='hoverCss img-fluid'
                                            src={mock5}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={80} loading="lazy" className=' hoverCss img-fluid'
                                            src={mock6}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={80} loading="lazy" className=' hoverCss img-fluid'
                                            src={mock7}
                                            alt='Best_Publisher'
                                        />
                                    </div>


                                </Slider>
                            </div>
                        </Col>
                        <div className={`grid grid-cols-1 mr-sm:flex gap-3 justify-center mt-5`}>
                            <MRCTA
                                text="LET'S DISCUSS"
                                classes="hover:bg-transparent hover:border-secondary-100 rounded-sm bg-secondary-100"
                                handle="onclick='parent.LC_API.open_chat_window();return false;'"
                            />
                            <MRCTA
                                text="800-781-9093"
                                link="tel:8007819093"
                                bg="bg-transparent"
                                color="text-primary-100"
                                border="border-secondary-100 hover:!bg-white hover:border-secodary hover:text-black rounded-sm text-secondary-100"
                            />
                        </div>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Tradition