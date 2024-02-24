import React from 'react'

const manuscript = () => {
    return (
        <>
            <section className=''>
                <div className='mr-container mr-xl:!py-28 mr-lg:py-20 mr-md:py-14 py-10 font-secondary'>
                    <div className='grid grid-cols-2 gap-x-20 grid-rows-1 justify-between sm:grid-cols-1 xs:grid-cols-1 sm:gap-10 xs:justify-normal xs:gap-10 '>
                        <div>
                            <h6 className='text-[30px] text-[#40BEE2] capitalize font-primary font-semibold md:w-[80%]'>Our outstanding approach to writing</h6>
                            <h3 className='font-primary leading-[50px] lg:py-5 font-bold text-[40px] sm:text-3xl sm:py-5 xs:text-3xl md:leading-[45px] md:py-3 xs:py-5'>We Will Create a Manuscript <br className='mr-xl:block hidden'/> Free of Errors</h3>
                            <p className='text-base text-justify'>Our writers work tirelessly to produce a manuscript that is not only devoid of errors but also reads well and requires much less micromanagement in the form of revisions.</p>
                        </div>
                        <div>
                            <h6 className='text-[30px] text-[#40BEE2] capitalize font-primary font-semibold'>Our outstanding publishing expertise</h6>
                            <h3 className='font-primary font-bold text-[40px] lg:py-5 leading-[50px] xs:w-[100%] sm:text-3xl sm:py-5 xs:text-3xl md:leading-[45px] md:py-3 xs:py-5'>Publishing Made Easy With Our Services</h3>
                            <p className='text-base text-justify'>Publishing is the hardest aspect of delivering a story to its audience due to the complexities of publishing in this day and age. The older system of having large publishers who are entrenched in the industry and working with them is not accessible to everyone, which is why our convenient in-house publishing allows ease so you don’t have to worry about a single thing.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default manuscript
