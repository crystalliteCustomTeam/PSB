import React from 'react'
import Image from 'next/image'

const demandingSpecilaist = () => {
    return (
        <>
            <section className="py-[80px] sm:px-8 xs:px-8">
                <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl'>
                    <div className='flex gap-5 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1'>
                        <div className='basis-[40%] md:hidden sm:hidden xs:hidden'>
                            <Image quality={95} src='/assets/images/newimg/publication-section.png' width={400} height={500} className='mx-auto hover:-translate-y-1 hover:scale-110' alt="publication-section" />
                        </div>
                        <div className='basis-[60%] md:basis-[100%]'>
                            <div className=' xs:py-5'>
                                <h6 className='text-[30px] font-primary text-[#40BEE2] font-semibold'>Our amazing team</h6>
                                <h1 className='py-4 font-primary font-semibold leading-[50px] text-[45px]  xs:text-4xl xs:w-[90%] '>
                                    Our Book Publishing Experts Will Work to Fine-Tune Your Book
                                </h1>
                                <p className='xs:w-[90%] w-[90%] mb-5'>
                                    Our experienced ghostwriters and publishing experts are here to guide you through the entire process of getting your book published. At Barnett ghostwriting, we understand that publishing a book is a journey. We offer a comprehensive range of services to ensure your book receives the attention and care it deserves:
                                </p>
                                <ul className="grid grid-cols-2 gap-x-5 xs:grid-cols-1 md:w-[100%] xs:w-[100%] md:mb-10">
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#707070] py-3'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p><span className='text-[#00c0e4]'>Ghostwriting -</span>Our team of talented ghostwriters will work closely with you.</p>

                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#707070] py-3'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p> <span className='text-[#00c0e4]'>Editing and Proofreading - </span>Our experienced editors will thoroughly review your manuscript.</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#707070] py-3'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p><span className='text-[#00c0e4]'>Design and Layout - </span>Our designers will create a stunning book cover.</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#707070] py-3'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p><span className='text-[#00c0e4]'>Publishing Assistance -</span>We will guide you through the publishing process.</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#707070] py-3'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p><span className='text-[#00c0e4]'>Marketing and Promotion - </span> Once your book is published, we’ll assist you with marketing.</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#707070] py-3'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p><span className='text-[#00c0e4]'>Distribution - </span>We’ll work to ensure your book is available in various formats.</p>
                                    </li>
                                </ul>
                                <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[60%] sm:w-[90%] xs:w-[90%]'>
                                    <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                                    <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default demandingSpecilaist
