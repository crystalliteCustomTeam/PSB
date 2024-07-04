// Next
import dynamic from "next/dynamic"

// import MRHeroForm from "./MRHeroForm/MRHeroForm"
const MRHeroForm = dynamic(() => import('./MRHeroForm/MRHeroForm'))
import MRCTA from "./MRCTA/MRCTA"
import MRCTAGroup from "./MRCTAGroup/MRCTAGroup"
// import MRHero from "./MRHero/MRHero"
const MRHero = dynamic(() => import('./MRHero/MRHero'))
import MRHeroCounter from "./MRHeroCounter/MRHeroCounter"
import MRContact from "./MRContact/MRContact"
import MRQuestioners from "./MRQuestioners/MRQuestioners"
import MRContent1 from "./MRContent1/MRContent1"
import MRContent2 from "./MRContent2/MRContent2"
import MRCards from "./MRCards/MRCards"
import MRLibarySphere from './MRLibrarySphere/MRLibrarySphere'
import MRTable from './MRTable/MRTable'
import MRServices from "./MRServices/MRServices"
const MRVideoTestimonials = dynamic(() => import('./MRVideoTestimonials/MRVideoTestimonials'))
const ThirdPartyScript = dynamic(() => import('./ThirdPartyScript'))

export { MRHero, MRCTAGroup, MRCTA, MRHeroForm, MRHeroCounter, MRContact, MRQuestioners, MRContent1, MRContent2, MRTable, MRLibarySphere, MRCards, MRServices, MRVideoTestimonials, ThirdPartyScript }