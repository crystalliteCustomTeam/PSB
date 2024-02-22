import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Plans.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import rating from 'media/ahsan/rating.png'
import globe from 'media/ahsan/globe.png'
import project from 'media/ahsan/project.png'
import stamp from 'media/ahsan/stamp.png'
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
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className={`${styles.plansFlod} bg-black`}>
                <Container className=''>
                    <Row className='align-items-center'>
                        <Col lg={12} className='m-auto'>
                            <Row className={`${styles.plansRow} justify-content-between align-items-center`}>
                                <Slider {...planslider}>
                                    <Col lg={3}>
                                        <div className={`${styles.plans} flex gap-2 align-items-center`}>
                                            <Image quality={80} loading="lazy" className='img-fluid d-block mr-auto'
                                                src={rating}
                                                alt='Best_Publisher'
                                            />
                                            <p className='font-18 fw-500 font-secondary txt-white w-50 line-height1'>
                                                100% Customer <span className='d-block'>Satisfaction</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                       <div className={`${styles.plans} flex gap-2 align-items-center`}>
                                            <Image quality={80} loading="lazy" className='img-fluid d-block !mr-auto'
                                                src={globe}
                                                alt='Best_Publisher'
                                            />
                                            <p className='font-18 fw-500 font-secondary  txt-white  w-60 line-height1'>
                                                2500+ Customers in <span className='d-block'>51+ Countries</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                       <div className={`${styles.plans} flex gap-2 align-items-center`}>
                                            <Image quality={80} loading="lazy" className='img-fluid !mr-auto d-block'
                                                src={project}
                                                alt='Best_Publisher'
                                            />
                                            <p className='font-18 fw-500 font-secondary  txt-white w-60 line-height1'>
                                                Flexible <span className=''>Plans</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                       <div className={`${styles.plans} flex gap-2 align-items-center`}>
                                            <Image quality={80} loading="lazy" className='img-fluid !mr-auto d-block'
                                                src={stamp}
                                                alt='Best_Publisher'
                                            />
                                            <p className='font-18 fw-500 font-secondary  txt-white w-60 line-height1'>
                                                All Royalties <span className='d-block'>Belong To You</span>
                                            </p>
                                        </div>
                                    </Col>
                                </Slider>
                            </Row> 
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Plans