import React from 'react'
import TABII from '../blogsContent'


const TabNavigationGenre = () => {
    return (
        <>
            <section className="py-[40px] xs:py-10 font-secondary">
                <div className="container max-w-7xl relative z-10 ">
                    <div className="text-center justify-content-center ">
                        <h6 className='font-semibold text-[30px] leading-tight font-primary text-[#40BEE2]'>Blogs</h6>
                        <h2 className='text-5xl font-primary font-bold capitalize sm:text-4xl xs:text-3xl py-3'>Our Center Of Learning</h2>
                        <p className='max-w-[90%] mx-auto mb-5 sm:text-justify text-[#05193c] font-normal text-[17px]'>
                        A place where you can be educated on matters of all things books!</p>
                    </div>
                </div>
                <div className="relative mb-10 text-white " >
                    <div className='max-w-7xl mx-auto py-10 xs:px-5'>
                        <TABII/>
                    </div>

                </div>
            </section>
        </>

    )
}

export default TabNavigationGenre
