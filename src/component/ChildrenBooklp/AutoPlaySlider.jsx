"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import ClassNames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "./SliderArrows"

export default function AutoPlaySlider({ wrapperClasses = " ", options,  arrows = true, arrowsCss = " ", EmblaBtn="" ,flexClasses="", children}) {
    const plugins = [
        ClassNames(),
        Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false })
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true, ...options }, plugins)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <>
            <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
                <div className={`flex ${flexClasses} gap-3 [margin-left:calc(1rem_*_-1)] my-3`}>
                    {children}
                </div>
            </div>
            {arrows && <div className={`flex justify-center gap-5 mt-5 ${EmblaBtn}`}>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} css={arrowsCss} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} css={arrowsCss} />
            </div>}
        </>
    )
}