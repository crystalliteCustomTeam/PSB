import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "./InnerBanner.module.css"
// Images
import Arrow from "media/blog-new/arrowBlack.png"
import verifies from "media/blog-new/blog-verify.png"
import BlogImage1 from "media/blog-new/1.png"
import BlogImage2 from "media/blog-new/2.png"
import BlogImage3 from "media/blog-new/3.png"
import profile from "media/blog-new/blog-client.png"
const BlogArticle = () => {
    return (
        <>
            <section className={styles.readSec}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className='fontsfregular mb-5 text-center'>Read Next</h2>
                        </Col>
                        <Col md={6} lg={4} className='p-2'>
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <Image src={BlogImage1} alt='Bitswits' className='img-fluid w-100' />
                                </div>
                                <div className={styles.cardContent}>
                                    <p className='fontsfregular'>Blockchain</p>
                                    <h5 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                        Your Path To Unstoppable Progress!</h5>
                                    <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                    <div className={styles.btn}>
                                        <a href="#href" className='text-black'>
                                            Read More
                                            <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.cardBottomImg}>
                                        <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                    </div>
                                    <div className={styles.cardbottomContent}>
                                        <div className='d-flex align-items-center gap-2 pb-1'>
                                            <h3 className='fontsfregular'>Nick Willford</h3>
                                            <Image src={verifies} alt='bitswits' width={13} height={13} />
                                        </div>
                                        <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='p-2'>
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <Image src={BlogImage2} alt='Bitswits' className='img-fluid w-100' />
                                </div>
                                <div className={styles.cardContent}>
                                    <p className='fontsfregular'>Mobile Application</p>
                                    <h5 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                        Your Path To Unstoppable Progress!</h5>
                                    <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                    <div className={styles.btn}>
                                        <a href="#href" className='text-black'>
                                            Read More
                                            <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.cardBottomImg}>
                                        <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                    </div>
                                    <div className={styles.cardbottomContent}>
                                        <div className='d-flex align-items-center gap-2 pb-1'>
                                            <h3 className='fontsfregular'>Nick Willford</h3>
                                            <Image src={verifies} alt='bitswits' width={13} height={13} />
                                        </div>
                                        <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className='p-2'>
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <Image src={BlogImage3} alt='Bitswits' className='img-fluid w-100' />
                                </div>
                                <div className={styles.cardContent}>
                                    <p className='fontsfregular'>General</p>
                                    <h5 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                        Your Path To Unstoppable Progress!</h5>
                                    <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                    <div className={styles.btn}>
                                        <a href="#href" className='text-black'>
                                            Read More
                                            <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.cardBottomImg}>
                                        <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                    </div>
                                    <div className={styles.cardbottomContent}>
                                        <div className='d-flex align-items-center gap-2 pb-1'>
                                            <h3 className='fontsfregular'>Nick Willford</h3>
                                            <Image src={verifies} alt='bitswits' width={13} height={13} />
                                        </div>
                                        <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default BlogArticle;