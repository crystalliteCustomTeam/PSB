import React from 'react'

import Image from 'next/image';


const publishing = () => {
    return (
        <>
            <section className="py-[80px] bg-[#f2f2f2] md:py-20 md:px-5 sm:py-20 sm:px-5 xs:py-20 xs:px-5">
                <div className='container max-w-7xl lg:max-w-6xl'>
                    <div className='flex gap-5 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 items-center'>
                        <div className='basis-[50%] md:basis-[60%]'>
                            <div className=' xs:py-5'>
                                <h6 className='text-[30px] font-primary text-[#40BEE2] font-semibold sm:text-base xs:text-base'>Publishing</h6>
                                <h1 className='py-3 font-primary font-semibold leading-[45px] text-[40px] md:text-[35px] md:leading-[40px] sm:text-4xl sm:w-[100%]  xs:text-3xl xs:w-[100%] '>
                                    We Offer You a Chance to Expand Your Book’s Reputation on a Global Level
                                </h1>
                                <p className='xs:w-[100%]'>
                                    We are a premium ghostwriting services company founded to provide excellent writing services. At Barnett Ghostwriting, we take a customer-centric approach to assist you in establishing yourself as a professional writer by providing high-quality content copies, guaranteeing outstanding results and a massive online reach.
                                </p>
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
