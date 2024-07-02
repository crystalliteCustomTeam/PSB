import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./Hero"))
const Hero3dSlider = dynamic(() => import("./Hero3dSlider"))
export {
    Hero,
    Hero3dSlider
}