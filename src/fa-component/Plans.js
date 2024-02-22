import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Plans.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import rating from 'media/images/icons/rating.png'
import globe from 'media/images/icons/globe.png'
import project from 'media/images/icons/project.png'
import stamp from 'media/images/icons/stamp.png'
// mport { Fade } from "react-awesome-reveal";
const Plans = () => {
    let planslider = {
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
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className={`${styles.plansFlod} bg-prime`}>
                <Container fluid className='px-md-5'>
                    <Row className={`${styles.plansRow} justify-content-center align-items-center text-center`}>
                        <Slider {...planslider}>
                            <Col lg={3}>

                                <div className={styles.plans}>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={rating}
                                        alt='Best_Publisher'
                                    />
                                    <p className='font-18 fw-500 font-secondary  txt-white mt-3 w-60 line-height1 mx-auto'>
                                        100% Customer <span className='d-block'>Satisfaction</span>
                                    </p>
                                </div>

                            </Col>
                            <Col lg={3}>

                                <div className={styles.plans}>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={globe}
                                        alt='Best_Publisher'
                                    />
                                    <p className='font-18 fw-500 font-secondary  txt-white mt-3 w-60 line-height1 mx-auto'>
                                        2500+ Customers in <span className='d-block'>51+ Countries</span>
                                    </p>
                                </div>

                            </Col>
                            <Col lg={3}>

                                <div className={styles.plans}>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={project}
                                        alt='Best_Publisher'
                                    />
                                    <p className='font-18 fw-500 font-secondary  txt-white mt-3 w-60 line-height1 mx-auto'>
                                        Flexible <span className='d-block'>Plans</span>
                                    </p>
                                </div>

                            </Col>
                            <Col lg={3}>

                                <div className={styles.plans}>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={stamp}
                                        alt='Best_Publisher'
                                    />
                                    <p className='font-18 fw-500 font-secondary  txt-white mt-3 w-60 line-height1 mx-auto'>
                                        All Royalties <span className='d-block'>Belong To You</span>
                                    </p>
                                </div>

                            </Col>
                        </Slider>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Plans