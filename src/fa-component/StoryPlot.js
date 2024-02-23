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
            <section className='relative bg-white mr-xl:h-[600px] mr-xl:mb-[80px] '>
                <div className="before:bg-[url('../../public/ahsan/students-working-study-group.png')] before:bg-no-repeat before:bg-cover before:h-[500px] before:z-auto before:mr-lg:block before:mr-xl:block before:sm:hidden before:xs:hidden">
                    <div className='mr-container -!top-0'>
                        <div className="storyplot grid mr-md:grid-cols-2 mr-2xl:mt-[-400px] mr-lg:mt-[-430px]">
                            <div className='border-b-[1px] border-solid border-[#707070] mr-lg:pb-5 border-[80%]'>
                                <div className="md:text-center sm:text-center xs:text-center">
                                    <h4 className='text-[16px] font-bold font-primary text-primary mb-3 mr-lg:!text-white text-black'>Discuss Your Ideas</h4>
                                    <h2 className='text-[45px] font-bold font-primary text-secondary leading-normal mr-lg:!text-white mb-5 text-black'>Do You Have A Story Plot <br /> In Mind? Tell Us About It!</h2>
                                    <p className='text-[18px] font-secondary txt-secondary mb-5 mr-lg:!text-white text-black'>We value your time and energy, which is why we're here to help you transform your
                                        narrative into a beautifully written book.</p>
                                </div>
                                <div className='flex mr-lg:mt-44 mr-2xl:mt-32 gap-5 items-center w-[80%] md:m-auto md:w-[70%] sm:w-[100%] xs:w-[100%]'>
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
                            <div className={`md:m-auto md:w-[70%] md:my-[50px] sm:w-[100%] xs:w-[100%] sm:my-[50px] xs:my-[50px]`}>
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