import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Advice.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import advice from 'media/images/flods/advice.png'
// mport { Fade } from "react-awesome-reveal";
const Advice = () => {
    return (
        <>
            <section className={styles.adviceFlod}>
                <Container fluid className='p-0'>
                    <Row className={`${styles.adviceRow} justify-content-center align-items-center`}>
                        <Col lg={6}>

                            <div className={styles.adviceImg}>
                                <Image quality={100} loading="lazy" className='img-fluid'
                                    src={advice}
                                    alt='Best_Publisher'

                                />
                            </div>

                        </Col>
                        <Col lg={6}>

                            <div className={`${styles.adviceTxt} marginright`}>
                                <h4 className='font-30 font-primary txt-primary mb-3'><em>Here’s a friendly piece of advice:</em></h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary'>Your Job is half done when you have a Best Selling Publisher Take Charge!</h2>
                            </div>
                            <div className={`${Bookshelf.bttns} mt-5`}>
                                <Link className='btns btnPrimary' href="javascript:$zopim.livechat.window.show()">Let's discuss</Link>
                                <Link className='btns btnSecondary' href="tel:800-781-9093">800-781-9093</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Advice