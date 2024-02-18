import React from 'react'
import Image from 'next/image'
import styles from '@/styles/EnlistedNew.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import before from 'media/images/flods/enlisted-before.png'
import after from 'media/images/flods/enlisted-after.png'
import mid from 'media/images/flods/enlisted-mid.png'
import Link from 'next/link';
// import { Slide } from "react-awesome-reveal";


const Enlisted = ({
    subtitle,
    title,
    desc,
    desc2,
    data
}) => {
    return (
        <>
            <section className={styles.enlistedFlod}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-left'>
                        <Col lg={10} sm={12}>
                            <div className={`${styles.enlistedHead} text-left`}>
                                <h4 className='font-30 font-primary txt-primary'>{subtitle}</h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3' dangerouslySetInnerHTML={{ __html: title }}>
                                
                                </h2>
                                <span className='bg-black txt-white mt-2 p-1 font-50 fw-500'>{desc}</span>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3 w-75' dangerouslySetInnerHTML={{ __html: desc2 }} />
                            </div>
                        </Col>
                        <Col lg={8} sm={0}>
                            <div className={`${styles.enlisContnt} text-center mt-3`}>
                                <div className={styles.enlisImg}>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={before}
                                        alt='Best_Publisher'
                                    />

                                    <div className={styles.midImg}>
                                        <div>
                                            <p className={`${styles.para1} font-30 font-primary txt-secondary mt-5 mb-5`}>1.</p>
                                            <p className={`${styles.para2} font-30 font-primary txt-secondary mb-5`}>2.</p>
                                            <p className={`${styles.para3} font-30 font-primary txt-secondary mb-5`}>3.</p>
                                            <p className={`${styles.para4} font-30 font-primary txt-secondary mb-5`}>4.</p>
                                            <p className={`${styles.para5} font-30 font-primary txt-secondary`}>5.</p>
                                        </div>
                                        <Image quality={100} loading="lazy" className='img-fluid'
                                            src={mid}
                                            alt='Best_Publisher'
                                        />
                                        <div className='pb-5 '>
                                            {data?.map((e, i) => (
                                                <div key={i}>
                                                    <p className='font-30 font-primary txt-secondary mt-5' dangerouslySetInnerHTML={{ __html: e.paraTitle }} />
                                                    <p className='font-15 font-secondary txt-secondary ' dangerouslySetInnerHTML={{ __html: e.paraSubTitle }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={after}
                                        alt='Best_Publisher'
                                    />
                                </div>
                            </div>
                            <div className='justify-content-center w-75 mx-auto'>
                                <p className='py-3'>Best Selling Publisher brings your dream of book writing to life.</p>
                                <div className={`${Bookshelf.bttns} dislpay-flex`}>
                                    <Link className='btns btnBlack' href="javascript:$zopim.livechat.window.show()">Let's discuss</Link>
                                    <Link className='btns btnTransprnt text-black' href="tel:800-781-9093">800-781-9093</Link>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>



            {/* <section className={styles.enlistedSlide}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className={`${styles.enlistedHead} text-center`}>
                                <h4 className='font-30 font-primary color-white'>Enlist Yourself with the All-Time Best  </h4>
                                <h2 className='font-50 fw-500 font-primary color-white mb-3'>Your book deserves only the <span className='bg-black color-white p-1 mt-2 d-block house'> Best Selling Publishers.</span></h2>
                            </div>

                            <div className="bttns1black mt-4 mb-5 mb-md-0">
                                <Link className="btns btnBlack" href="/#">Get Onboard </Link>
                                <Link className="btns btnTransprnt" href="tel:800-781-9093">(800) 781-9093</Link>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section> */}

        </>
    )
}

export default Enlisted