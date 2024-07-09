import ServiceIcon1 from "media/lp-four/services/1.svg"
import ServiceIcon2 from "media/lp-four/services/2.svg"
import ServiceIcon3 from "media/lp-four/services/3.svg"
import ServiceIcon4 from "media/lp-four/services/4.svg"
import Image from "next/image"
const WhyChoose = () => {
    return (
        <section>
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-2xl:w-[65%] mr-xl:w-[75%] mr-lg:w-[90%] w-full mx-auto">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-medium leading-normal mb-3">Why Choose Our Book Publishing Company?</h2>
                        <p className="mr-md:text-base text-sm font-normal leading-normal">Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.</p>
                    </div>
                    <div className="grid mr-lg:grid-cols-4 mr-md:grid-cols-2 grid-cols-1 items-center mr-md:gap-x-5 gap-5 mr-md:mt-16 mt-10">
                        {
                            [
                                [ServiceIcon1, "Quality Work", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence."],
                                [ServiceIcon2, "Timely Delivery", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence."],
                                [ServiceIcon3, "Customer Satisfaction", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence."],
                                [ServiceIcon4, "100% Ownership", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence."],
                            ].map(([icon, title, desc], i) => (
                                <div className="text-center hover:bg-black py-6 mr-2xl:px-4 px-2 rounded-xl transition-all duration-500 ease-in-out group">
                                    <Image src={icon} alt="icons" className="block mx-auto bg-primary-100 py-4 w-max mb-4 px-5 rounded-full" />
                                    <h4 className="text-xl group-hover:text-white font-medium leading-tight mb-3">{title}</h4>
                                    <p className="text-base leading-normal group-hover:text-white font-normal">{desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhyChoose;