import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '../EmblaSliderArrows/EmblaSliderArrows'
import styles from "./styles.module.css"
import Banner from "media/lp-two-images/bannerBG.png"
import Mockup1 from "media/lp-two-images/bookMockups/1.png"
import Mockup2 from "media/lp-two-images/bookMockups/2.png"
import Mockup3 from "media/lp-two-images/bookMockups/3.png"
import Mockup4 from "media/lp-two-images/bookMockups/4.png"
import Mockup5 from "media/lp-two-images/bookMockups/5.png"
import Mockup6 from "media/lp-two-images/bookMockups/6.png"
import Mockup7 from "media/lp-two-images/bookMockups/7.png"
import Mockup8 from "media/lp-two-images/bookMockups/8.png"
import Mockup9 from "media/lp-two-images/bookMockups/9.png"
import Mockup10 from "media/lp-two-images/bookMockups/10.png"
import Mockup11 from "media/lp-two-images/bookMockups/11.png"
import Mockup12 from "media/lp-two-images/bookMockups/12.png"
import Mockup13 from "media/lp-two-images/bookMockups/13.png"
import Mockup14 from "media/lp-two-images/bookMockups/14.png"
import Mockup15 from "media/lp-two-images/bookMockups/15.png"
import Mockup16 from "media/lp-two-images/bookMockups/16.png"
import Mockup17 from "media/lp-two-images/bookMockups/17.png"
import Mockup18 from "media/lp-two-images/bookMockups/18.png"
import Mockup19 from "media/lp-two-images/bookMockups/19.png"
import Image from 'next/image'
const Bookmockups = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <section>
            <div className="relative z-10 mr-md:py-[10px] py-[40px] font-sans">
                <Image src={Banner} alt="mockupsBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority />
                <div className="mr-container">
                    <div className={styles.embla}>
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className={styles.embla__container}>
                                {
                                    [
                                        [Mockup1, "Bonds of Blood"],
                                        [Mockup2, "Spend Some Time In <br /> Nature"],
                                        [Mockup3, "Beneath The Surface"],
                                        [Mockup4, "The Last Crusader"],
                                        [Mockup5, "Bonds of Blood"],
                                        [Mockup6, "Spend Some Time In <br /> Nature"],
                                        [Mockup7, "Beneath The Surface"],
                                        [Mockup8, "The Last Crusader"],
                                        [Mockup9, "Bonds of Blood"],
                                        [Mockup10, "Spend Some Time In <br /> Nature"],
                                        [Mockup11, "Beneath The Surface"],
                                        [Mockup12, "The Last Crusader"],
                                        [Mockup13, "Bonds of Blood"],
                                        [Mockup14, "Spend Some Time In <br /> Nature"],
                                        [Mockup15, "Beneath The Surface"],
                                        [Mockup16, "The Last Crusader"],
                                        [Mockup17, "Bonds of Blood"],
                                        [Mockup18, "Spend Some Time In <br /> Nature"],
                                        [Mockup19, "Beneath The Surface"]
                                    ].map(([img, title], i) => (
                                        <div className={styles.embla__slide} key={i}>
                                            <Image src={img} alt='mockups' className='block mx-auto shadow-[10px_5px_5px_0px_rgba(0,0,0,0.2)]' />
                                            <h4 className='text-base leading-tight font-bold text-white text-center mt-4' dangerouslySetInnerHTML={{ __html: title }} />
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
                </div>
            </div>
        </section>
    )
}
export default Bookmockups;