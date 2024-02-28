import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Dreams.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const data = [
    {
        heading: "Amazon Publishing",
        para: "With this esteemed collaboration, you can gain access to Amazon's vast distribution network and cutting-edge publishing technology, ensuring their work reaches a global audience. We offer a diverse range of imprints covering various genres, including mystery, romance, science fiction, and non-fiction. You can count on Best Selling Publisher.",
        path: "/images/flods/amazon_publishing.png",
        alt: "Book Editing"
    },
    {
        heading: "Book Publishing",
        para: "Book publishing is the process of bringing your written works to the market for public consumption! Exciting isn’t it? It involves various stages, from acquiring manuscripts or ideas, editing, design, production, and distribution to marketing and sales. Publishers play a crucial role in curating and refining content, ensuring its quality and relevance to target your audience.",
        alt: "Book Writing"
    },
    {
        heading: "Digital Book Publishing",
        para: "You’re probably wondering how book publishing works. Here’s the thing: it leverages digital technologies to offer readers convenient access to a wide range of literary content on various devices. These include e-readers, tablets, and smartphones. Digital book publishing has revolutionized the traditional publishing industry, enabling you to reach global audiences.",
        path: "/images/flods/ebook_publishing.png",
        alt: "Article Publication"
    },
    {
        heading: "E-Book Publishing",
        para: "eBook publishing, a cornerstone of digital literature, involves the creation, distribution, and consumption of books in electronic format. Unlike traditional print publishing, eBook publishing eliminates the need for you to have physical copies. You can easily reach readers anywhere in the world. ",
        path: "/images/flods/book_marketing.png",
        alt: "E-Book Writing"
    },
    {
        heading: "Self-publishing",
        para: "Empowered authors like you can bring their literary creations directly to readers without the involvement of traditional publishing houses. This involves the author overseeing all aspects of the publishing process, including editing, formatting, cover design, and distribution.",
        path: "/images/flods/book_marketing.png",
        alt: "Book Marketing"
    },
    {
        heading: "Book Marketing",
        para: "Book marketing encompasses the strategic efforts to promote and sell a book to your target audience. It involves a wide range of activities to increase visibility, generate interest, and ultimately drive sales.",
        alt: "Children’s Book Publication"
    },
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
