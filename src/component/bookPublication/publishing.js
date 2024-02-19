import React from 'react'

import Image from 'next/image';


const publishing = () => {

    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
          window.LiveChatWidget.call('maximize');
        }
      };

    return (
        <>
            <section className="py-[80px] bg-[#f2f2f2] md:py-20 md:px-5 sm:py-20 sm:px-5 xs:py-20 xs:px-5">
                <div className='container max-w-7xl lg:max-w-6xl'>
                    <div className='flex gap-5 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 items-center'>
                        <div className='basis-[50%] md:basis-[60%]'>
                            <div className=' xs:py-5'>
                            <h2 className='py-3 font-primary font-semibold leading-[45px] text-[38px] md:text-[35px] md:leading-[40px] sm:text-4xl sm:w-[100%]  xs:text-3xl xs:w-[100%] '>
                                Maximize Your Book's Impact with Our Publishing Services
                                </h2>
                                <h3 className='text-[25px] font-primary text-[#40BEE2] font-semibold sm:text-base xs:text-base'>Global Publishing Excellence Awaits Your Book</h3>
                              
                                <p className='xs:w-[100%] mt-4'>
                                Step into the spotlight with Best Selling Publisher, your trusted book publishing company dedicated to amplifying authors' voices worldwide. We specialize in navigating the complexities of the publishing landscape to ensure your book achieves the recognition it deserves. From Amazon book publishing services to extensive distribution networks, our tailored approach positions your work in front of the right audience, both digitally and in print.
                                </p>
                            </div>
                            <div className='w-[75%] grid grid-cols-1 grid-rows-1 gap-x-5 py-5 md:w-[60%] sm:w-[90%] xs:w-[90%]'>
                                   
                                    <a onClick={openLiveChat} href="#" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Publish Your Book, Reach the World - Get Started!</a>
                                </div>
                        </div>
                        <div className='basis-[60%] md:basis-[40%]'>
                            <Image quality={95} src='/assets/images/newimg/graduation-cap-earth-globe.png' width={500} height={500} alt='Tablist Images' className='mx-auto hover:-translate-y-1 hover:scale-110' />
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default publishing
