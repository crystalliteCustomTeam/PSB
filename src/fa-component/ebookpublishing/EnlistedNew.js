import React from 'react'
import Image from 'next/image'
import styles from './EnlistedNew.module.css'
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
        paraTitle: "Ebooks Are Much Cheaper To Produce Than Print Books. ",
        paraSubTitle: "You don't have to pay for printing, paper, or shipping costs."
    },
    {
        para: 2,
        paraTitle: "Ebooks Can Be Published And Distributed Very Quickly.  ",
        paraSubTitle: "You can have your eBook available for sale within days or weeks."
    },
    {
        para: 3,
        paraTitle: "Ebooks Are Very Easy To Update.",
        paraSubTitle: "You can make changes to your eBook and distribute the updated version to your readers without having to go through the traditional printing and distribution process. "
    },
    {
        para: 4,
        paraTitle: "Ebooks Are Very Easy To Distribute.",
        paraSubTitle: "You can sell your eBook online or distribute it for free through websites and social media."
    },
    {
        para: 5,
        paraTitle: "Ebooks Are Very Sustainable.",
        paraSubTitle: "They don't require trees to be cut down to be produced, and they can be read on electronic devices that use very little energy."
    },
    {
        para: 6,
        paraTitle: "Ebooks Can Be An Excellent Marketing Tool.",
        paraSubTitle: "You can use your eBook to promote your other products and services."
    },
    {
        para: 7,
        paraTitle: "Ebooks Can Help You Build A Community Around Your Brand.",
        paraSubTitle: "If you distribute your eBook for free, you can attract new readers and followers who will be interested in what you have to say."
    },
    {
        para: 8,
        paraTitle: "Ebooks Can Be A Great Revenue Stream.",
        paraSubTitle: "If you sell your eBook, you can make a significant amount of money from it. There are many more benefits to eBook publishing than we have space to list here. Suffice it to say that if you're thinking about publishing a book, you should seriously consider doing it as an eBook. It's a quick, easy, cost-effective way to get your content out there. And who knows? Your eBook could end up being a bestseller!"
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
                    <Row className='justify-content-left'>
                        <Col lg={10} sm={12}>
                            <div className={`${styles.enlistedHead} text-center`}>
                                <h4 className='font-30 font-primary txt-primary'>{subtitle}</h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3' dangerouslySetInnerHTML={{ __html: title }}>
                                </h2>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3 w-75' dangerouslySetInnerHTML={{ __html: desc2 }} />
                                <p className='w-75 m-auto font-15'>{paragraph}</p>
                            </div>
                        </Col>
                        <Col lg={8} sm={12} xs={12}>
                            <div className={`${styles.enlisContnt} text-center mt-3`}>
                                <div className={styles.enlisImg}>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={before}
                                        alt='Best_Publisher'
                                    />

                                    <div className={styles.midImg}>
                                        <div>
                                            <p className={`${styles.para1} font-30 font-primary txt-secondary mt-5`}>1.</p>
                                            <p className={`${styles.para2} font-30 font-primary txt-secondary `}>2.</p>
                                            <p className={`${styles.para3} font-30 font-primary txt-secondary `}>3.</p>
                                            <p className={`${styles.para4} font-30 font-primary txt-secondary `}>4.</p>
                                            <p className={`${styles.para5} font-30 font-primary txt-secondary mt-5`}>5.</p>
                                            <p className={`${styles.para6} font-30 font-primary txt-secondary `}>6.</p>
                                            <p className={`${styles.para7} font-30 font-primary txt-secondary `}>7.</p>
                                            <p className={`${styles.para8} font-30 font-primary txt-secondary `}>8.</p>
                                        </div>
                                        <Image quality={100} loading="lazy" className='img-fluid'
                                            src={mid}
                                            alt='Best_Publisher'
                                        />
                                        <div className='pb-5 '>
                                            {data?.map((e, i) => (
                                                <div key={i}>
                                                    <p className='font-30 leading-normal font-primary txt-secondary mt-[35px]' dangerouslySetInnerHTML={{ __html: e.paraTitle }} />
                                                    <p className='font-15 leading-normal font-secondary txt-secondary ' dangerouslySetInnerHTML={{ __html: e.paraSubTitle }} />
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