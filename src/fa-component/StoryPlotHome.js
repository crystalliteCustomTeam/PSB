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
            <section className='relative bg-white mr-lg:h-[600px] mr-lg:mb-[80px] '>
                <div className="before:bg-[url('../../public/ahsan/students-working-study-group.png')] before:bg-no-repeat before:bg-cover before:mr-lg:h-[500px] before:z-auto before:mr-lg:block before:mr-xl:block before:sm:hidden before:xs:hidden before:backdrop-blur-md">
                    <div className='mr-container -!top-0 z-50 relative'>
                        <div className="storyplot grid mr-lg:grid-cols-2 mr-2xl:mt-[-400px] mr-lg:mt-[-430px]">
                            <div className='border-b-[1px] border-solid border-[#707070] mr-lg:pb-5 border-[80%]'>
                                <div className="md:text-left sm:text-left xs:text-left z-10">
                                    <h4 className='text-[16px] font-bold font-primary text-primary mb-3 mr-lg:!text-white text-black'>Whether Bookshelf or Amazon Book Publishing</h4>
                                    <h2 className='mr-lg:!text-[45px] mr-md:!text-[35px] text-[35px] font-bold font-primary text-secondary leading-normal mr-lg:!text-white mr-lg:mb-5 text-black'>First-Class Book Publishers </h2>
                                    <p className='mr-xl:text-[14px] mr-lg:text-[13px] font-secondary txt-secondary mr-lg:!text-white text-black'>Best Selling Publisher offers a wide range of traditional publishing services for businesses of all sizes and authors of all genres. We have a team of experienced professionals who can help you through every step of the publishing process, from editing and formatting to publication and distribution. We also offer a variety of custom publishing options to fit your specific needs, such as digital publishing services and Amazon publishing services. </p>
                                    <br className='mr-md:block'/>
                                    <p className='mr-xl:text-[14px] mr-lg:text-[13px]  font-secondary txt-secondary mr-lg:!text-white text-black'> Best Selling Publisher is a cutting-edge books publisher that offers a suite of services designed to help authors navigate the ever-changing world of publishing. Our book publishing services are tailored to meet the needs of today's authors. From providing guidance on self-publishing to offering and publishing support, we are committed to helping authors succeed in an increasingly competitive marketplace. What sets Best Selling Publisher apart from other publishers is our commitment to quality. We work with each author on an individual basis, providing the personalized attention that is so essential to success in today's publishing landscape.
                                    </p>
                                </div>
                                <div className='mr-md:flex mr-sm:block mr-xs:block mr-sm:text-center mr-xs:text-center mr-lg:!mt-44 mr-2xl:!mt-32 gap-5 items-center w-[80%] md:m-auto md:w-[70%] sm:w-[100%] xs:w-[100%] mr-md:px-5 px-10 justify-center'>
                                    <Image
                                        src={image1}
                                        qualit={95}
                                        width={100}
                                        height={50}
                                        className='img-fluid m-auto mr-sm:!mb-[10px] mr-xs:!mb-[10px] hover:scale-100'
                                    />
                                    <div className=''>
                                        <h4 className='font-bold text-[16px]'>Your Book Deserves To Be Written!</h4>
                                        <p className='text-[13px]'>Now that you have an expert ghostwriting, editing,
                                            and publishing agency. What are you waiting for?</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`md:m-auto md:w-[70%] mr-md:my-[0px] sm:w-[100%] xs:w-[100%] sm:my-[50px] xs:my-[50px]`}>
                                <MRHeroForm classes="w-[100%]"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bookshelf