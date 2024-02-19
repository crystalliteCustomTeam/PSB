import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Formdata from '@/fa-component/Formdata';
// // mport { Fade } from "react-awesome-reveal";

const Bookshelf = () => {


    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
          window.LiveChatWidget.call('maximize');
        }
      };


    return (
        <>
            <section className={styles.bookshelfFlod}>
                <Container fluid className='px-md-5'>
                    <Row className={`${styles.bookshelfRow} justify-content-between`}>
                        <Col xl={6}>
                                <div className={styles.bookshelfTxt}>
                                    <h4 className='font-24 fw-600 font-primary txt-primary mb-3'>Whether Bookshelf or Amazon Book Publishing</h4>
                                     
                                    <h2 className='font-50 fw-700 font-primary txt-secondary mb-3'>First-Class Traditional<br className='d-none d-md-block' /> Book Publishers</h2>
                                    <p className='font-15 font-secondary txt-secondary mb-3'>Best Selling Publisher offers a wide range of traditional publishing services for businesses of all sizes and authors of all genres. We have a team of experienced professionals who can help you through every step of the publishing process, from editing and formatting to publication and distribution. We also offer a variety of custom publishing options to fit your specific needs, such as digital publishing services and Amazon publishing services.</p>

                                    <p className='font-15 font-secondary txt-secondary'>Best Selling Publisher is a cutting-edge books publisher that offers a suite of services designed to help authors navigate the ever-changing world of publishing. Our book publishing services are tailored to meet the needs of today's authors. From providing guidance on self-publishing to offering and publishing support, we are committed to helping authors succeed in an increasingly competitive marketplace. What sets Best Selling Publisher apart from other publishers is our commitment to quality. We work with each author on an individual basis, providing the personalized attention that is so essential to success in today's publishing landscape.</p>
                                    <div className={`${styles.bttns} mt-5`}>
                                        <Link className='btns btnPrimary' onClick={openLiveChat} href="#">Let's discuss</Link>
                                        <Link className='btns btnSecondary' href="tel:800-781-9093">800-781-9093</Link>
                                    </div>
                                </div>
                            
                        </Col>
                        <Col xl={6}>
                           

                                <Formdata />
                            

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Bookshelf