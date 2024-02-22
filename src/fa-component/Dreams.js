import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Dreams.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// mport { Fade } from "react-awesome-reveal";

const Dreams = () => {

    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
          window.LiveChatWidget.call('maximize');
        }
      };

    return (
        <>
            <section className={styles.dreamsFlod}>
                <Container className='pb-3 px-md-4'>
                    <Row className='justify-content-center'>
                        <Col lg={10}>
                            <div className={`${styles.dreamsHead} text-center`}>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3'>Realizing Publishing Dreams for Authors around the World </h2>
                                <p className='font-15 font-secondary txt-secondary mb-5'>Every idea, every story, and plot are brilliant, but they need to be refined for success. Excellence doesn’t guarantee anything—it’s the right professionals who will help you find your way through our solutions. Whether you are a new author or a seasoned veteran, Best Selling Publisher makes it easy to get started in the wonderful world of publishing. We provide everything you need to write the perfect book – all in one place.</p>
                            </div>
                        </Col>
                        <Col lg={12} className='px-md-4'>
                            <Row className={`${styles.dreamsRow} justify-content-center pt-5`}>
                                <Col lg={4}>
                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Top Notch Services </h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3 pb-5'>Best Selling Publisher offers a comprehensive suite of eBook publishing services that are designed to meet the needs of authors at every stage of the publishing process.</p>
                                        <Link className='btns btnPrimary mt-5 mx-auto' onClick={openLiveChat} href="#">Let's discuss</Link>
                                    </div>
                                </Col>
                                <Col lg={4}>

                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Experience and Dedication</h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3 pb-5'>We have a team of experienced and professional eBook editors and publishers who are committed to helping authors publish their books successfully.<br /><br /></p>
                                        <Link className='btns btnPrimary mt-5 mx-auto' onClick={openLiveChat} href="#">Let's discuss</Link>
                                    </div>

                                </Col>
                                <Col lg={4}>

                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Cost Effective Packages</h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3 pb-5 pb-lg-0'>Our eBook publishing services are affordable and customizable, so you can choose the level of support that's right for you. Whether you're looking for a simple manuscript conversion or a comprehensive package that includes extensive assistance, we can help you meet your goals.</p>
                                        <Link className='btns btnPrimary mt-5 mx-auto' onClick={openLiveChat} href="#">Let's discuss</Link>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Dreams