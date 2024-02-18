import React from 'react'

import Image from 'next/image'

const bookWriting = (props) => {
    return (
        <>
          <section className=" py-20 sm:py-0 xs:py-10 text-[#1d1d1f] font-secondary">
                <div className="justify-center items-center z-20 relative py-20 md:pt-5 md:pb-[500px] xs:py-5 md:z-20 md:relative" >
                    <div className='max-w-7xl lg:max-w-6xl container mx-auto flex items-center justify-center sm:grid sm:grid-cols-1 sm:px-10 xs:grid-cols-1 md:py-0 md:px-5 xs:px-4 xs:w-[100%]'>
                        <div className='basis-[50%] md:basis-[100%] sm:basis-[100%] xs:basis-[100%]'>
                            <div className="">
                                <h6 className='text-[30px] font-primary text-[#40BEE2] font-semibold mb-3'>
                                    Are you in pursuit of
                                </h6>
                                <h2 className='text-[40px] font-primary font-semibold xs:font-semibold xs:text-[40px] capitalize leading-tight mb-3'>
                                    {props.title}
                                </h2>
                            </div>
                            <p className=' text-[16px] text-[#000] mb-2 leading-6 pb-2'>
                                {props.desc}
                            </p>

                            <p className=' text-[16px] text-[#000] mb-4 leading-6 pb-2'>
                                {props.descs}
                            </p>
                            <ul className='space-y-3 mt-4 lg:w-[90%] w-full'>
                                <li className='flex space-x-4 items-center border-b border-[#40BEE2] pb-2'>
                                    <Image quality={95} src="/assets/images/newimg/color-check2.png" alt="color-check" width={9} height={9} className='h-[9px] w-[9px]' />
                                    <h5 className='font-medium text-[18px] xs:text-[14px]'>
                                        Being Published On All Online Platforms, Such As Kindle.
                                    </h5>
                                </li>
                                <li className='flex space-x-4 items-center border-b border-[#40BEE2] pb-2'>
                                    <Image quality={95} src="/assets/images/newimg/color-check2.png" alt="color-check" width={9} height={9} className='h-[9px] w-[9px]' />
                                    <h5 className='font-medium text-[18px] xs:text-[14px]'>Fast and affordable self-publishing.</h5>
                                </li>
                                <li className='flex space-x-4 items-center border-b border-[#40BEE2] pb-2'>
                                    <Image quality={95} src="/assets/images/newimg/color-check2.png" alt="color-check" width={9} height={9} className='h-[9px] w-[9px]' />
                                    <h5 className='font-medium text-[18px] xs:text-[14px]'>Additions, revisions, and re-editions!</h5>
                                </li>
                            </ul>
                        </div>
                        <div className="basis-[60%] xs:hidden md:hidden">
                            <Image quality={95} width={1500} height={700} alt='' src="/assets/images/newimg/industry-section.png" className=" top-10 right-0 xs:relative xs:float-none xs:w-[100%] xs:left-0" />
                        </div>
                    </div>


                </div>
            </section>
        </>

    )
}

export default bookWriting
