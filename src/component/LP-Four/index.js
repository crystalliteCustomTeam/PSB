import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./Hero"))

export {
    Hero
}