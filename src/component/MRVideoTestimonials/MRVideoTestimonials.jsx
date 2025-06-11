import React, { useState, useEffect, useRef } from 'react'; // Import React, useState, useEffect, useRef
import useEmblaCarousel from 'embla-carousel-react';
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '@/component/LP-Two/EmblaSliderArrows/EmblaSliderArrows';
import styles from "./styles.module.css";
import Image from 'next/image';
import Avater from "media/imageAR/avater/1.png";
import Avater2 from "media/imageAR/avater/2.png";
import Avater3 from "media/imageAR/avater/3.png";
import Avater4 from "media/imageAR/avater/4.png";
import Avater5 from "media/imageAR/avater/5.png";

const MRVideoTestimonials = (
    {
        subtitle = "Book Reviews",
        title = "Let’s hear what they have to say!",
        desc = "We have been delivering top-notch services to our clients, which has established us as one of the most trusted book writing, publishing and marketing company in the eyes of every author out there!",
        colorChange
    }
) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    // State to control video loading
    const [sectionVisible, setSectionVisible] = useState(false);
    // Ref for the section to observe
    const sectionRef = useRef(null);

    // Set up the Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSectionVisible(true);
                        observer.disconnect(); // Stop observing once visible
                    }
                });
            },
            {
                root: null, // relative to the viewport
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup the observer when the component unmounts
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []); // Empty dependency array means this effect runs once on mount

    const testimonialsData = [
        [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/969194638?badge=0&autopause=0&player_id=0&app_id=58479" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>`,
            "I chose Best Selling Publisher for their complete package. They refined my manuscript, editors polished it to perfection, and the marketing team of got my book into the hands of readers. Their cohesive efforts made my book a huge success.",
            Avater2,
            "Christopher Ray"],
        [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/969194794?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Frederick Huff s Journey_ How Our Expertise Made His Book a Triumph _ _ Best Selling Publisher"></iframe></div>`,
            "I had my debut novel published by Best Selling Publishers. Their experience exceeded all my expectations. Their team guided me at every step of the publishing process. They truly cared about my vision for the book and made sure it is exactly as I dreamed it would.",
            Avater,
            "Frederick Huff"],
        [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/969194720?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Eric s Publishing Journey_ Seamless Process and Exceptional Support with Best Selling Publisher"></iframe></div>`,
            "I just want to say that their marketing team is fantastic. I published my self-help with Best Selling Publisher. They crafted a marketing plan that resonated with my target audience. Their team handled the book signing campaigns, social media. Thanks to their marketing strategies, my book became a best seller.",
            Avater3,
            "Eric Miller"],
        [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/969194426?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="How We Brought Brandy Hughes  Story to Life_ A Memorable Publishing Journey _ Best Selling Publisher"></iframe></div>`,
            "Amazed by their editors’ attention to detail. Every suggestion they made was aimed at clarifying and enhancing my argument whilst making sure that the original tone and intent of my idea remains intact. ",
            Avater4,
            "Brandy Hughes"],
        [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/969194554?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="A Heartfelt Thank You to Our Valued Customers _ Best Selling Publisher"></iframe></div>`,
            "As an entrepreneur, I wanted to pen my journey but never had the time. Best Selling Publisher’s writing and editing team captured my voice and my passion for business in the book. The final manuscript really felt like my story. ",
            Avater5,
            "Max"]
    ];

    return (
        <section className='font-sans' ref={sectionRef}> {/* Assign the ref here */}
            <div className='relative mr-lg:py-[80px] mr-md:py-[60px] py-[40px]'>
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify">
                        <span
                            className={`block mr-lg:text-[30px] mr-md:text-[25px] text-xl leading-tight font-semibold ${colorChange ? "text-[#8f181b]" : "text-primary-100"
                                }`}
                        >
                            {subtitle}
                        </span>
                        <h2 className="mr-xl:text-[45px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-semibold mt-2 mb-3">{title}</h2>
                        <p className="mr-md:text-base text-sm mr-lg:w-[70%] mx-auto leading-tight font-normal">{desc}</p>
                    </div>
                    <div className={styles.embla}>
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className={`${styles.embla__container}`}>
                                {sectionVisible ? ( // Conditionally render videos
                                    testimonialsData.map(([iframe, desc, img, name], i) => (
                                        <div className={`${styles.embla__slide}`} key={i}>
                                            <div className={`rounded-[20px] border-[#C4C4C4] border overflow-hidden shadow-md ${colorChange ? styles.colorChange : ''}`}>
                                                <div dangerouslySetInnerHTML={{ __html: iframe }} />
                                                <div className='py-[30px] px-[25px] '>
                                                    <p className='text-[16px] leading-normal font-normal mr-2xl:min-h-[145px] mr-xl:min-h-[168px] mr-lg:min-h-[215px] mr-md:min-h-[170px] mr-sm:min-h-[120px] min-h-[195px]'>{desc}</p>
                                                    <div className='flex items-center gap-x-5 mr-2xl:mt-4 mt-4'>
                                                        <Image src={img} alt='client' className='block' />
                                                        <div>
                                                            <h4 className='text-2xl font-semibold leading-tight text-[#000]'>{name}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    // Placeholder while section is not visible
                                    testimonialsData.map(([, , img, name], i) => (
                                        <div className={`${styles.embla__slide}`} key={i}>
                                            <div className='rounded-[20px] border-[#C4C4C4] border overflow-hidden shadow-md'>
                                                {/* Placeholder for video while not loaded */}
                                                <div style={{ padding: '56.25% 0 0 0', position: 'relative', background: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#777' }}>
                                                    <p>Loading Video...</p>
                                                </div>
                                                <div className='py-[30px] px-[25px] '>
                                                    <p className='text-[16px] leading-normal font-normal mr-2xl:min-h-[145px] mr-xl:min-h-[168px] mr-lg:min-h-[215px] mr-md:min-h-[170px] mr-sm:min-h-[120px] min-h-[195px]'></p>
                                                    <div className='flex items-center gap-x-5 mr-2xl:mt-4 mt-4'>
                                                        <Image src={img} alt='client' className='block' />
                                                        <div>
                                                            <h4 className='text-2xl font-semibold leading-tight text-[#000]'>{name}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className={styles.embla__controls}>
                            <div className={styles.embla__buttons}>
                                <PrevButton
                                    onClick={onPrevButtonClick}
                                    disabled={prevBtnDisabled}
                                    colorChange={colorChange}
                                />
                                <NextButton
                                    onClick={onNextButtonClick}
                                    disabled={nextBtnDisabled}
                                    colorChange={colorChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default MRVideoTestimonials;