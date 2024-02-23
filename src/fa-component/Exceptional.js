import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Dreams.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const data = [
    {
        heading: "Book Editing",
        para: "Once your ideas are on paper, you need an expert’s eye to look for the red flags. Book editing can be a tiresome and redundant process for which we have experts running the show. Book Writing Expert enhances your book’s vocabulary and sentence formations, in order to provide your readers a refined product.",
        path: "/images/flods/amazon_publishing.png",
        alt: "Book Editing"
    },
    {
        heading: "Book Writing",
        para: "From our writing approach to phrasing selection, we're all about creating riveting stories of any length or type. Let us handle your project from beginning to end with absolute finesse since, when you have professionals like us on your team, no responsibility is too huge.",
        path: "/images/flods/book_publishing.png",
        alt: "Book Writing"
    },
    {
        heading: "Book Publishing Services",
        para: "Content creation has always been an automated process to us. Writing blogs and Articles and publishing them is an easy task for us. Our job doesn’t end once we’re done publishing, we also share it on multiple online platforms in order to gain traction to your content.",
        path: "/images/flods/digital_book_publishing.png",
        alt: "Book Publishing Services"
    },
    {
        heading: "Article Publication",
        para: "we provide high-quality Article Publication services to help our clients reach their target audiences. We have a team of experienced professionals knowledgeable in the latest Article Publication trends and technologies.",
        path: "/images/flods/ebook_publishing.png",
        alt: "Article Publication"
    },
    {
        heading: "Children’s Book Publication",
        para: "Publishing children's books is no easy undertaking. Even though the book is only a little over 100 pages long, not everything appeals to these tiny beings. It takes several rewrites and re-drafts to concisely express an idea with a clear message, and we are here to assist.",
        path: "/images/flods/self_publishing.png",
        alt: "Children’s Book Publication"
    },
    {
        heading: "E-Book Writing",
        para: "Professional eBook writing increases traffic, and our experienced authors are aware of the best practices for retaining readers through compelling word choice. When it comes to custom eBook writing services, we are the best choice. Try collaborating with us! You won't regret doing it!",
        path: "/images/flods/book_marketing.png",
        alt: "E-Book Writing"
    },
    {
        heading: "Children's Book Illustrations",
        para: "Kids can be picky and direct in their choices, but that doesn't make them impartial. When giving them books, make sure the illustrations and designs catch their interest, creating a reading experience they'll want to revisit.",
        path: "/images/flods/self_publishing.png",
        alt: "Children's Book Illustrations"
    },
    {
        heading: "Book Marketing",
        para: "Stop getting lost in the mix with our remarkable book marketing services! We advertise and promote your book in the most efficient way possible, taking it from the back of the shelf to the top of the bestseller list. We are the marketing & promotion specialists for the books you require.",
        path: "/images/flods/book_marketing.png",
        alt: "Book Marketing"
    }
]

const Exceptional = ({
    title,
    subtitle,
}) => {


    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };


    return (
        <>
            <section className={`${styles.dreams1Flod} py-5`}>
                <div className="mr-container px-md-3">
                <div className={`${styles.dreamsHead} text-center`}>
                                <h2 className='font-50 fw-700 font-primary txt-secondary mb-3' dangerouslySetInnerHTML={{ __html: title }} />
                                <p className='font-15 font-secondary txt-secondary mb-5' dangerouslySetInnerHTML={{ __html: subtitle }} />
                            </div>
                    <Row className={`${styles.dreamsRow} justify-content-center pt-4 pb-5 gy-4 gx-4 mr-xs:mx-3`}>
                        {data?.map((e, i) => (
                            <Col key={i} xl={4} lg={4} md={6} xxl={3} >
                                <div className={`${styles.ExceptionalCard} bg-white text-left position-relative`}>
                                    <div style={{
                                        position: "absolute",
                                        top: "-40px",
                                        borderRadius: "50%",
                                        width: "80px",
                                        height: "80px",
                                        fontSize: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "#40BEE2",
                                        color: "white",
                                        border: "2px solid #E2E2E2"
                                    }}>0{i + 1}</div>
                                    <h3 className='font-32 fw-700 font-primary txt-secondary1 pb-2'>{e.heading}</h3>
                                    <p className='font-15 font-medium font-secondary txt-secondary '>{e.para}</p>
                                </div>
                            </Col>
                        ))}
                        <div className={`${Bookshelf.bttns} dislpay-flex mt-5 justify-content-center`}>
                            <Link className='btns btnPrimary' onClick={openLiveChat} href="#">Let's discuss</Link>
                            <Link className='btns btnSecondary' href="tel:800-781-9093">800-781-9093</Link>
                        </div>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Exceptional
