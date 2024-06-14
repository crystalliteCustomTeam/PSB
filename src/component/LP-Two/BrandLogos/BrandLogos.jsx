import Image from "next/image";
import BrandLogos1 from "media/lp-two-images/brandLogos/1.svg"
import BrandLogos2 from "media/lp-two-images/brandLogos/2.svg"
import BrandLogos3 from "media/lp-two-images/brandLogos/3.svg"
const BrandLogos = ({title,desc}) => {
    return (
        <section>
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-xl:w-[75%] mr-md:w-[90%] w-full mx-auto mr-lg:mb-[80px] mr-md:mb-[40px] mb-[40px]">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium" dangerouslySetInnerHTML={{__html : title}}/>
                        <p className="mr-md:text-base text-sm leading-normal font-normal" dangerouslySetInnerHTML={{__html : desc}}/>
                    </div>
                    <div className="mr-md:mb-[50px] mb-[30px]">
                        <Image src={BrandLogos1} alt="BrandLogos" className="block mx-auto" />
                    </div>
                    <div className="mr-md:mb-[50px] mb-[30px]">
                        <Image src={BrandLogos2} alt="BrandLogos" className="block mx-auto" />
                    </div>
                    <div>
                        <Image src={BrandLogos3} alt="BrandLogos" className="block mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BrandLogos;