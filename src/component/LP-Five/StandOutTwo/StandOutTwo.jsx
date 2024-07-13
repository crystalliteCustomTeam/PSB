import { MRCTA } from "@/component";
import Image from "next/image";
import Book from "media/book-marketing-company/book.png"
const StandOut = ({ title, desc, bannerBg }) => {
    return (
        <section>
            <div className="relative z-10 mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans">
                <Image src={bannerBg} alt="StandOutBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority={true} />
                <div className="mr-container">
                    <div className="py-[20px]">
                        <div className="grid grid-cols-12 items-center">
                            <div className="mr-lg:col-span-7 text-white col-span-8 mr-sm:ps-12 px-5 mr-sm:text-start text-justify">
                                <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-[600] secondary mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                                <p className="text-base font-normal leading-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                                <MRCTA text="Book An Appointment" classes="__animatedPing bg-black text-white mt-6 hover:bg-transparent hover:border-black hover:text-secondary-100" handle="onclick='parent.LC_API.open_chat_window();return false;'" />
                            </div>
                            <div className="col-span-5 relative">
                                <Image src={Book} alt="books" className="block mx-auto mr-xl:absolute mr-2xl:left-0 mr-xl:-left-8 mr-xl:-top-[280px] mr-xl:max-w-[700px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StandOut;