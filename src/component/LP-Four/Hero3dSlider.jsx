// React
import { useEffect, useRef } from "react"
// Swiper
import { register } from "swiper/element/bundle"
// Media
import Banner1 from "media/lp-four/herobanner1.png"
import Banner2 from "media/lp-four/herobanner2.png"
import Banner3 from "media/lp-four/herobanner3.png"
import Banner4 from "media/lp-four/herobanner1.png"
import Banner5 from "media/lp-four/herobanner2.png"
// Next
import Image from "next/image"

export default function Hero3dSlider() {
    useEffect(() => {
        register()
    }, [])
    return (
        <div>
            <swiper-container effect="coverflow" grab-cursor="true" centered-slides="true" slides-per-view="2" coverflow-effect-rotate="0" coverflow-effect-stretch="150" coverflow-effect-depth="200" coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true" ali >
                {
                    [Banner1, Banner2, Banner3, Banner4, Banner5].map((e, i) => (
                        <swiper-slide key={i}>
                            <Image src={e} alt="banner" className="h-[400px]" />
                        </swiper-slide>
                    ))
                }
            </swiper-container>
        </div>
    )
}