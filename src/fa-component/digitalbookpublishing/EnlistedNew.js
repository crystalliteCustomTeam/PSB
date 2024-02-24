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
import { faParagraph } from '@fortawesome/free-solid-svg-icons'
import { MRCTAGroup } from '@/component'
// import { Slide } from "react-awesome-reveal";
const data = [
    {
        para: 1,
        paraTitle: "You'll Save Time:",
        paraSubTitle: "A professional book publishing service will handle all the technical aspects of creating and formatting your book, so you can focus on writing."
    },
    {
        para: 2,
        paraTitle: "You'll Get Expert Help: ",
        paraSubTitle: "A good digital book publishing service will have a team of experienced editors, designers, and marketers who can help make your book the best it can be."
    },
    {
        para: 3,
        paraTitle: "You'll Reach A Wider Audience: ",
        paraSubTitle: "With the help of a digital book publishing service , your book will be available to readers all over the world. "
    },
    {
        para: 4,
        paraTitle: "You'll Make More Money: ",
        paraSubTitle: "A professional book publishing service will ensure your book is priced correctly and marketed effectively, so you can earn more royalties. "
    }
]

const Enlisted = ({
    subtitle,
    title,
    desc,
    desc2,
    paragraph
}) => {

    return (
        <>
            <section className={styles.enlistedFlod}>
                <div className='mr-container px-md-5'>
                    <Row className='justify-content-center'>
                        <Col xxl={10} lg={10} sm={12}>
                            <div className={`${styles.enlistedHead} text-center items-center`}>
                                <h4 className='font-30 font-primary txt-primary'>{subtitle}</h4>
                                <h2 className='font-45 fw-700 font-primary txt-secondary mb-3' dangerouslySetInnerHTML={{ __html: title }}>
                                </h2>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3 w-75' dangerouslySetInnerHTML={{ __html: desc2 }} />
                                <p className='mr-lg::w-75 m-auto'>{paragraph}</p>
                            </div>
                        </Col>
                        <Col xxl={10} lg={10} sm={0}>
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
                                        </div>
                                        <Image quality={100} loading="lazy" className='img-fluid'
                                            src={mid}
                                            alt='Best_Publisher'
                                        />
                                        <div className='pb-5 w-75'>
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
                            <MRCTAGroup classes='justify-center mt-5' />
                        </Col>
                       
                    </Row>
                </div>
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