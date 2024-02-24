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
                <div className="before:bg-[url('../../public/ahsan/students-working-study-group.png')] before:bg-no-repeat before:bg-cover before:h-[500px] before:z-auto before:mr-lg:block before:mr-xl:block before:mr-md:block before:sm:hidden before:xs:hidden">
                    <div className='mr-container'>
                        <div className="storyplot grid mr-md:grid-cols-2 mr-2xl:mt-[-360px] mr-lg:mt-[-400px] mr-md:mt-[-400px]">
                            <div className='mr-md:border-b-[1px] border-solid border-[#707070] mr-lg:pb-5 mr-sm:pb-5 mr-xs:pb-5 border-[80%]'>
                                <div>
                                    <h4 className='text-[16px] font-bold font-primary text-primary mb-3 mr-lg:!text-white mr-md:!text-white text-black'>Discuss Your Ideas</h4>
                                    <h2 className='mr-xl:!text-[45px] mr-lg:!text-[35px] text-[30px] font-bold font-primary text-secondary leading-normal mr-lg:!text-white mr-lg:mb-5 mr-md:!text-white text-black'>Do You Have A Story Plot <br /> In Mind? Tell Us About It!</h2>
                                    <p className='text-[18px] font-secondary txt-secondary mr-md:!mb-5 mb-3 mr-lg:!text-white mr-md:!text-white text-black'>We value your time and energy, which is why we're here to help you transform your
                                        narrative into a beautifully written book.</p>
                                </div>
                                <div className='mr-md:flex mr-md:bg-white mr-lg:bg-transparent mr-sm:block mr-xs:block mr-sm:text-center mr-xs:text-center mr-md:p-[16px] mr-lg:p-[0px] mr-xl:mt-44 mr-lg:mt-48 mr-2xl:mt-32  gap-5 items-center xl:w-[80%] justify-center'>
                                    <Image
                                        src={image1}
                                        qualit={95}
                                        width={100}
                                        height={50}
                                        className='img-fluid m-auto mr-sm:!mb-[10px] mr-xs:!mb-[10px] hover:scale-100 mr-md:hidden mr-lg:block'
                                    />
                                    <div className='mr-md:!text-left'>
                                        <h4 className='font-bold text-[16px] mr-xl:text-[20px]'>Your Book Deserves To Be Written!</h4>
                                        <p className='font-semibold'>Now that you have an expert ghostwriting, editing,
                                            and publishing agency. What are you waiting for?</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`m-auto w-full mr-xl:w-[70%]`}>
                                <MRHeroForm classes="!w-full mr-xl:!w-[100%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bookshelf