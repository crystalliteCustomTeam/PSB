import React from 'react'
import styles from '@/styles/Enlisted.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import before from 'media/images/flods/enlisted-before.png'
import after from 'media/images/flods/enlisted-after.png'
import mid from 'media/images/flods/enlisted-mid.png'
import Link from 'next/link';
const PublishingNewComponent = () => {
    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
          window.LiveChatWidget.call('maximize');
        }
      };
    return (
        <>
            <section className={`${styles.enlistedSlideWhite} bg-white `}>
                <Container className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={10}>
                            <div className={`${styles.enlistedHead} text-center`}>
                                <h4 className='font-30 font-primary text-secondary-100'>Enlist Yourself with the All-Time Best  </h4>
                                <h2 className='font-50 fw-500 font-primary text-secondary-100 mb-3'>Your book deserves only the <br/> <span className='bg-secondary-100 color-white p-1 mt-2 d-block house'> Best Selling Publishers.</span></h2>
                            </div>

                            <div className="bttns1black mt-4 mb-5 mb-md-0">
                                <Link className="btns btnBlack !bg-primary-100" onClick={openLiveChat} href="#">Get Onboard </Link>
                                <Link className="btns btnTransprnt !text-secondary-100" href="tel:800-781-9093">(800) 781-9093</Link>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default PublishingNewComponent
