import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Formdata from '@/fa-component/Formdata';
import { MRHeroForm } from '@/component';
// // mport { Fade } from "react-awesome-reveal";
import image1 from '../../public/ahsan/image1.png'
const Bookshelf = () => {


    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };


    return (
        <>
            <section className='relative bg-white mr-xl:h-[650px] '>
                <div className="relative before:block before:bg-[url('../../public/ahsan/students-working-study-group.png')] before:bg-no-repeat before:bg-cover before:h-[600px] before:z-auto mr-lg:block mr-xl:block ">
                    <div className='mr-container -!top-0'>
                        <div className="storyplot grid mr-xl:grid-cols-2 mr-xl:-mt-[400px]">
                            <div>
                                <div className="">
                                    <h4 className='text-[16px] font-bold font-primary text-primary mb-3 !text-white'>Discuss Your Ideas</h4>
                                    <h2 className='text-[45px] font-bold font-primary text-secondary leading-normal !text-white mb-5'>Do You Have A Story Plot <br /> In Mind? Tell Us About It!</h2>
                                    <p className='font-15 font-secondary txt-secondary mb-5 !text-white'>We value your time and energy, which is why we're here to help you transform your
                                        narrative into a beautifully written book.</p>
                                </div>
                                <div className='flex mt-44 gap-5 items-center w-[80%]'>
                                    <Image
                                        src={image1}
                                        qualit={95}
                                        width={100}
                                        height={50}
                                    />
                                    <div className=''>
                                        <h4 className='font-bold'>Your Book Deserves To Be Written!</h4>
                                        <p className='font-semibold'>Now that you have an expert ghostwriting, editing,
                                            and publishing agency. What are you waiting for?</p>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <MRHeroForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bookshelf