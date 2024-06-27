import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '@/component/LP-Two/EmblaSliderArrows/EmblaSliderArrows'
import styles from "./styles.module.css"
import Image from 'next/image'
import Avater from "media/imageAR/avater/1.png"
import Avater2 from "media/imageAR/avater/2.png"
import Avater3 from "media/imageAR/avater/3.png"
import Avater4 from "media/imageAR/avater/4.png"
import Avater5 from "media/imageAR/avater/5.png"
const MRVideoTestimonials = (
    {
        subtitle = "Enough From Us",
        title = "See What Our Clients Have To Say",
        desc = "We can go on and on about our services, but if you seek further credibility, then see what our clients have to say about us:"
    }
) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <section className='font-sans'>
            <div className='relative mr-lg:py-[80px] mr-md:py-[60px] py-[40px]'>
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify">
                        <span className="block mr-lg:text-[30px] mr-md:text-[25px] text-xl leading-tight font-semibold text-primary-100">{subtitle}</span>
                        <h2 className="mr-xl:text-[45px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-semibold mt-2 mb-3">{title}</h2>
                        <p className="mr-md:text-base text-sm leading-tight font-normal">{desc}</p>
                    </div>
                    <div className={styles.embla}>
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className={`${styles.embla__container}`}>
                                {
                                    [
                                        [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/969194638?badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>`,
                                            `" We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves. We will strategically promote your books online to optimize sales We will strategically"`,
                                            Avater2,
                                            "Christopher Carter",
                                            "Assistant Manager"],
                                        [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/969194794?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Frederick Huff s Journey_ How Our Expertise Made His Book a Triumph _ _ Best Selling Publisher"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
                                            `" We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves. We will strategically promote your books online to optimize sales We will strategically"`,
                                            Avater,
                                            "Frederick Huff",
                                            "Assistant Manager"],
                                        [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/969194720?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Eric s Publishing Journey_ Seamless Process and Exceptional Support with Best Selling Publisher"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
                                            `" We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves. We will strategically promote your books online to optimize sales We will strategically"`,
                                            Avater3,
                                            "Eric",
                                            "Assistant Manager"],
                                        [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/969194426?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="How We Brought Brandy Hughes  Story to Life_ A Memorable Publishing Journey _ Best Selling Publisher"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
                                            `" We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves. We will strategically promote your books online to optimize sales We will strategically"`,
                                            Avater4,
                                            "Brandy Hughes",
                                            "Assistant Manager"],
                                        [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/969194554?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="A Heartfelt Thank You to Our Valued Customers _ Best Selling Publisher"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
                                            `" We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves. We will strategically promote your books online to optimize sales We will strategically"`,
                                            Avater5,
                                            "Max",
                                            "Assistant Manager"]
                                    ].map(([iframe, desc, img, name, work], i) => (
                                        <div className={`${styles.embla__slide} `} key={i}>
                                            <div className='rounded-[20px] border-[#C4C4C4] border overflow-hidden shadow-lg'>
                                                <div dangerouslySetInnerHTML={{ __html: iframe }} />
                                                <div className='py-[30px] px-[25px] '>
                                                    <p className='text-[16px] leading-normal font-normal'>{desc}</p>
                                                    <div className='flex items-center gap-x-5 mt-5'>
                                                        <Image src={img} alt='client' className='block' />
                                                        <div>
                                                            <h4 className='text-xl font-semibold leading-tight text-[#000]'>{name}</h4>
                                                            <span className='text-[#3d3d3d] text-base leading-normal'>{work}</span>
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
                </div>
            </div>
        </section>
    )
}
export default MRVideoTestimonials;