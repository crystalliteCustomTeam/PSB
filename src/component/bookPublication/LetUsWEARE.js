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
                                
                                <h2 className='py-4 font-primary font-semibold leading-[50px] text-[45px]  xs:text-4xl xs:w-[90%] '>
                                    Our Book Publishing Experts Will Work to Fine-Tune Your Book
                                </h2>
                                <p className='xs:w-[90%] w-[90%] mb-5'>
                                At Best Selling Publisher, we specialize in comprehensive book publishing services designed to bring your manuscript to life and get it into the hands of eager readers we're dedicated to crafting legacies. Here’s why countless authors have trusted us to navigate their publishing journey:
                                </p>
                                <ul className="grid grid-cols-2 gap-x-5 xs:grid-cols-1 md:w-[100%] xs:w-[100%] md:mb-10">
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#707070] py-3'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p><span className='text-[#00c0e4]'>Expertise Across Genres: <br></br> </span>Whether your masterpiece is fiction, non-fiction, or anything in between, our team of seasoned editors, designers, and marketing strategists bring your story to life, ensuring it resonates with your target audience.</p>

                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#707070] py-3'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p> <span className='text-[#00c0e4]'>Customized Publishing Plans: <br></br> </span>Understanding that each book is unique, we offer personalized publishing services tailored to meet your specific needs. From Amazon book publishing to global distribution, we customize our approach to maximize your book's success.</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#707070] py-3'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p><span className='text-[#00c0e4]'>Unparalleled Amazon Presence:<br></br> </span>Leveraging our deep understanding of Amazon book publishing services, we optimize your book’s visibility and sales potential, helping you climb the ranks and achieve bestseller status.</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#707070] py-3'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p><span className='text-[#00c0e4]'>Comprehensive Marketing Support: <br></br></span>Our innovative marketing solutions extend your book's reach, engaging readers across multiple platforms and turning visibility into sustained success</p>
                                    </li>
                                    
                                </ul>
                                <p className='xs:w-[90%] w-[90%] mt-5 mb-5'>Join the ranks of our satisfied authors and let us transform your publishing aspirations into achievements</p>
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
