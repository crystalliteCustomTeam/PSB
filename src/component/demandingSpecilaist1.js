import React from 'react'
import Image from 'next/image'
import { MRCTAGroup } from '.'


const demandingSpecilaist = (props) => {
    return (
        <>
            <div>
                <section className='font-secondary mr-2xl:py-[80px] mr-xl:py-[80px] py-[40px]'>
                    <div className='mr-container m-auto py-24 grid grid-cols-2 md:grid-cols-1 grid-rows-1 md:px-6 sm:grid-cols-1 sm:px-5 xs:grid-cols-1 xs:grid-rows-1 xs:py-10 xs:px-2 items-center'>

                        <div>
                            <div className='m-5 z-10 relative'>
                                <h6 className='text-[30px] text-[#40BEE2] font-semibold mb-3 sm:text-base xs:text-base font-primary'>Give Yourself The Experience Of</h6>
                                <h2 className='text-[50px] sm:text-[30px] xs:text-[30px] font-primary font-bold leading-tight'>{props.title}
                                </h2>
                                <p className=' text-[16px] pt-3'>{props.desc}</p>
                            </div>
                            <div className='md:mt-[0px] sm:mt-[40px] xs:mt-[40px] relative z-auto' >
                                <div className="container-xl max-w-7xl lg:max-w-6xl justify-center mx-auto ml-5 pr-5 xs:pr-0">
                                    <h3 className='text-white text-[25px] md:text-[20px] font-normal font-primary w-80 bg-[#000] py-1 px-5 text-center demandingheading'>
                                        Our Demanded Services
                                    </h3>
                                    <div className="mt-4 flex xs:w-[100%] xs:flex-none md:grid md:grid-cols-2 xs:grid font-semibold xs:grid-cols-1 gap-x-10 py-4 md:space-x-0 md:px-2 xs:space-x-0 xs:px-4">
                                        <ul className='flex-auto inline-block text-[16px] space-y-3 justify-center items-center xs:text-[16px] xs:space-y-0'>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#40BEE2] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="eBook Writing" className='!h-[9px]' /><h5> E-Book Writing</h5> </li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#40BEE2] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Proofreading Services" className='!h-[9px]' /><h5>Proofreading Services</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#40BEE2] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Book Editing" className='!h-[9px]' /><h5>Book Editing</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#40BEE2] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Book Formatting" className='!h-[9px]' /><h5>Book Formatting</h5> </li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#40BEE2] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Video Trailer" className='!h-[9px]' /><h5>Video Trailer</h5></li>
                                        </ul>
                                        <ul className='flex-auto inline-block text-[16px] space-y-3 justify-center items-center xs:text-[16px] xs:space-y-0'>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#40BEE2] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="" className='!h-[9px]' /><h5>Audio Book</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#40BEE2] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="" className='!h-[9px]' /><h5>Book Cover Designing</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#40BEE2] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="" className='!h-[9px]' /><h5>Author's Website</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#40BEE2] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="" className='!h-[9px]' /><h5>Book Publishing</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#40BEE2] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="" className='!h-[9px]' /><h5>Book Marketing</h5></li>
                                        </ul>
                                       
                                    </div>
                                    <MRCTAGroup classes='mt-5'/>
                                </div>
                            </div>
                        </div>
                        <div className='pt-10 hidden mr-md:block '>
                            <Image quality={95} className='img-fluid m-auto' src="/ahsan/demand_specialist.png" width={1000} height={1200} alt='demanding-specialist' />
                        </div>
                    </div>
                    {/* <div className="bg-cover bg-no-repeat -mt-72 md:-mt-72 sm:-mt-48 p-0 h-96 relative z-10" style={{ backgroundImage: "url('/assets/images/newimg/exceptional-list.png')" }}> */}
                </section>

            </div>
        </>

    )
}

export default demandingSpecilaist
