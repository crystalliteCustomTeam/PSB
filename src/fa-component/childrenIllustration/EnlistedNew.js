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
      paraTitle: "What Is Self Publishing?",
      paraSubTitle: "Self-publishing is the process of publishing your own book without the need for a traditional publisher. This means that you will be responsible for all aspects of the publishing process, from editing and design to printing and distribution. While self publishing services can be a lot of work, it also gives you a lot of control over your book and the publishing process."
    },
    {
      para: 2,
      paraTitle: "Why Would I Want To Self Publish My Book?",
      paraSubTitle: "There exists multiple reasons why someone might want to self publish their book. Maybe you have a story that you feel is important and needs to be told, but you can’t find a traditional publisher who is interested. Or maybe you want to be in control of the publishing process and your book’s destiny. Either way, self publishing services can be a great way to get your book into the world."
    },
    {
      para: 3,
      paraTitle: "How Do I Self Publish My Book?",
      paraSubTitle: "There are a few different ways to go about self publishing your book. You can hire a professional books publisher to print your book for you or use an online print-on-demand service offered by Best Selling Publisher. You will also need to create a book design and cover and format your book for printing. Once your book is ready, you can start promoting and selling it to readers.  "
    },
    {
      para: 4,
      paraTitle: "What Are The Benefits Of Self Publishing?",
      paraSubTitle: "A: Best self publishing services give you a lot of control over your book and the publishing process. You can determine the price of your book, the format in which it will be printed, and how it will be distributed. You can also reach a wider audience with the help of the best self publishing companies since your book will be available for sale online and in bookstores. And, of course, you get to keep all the profits from your book sales! "
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
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={10}>
                            <div className={`${styles.enlistedHead} text-center`}>
                                <h4 className='text-[30px] font-primary txt-primary'>{subtitle}</h4>
                                <h2 className='text-[45px] font-bold font-primary txt-secondary mb-3' dangerouslySetInnerHTML={{ __html: title }}>
                                </h2>
                                <h2 className='text-[45px] font-bold font-primary txt-secondary mb-3 w-75' dangerouslySetInnerHTML={{ __html: desc2 }}/>
                                <p>{paragraph}</p>
                            </div>
                        </Col>
                        <Col xxl={8} lg={8} sm={0} className='m-auto'>
                            <div className={`${styles.enlisContnt} text-center mt-3`}>
                                <div className={styles.enlisImg}>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={before}
                                        alt='Best_Publisher'
                                    />

                                    <div className={styles.midImg}>
                                        <div>
                                            <p className={`${styles.para1} text-[30px] font-primary txt-secondary mt-5 mb-5`}>1.</p>
                                            <p className={`${styles.para2} text-[30px] font-primary txt-secondary mb-5`}>2.</p>
                                            <p className={`${styles.para3} text-[30px] font-primary txt-secondary mb-5`}>3.</p>
                                            <p className={`${styles.para4} text-[30px] font-primary txt-secondary mb-5`}>4.</p>
                                        </div>
                                        <Image quality={100} loading="lazy" className='img-fluid'
                                            src={mid}
                                            alt='Best_Publisher'
                                        />
                                        <div className='pb-5 mr-lg:w-[75%] '>
                                            {data?.map((e, i) => (
                                                <div key={i}>
                                                    <p className='text-[30px] font-primary txt-secondary mt-5' dangerouslySetInnerHTML={{ __html: e.paraTitle }} />
                                                    <p className='font-15 font-secondary txt-secondary w-75' dangerouslySetInnerHTML={{ __html: e.paraSubTitle }} />
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
                </Container>
            </section>



            {/* <section className={styles.enlistedSlide}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className={`${styles.enlistedHead} text-center`}>
                                <h4 className='text-[30px] font-primary color-white'>Enlist Yourself with the All-Time Best  </h4>
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