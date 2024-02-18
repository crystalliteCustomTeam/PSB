import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Broader.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
// mport { Fade } from "react-awesome-reveal";

const Broader = ({
    subtitle,
    title,
    desc,
    image
}) => {
    return (
        <>
            <section className={styles.broaderFlod}>
                <Container fluid className='p-0'>
                    <Row className={`${styles.broaderRow} justify-content-center`}>
                        <Col lg={6}>

                            <div className={`${styles.broaderTxt} marginleft`}>
                                <h4 className='font-30 font-primary txt-primary'>{subtitle}</h4>
                                <h2 className='font-50 fw-800 font-primary txt-secondary mb-4' dangerouslySetInnerHTML={{__html:title}} />
                                <p className='font-15 font-secondary txt-secondary mb-4' dangerouslySetInnerHTML={{ __html: desc }}/>
                                <div className={`${Bookshelf.bttns} dislpay-flex`}>
                                <Link className='btns btnBlack' href="javascript:$zopim.livechat.window.show()">Let's discuss</Link>
                                <Link className='btns btnTransprnt text-black' href="tel:800-781-9093">800-781-9093</Link>
                            </div>
                            </div>
                            
                        </Col>
                        <Col lg={6}>
                            <div className={styles.broaderImg}>
                                <Image
                                    quality={100}
                                    loading="lazy"
                                    width={800}
                                    height={1000}
                                    className='img-fluid'
                                    src={image}
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