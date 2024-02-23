import React from 'react'
import Image from 'next/image';
import Woman from "../../../public/imageAR/woman-writing-.png"
const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
        window.LiveChatWidget.call('maximize');
    }
};
const creativeGhostWriters = () => {
    return (
        <>
            <section className="our-bringing6 mr-xl:py-24 mr-lg:py-20 mr-md:py-14 py-10">
                <div className="mr-container mx-auto font-secondary">
                    <div className="text-center mb-5 heading">
                        <h6 className="text-[30px] font-primary text-[#40BEE2] font-semibold">
                            Our Creative Ghostwriters,
                        </h6>
                        <h2 className='text-[40px] font-primary sm:text-4xl font-bold py-1'>
                            Bringing Your Imagination To Life.
                        </h2>
                        <p className="mt-2 max-w-[70%] mx-auto sm:text-justify sm:max-w-[88%] xs:max-w-[95%]">
                            You may have an idea for the next best-seller, but you may not have the time or expertise to write it yourself. Our platform meets all of the requirements and offers a diverse range of writing styles, including:
                        </p>
                    </div>
                    <div className="grid grid-cols-2 items-center px-auto md:grid-cols-1 sm:grid-cols-1 sm:px-5 sm:text-justify xs:text-justify xs:grid-cols-1 ">
                        <div className='px-4 '>
                            <ul className=" items-center pt-5">
                                <li className="mb-4">
                                    <h4 className="text-xl font-semibold font-primary mb-1">
                                        Fiction
                                    </h4>
                                    <p className="text-[16px]">
                                        Our fiction ghostwriters will assist you in creatively expressing your ideas into enticing literacy that will captivate your audience. All aspects of a story are considered, particularly the author’s major plot and characters.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h4 className="text-xl font-semibold font-primary mb-1">
                                        Informative
                                    </h4>
                                    <p className="text-[16px]">
                                        Our ghostwriters comprehend the nuance of your text. They ensure their information is reliable and well-acknowledged worldwide, under the available data and facts.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h4 className="text-xl font-semibold font-primary mb-1">
                                        Memoir
                                    </h4>
                                    <p className="text-[16px]">
                                        Our ghostwriters have been trained to write memoirs, not to confuse them with autobiographies. Furthermore, they cherish your sentiments and emotions and go to great lengths to turn your precious memories into a book.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h4 className="text-xl font-semibold font-primary mb-1">
                                        Children's Book
                                    </h4>
                                    <p className="text-[16px]">
                                        Our well-trained and experienced writers are well-versed in all aspects of children’s books. They use their ingenuity to write classic subjects that young minds can understand, with vibrant graphics that keep them hooked.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h4 className="text-xl font-semibold font-primary mb-1">
                                        Self Help Book
                                    </h4>
                                    <p className="text-[16px]">
                                        We allow your ideas to reach the right audiences and serve your experiences to be their holy grail in the relevant endeavor.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h4 className="text-xl font-semibold font-primary mb-1">
                                        Biography
                                    </h4>
                                    <p className="text-[16px]">
                                        Our expert writers are keenly interested in learning about your subjects’ stories, holding the skills and expertise to provide you with well-written content for whoever you want to write about. They also conduct extensive research through various channels such as newspapers, blogs, and interviews to ensure they use correct facts and figures.
                                    </p>
                                </li>
                            </ul>
                            <div className='mx-auto '>
                                <div className="w-[60%] grid grid-cols-2 grid-rows-1 gap-x-6 py-5 relative sm:w-[80%] xs:w-[100%]">
                                    <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                                    <a onClick={openLiveChat} href="#" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-10 pl-5 xs:justify-center xs:items-center">
                            <Image quality={95} src={Woman} alt="fiction ghostwriting services" width={1000} height={1000} />
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default creativeGhostWriters
