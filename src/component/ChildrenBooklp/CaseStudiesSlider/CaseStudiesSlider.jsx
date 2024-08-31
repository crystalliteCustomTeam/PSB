import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from '../EmblaSliderArrows/EmblaSliderArrows'
import styles from "./styles.module.css"
import Image from 'next/image'
// Images
import Book1 from "media/children-book-lp/hero-book-4.svg"
import Star from "media/children-book-lp/star.svg"

const CaseStudiesSlider = () => { 
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);
    const sliderData = [
        {
            title: <>In Your <span class='font-normal text-[#40BEE2]'>Own</span> Back Yard</>,
            desc: 'Bonds of Blood" explores the unbreakable ties forged in the heat of battle and the sacrifices made in the name of loyalty and family. This gripping narrative delves into the complex relationships that define both war and survival.',
            number: "01",
            lidescs: [
                { desc: "Unyielding Loyalty: Discover the powerful connections that drive soldiers to protect one another against all odds." },
                { desc: "Sacrifice and Survival: Witness the personal costs of war as characters grapple with life-altering decisions." },
                { desc: "Family and Brotherhood: Explore the deep bonds that extend beyond blood, shaping identities in the midst of conflict." }
            ],
            image: Book1,
        },
        {
            title: <>In Your <span class='font-normal text-[#40BEE2]'>Own</span> Back Yard</>,
            desc: 'Bonds of Blood" explores the unbreakable ties forged in the heat of battle and the sacrifices made in the name of loyalty and family. This gripping narrative delves into the complex relationships that define both war and survival.',
            number: "02",
            lidescs: [
                { desc: "Unyielding Loyalty: Discover the powerful connections that drive soldiers to protect one another against all odds." },
                { desc: "Sacrifice and Survival: Witness the personal costs of war as characters grapple with life-altering decisions." },
                { desc: "Family and Brotherhood: Explore the deep bonds that extend beyond blood, shaping identities in the midst of conflict." }
            ],
            image: Book1,
        },
    ]
    return (
        <section>
            <div className={styles.embla}>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className={`${styles.embla__container}`}>
                        {sliderData.map((e, i) => (
                            <div className={`${styles.embla__slide}`} key={i}>
                                <div className={`grid grid-cols-12 gap-5`}>
                                    <div className="mr-lg:block hidden col-span-12 mr-lg:col-span-4">
                                        <div className="bg-[#40BEE2] pt-10 pb-7 px-0 rounded-[15px] mr-xl:w-9/12 ml-auto">
                                            <Image src={Book1} alt='Book' className='mx-auto shadow-2xl' />
                                            <div className="flex items-center justify-center gap-2 pt-4">
                                                <Image src={Star} alt='Star' className='w-[25px] h-[25px]' />
                                                <Image src={Star} alt='Star' className='w-[25px] h-[25px]' />
                                                <Image src={Star} alt='Star' className='w-[25px] h-[25px]' />
                                                <Image src={Star} alt='Star' className='w-[25px] h-[25px]' />
                                                <Image src={Star} alt='Star' className='w-[25px] h-[25px]' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mr-lg:col-span-8">
                                        <div className='bg-[#282828] px-4 mr-lg:px-9 py-9 mr-md:py-6 rounded-[15px] h-full flex items-center justify-center mr-xl:w-11/12 relative'>
                                            <div className="number absolute top-[15px] mr-md:top-[20px] right-[20px] mr-md:right-[40px]">
                                                <p className='text-[13px] mr-md:text-[16px] text-[#8D8D8D] leading-normal'><span className='text-[#40BEE2]'>{e.number}</span> / 02</p>
                                            </div>
                                            <div>
                                                <h3 className='text-[25px] mr-lg:text-[30px] leading-normal text-white font-semibold mb-3'>{e.title}</h3>
                                                <p className='mr-md:text-lg text-sm font-normal leading-normal text-white'>Bonds of Blood" explores the unbreakable ties forged in the heat of battle and the sacrifices made in the name of loyalty and family. This gripping narrative delves into the complex relationships that define both war and survival.</p>
                                                <ul className='pt-5'>
                                                    {e.lidescs.map((data, index) => (
                                                        <li key={index} className="mr-md:text-[17px] text-sm font-normal leading-normal pr-[25px] text-[#C7C7C7] relative before:content-[''] before:absolute before:top-[7px] before:left-[-24px] before:w-[10px] before:h-[10px] before:bg-[#40BEE2] before:rounded-full ml-[20px] mr-md:ml-[25px] mb-4">
                                                            {data.desc}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className={styles.embla__controls}>
                    <div className={styles.embla__buttons}>
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CaseStudiesSlider;