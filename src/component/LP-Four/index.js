import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./Hero"))
const Hero3dSlider = dynamic(() => import("./Hero3dSlider"))
const AutoPlaySlider = dynamic(() => import("./AutoPlaySlider"))
const CaseStudies = dynamic(() => import("./CaseStudies"))
const SecondaryForm = dynamic(() => import("./SecondaryForm"))

export {
    Hero,
    Hero3dSlider,
    AutoPlaySlider,
    CaseStudies,
    SecondaryForm
}