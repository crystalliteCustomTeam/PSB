import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Broader.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import broader from 'media/images/flods/broader.png'
// mport { Fade } from "react-awesome-reveal";
const Broader = ({
    subtitle,
    title,
    desc
}) => {
    return (
        <>
            <section className={styles.broaderFlod}>
                <Container fluid className='p-0'>
                    <Row className={`${styles.broaderRow} justify-content-center`}>
                        <Col lg={6}>

                            <div className={`${styles.broaderTxt} marginleft`}>
                                <h4 className='font-30 font-primary txt-primary'><em>{subtitle}</em></h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-4'>{title}</h2>
                                <p className='font-15 font-secondary txt-secondary mb-4'>{desc}</p>
                                <h4 className='font-30 font-primary txt-secondary mb-4'><em>Our Package Include</em></h4>
                                <Row className={styles.listRow}>
                                    <Col md={6}>
                                        <ul className={`${styles.broaderList} p-0 mb-0`}>
                                            <li>Idea research and analysis</li>
                                            <li>Proofreading to eliminate errors</li>
                                            <li>Book Cover design and illustration</li>
                                            <li>Traditional and self-publishing</li>
                                            <li>Video Book Trailers</li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className={`${styles.broaderList} p-0 mb-0`}>
                                            <li>Manuscript drafting</li>
                                            <li>Critical reviews</li>
                                            <li>Preparing text for publication</li>
                                            <li>Publishing on best libraries</li>
                                            <li>Branding and marketing</li>
                                        </ul>
                                    </Col>
                                    <div className={`${Bookshelf.bttns} mt-5`}>
                                        <Link className='btns btnPrimary' href="javascript:$zopim.livechat.window.show()">Let's discuss</Link>
                                        <Link className='btns btnSecondary' href="tel:800-781-9093">800-781-9093</Link>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6}>

                            <div className={styles.broaderImg}>
                                <Image quality={100} loading="lazy" width={800} height={800} className='img-fluid'
                                    src={broader}
                                    alt='Best_Publisher'
                                />
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Broader