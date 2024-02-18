import React from 'react'
import TABII from '../blogsContent'


const TabNavigationGenre = () => {
    return (
        <>
            <section className="py-[40px] xs:py-10 font-secondary">
                <div className="container max-w-7xl relative z-10 ">
                    <div className="text-center justify-content-center ">
                        <h6 className='font-semibold text-[30px] leading-tight font-primary text-[#40BEE2]'>Why we are exceptional </h6>
                        <h2 className='text-5xl font-primary font-bold capitalize sm:text-4xl xs:text-3xl py-3'>The greatness of our team cannot be understated</h2>
                        <p className='max-w-[90%] mx-auto my-5 sm:text-justify text-[#05193c] font-normal text-[17px]'>
                        The fact of the matter is our team has worked on every single genre in existence and even helped in custom tailored genres that are not easily able to fit into one box, it's the adaptability, persistence and perseverance of our team that has made it what it is today. For example our fiction ghostwriter for hire has writer some of the best written stories and books that have compelled people to even make movies based on their story. Our writers are atight knit team of strong minded and educated people who know how to bring about great results in short to long deadlines depending on the scope of the project.                        </p>
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
