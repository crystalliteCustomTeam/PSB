import React from 'react'

import FEATURED from '../component/PressReleaseWritingServices/featuredSec'
import LHPress from '../component/PressReleaseWritingServices/LetUsPress'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'

import LogoSliders from '../component/bottomLogosNEW'




const Ghostwriting = () => {
  return (
    <>
      <main>

        <FEATURED
          banneraffordable='PressRelease'
          title='Get Your Press Releases Covered By the Right Sites'
          dec={` Send your work to a larger target audience that increases your brand visibility and makes your services known to the masses.`}
          href1={<>
            <button className='bg-[#00C0E4] py-2 text-white hover:border-solid hover:border-2 hover:text-[#1d1d1f]'>Get Started</button>
          </>}
          href2={<>
            <button className='bg-[#1d1d1f] py-2 text-white hover:border-solid hover:border-2 hover:text-[#00c0e4]'>Live Chat</button>
          </>}
        />
        <LogoSliders />
        <LHPress />
        <GhostWriting serviceTitle="Press Release Writing Services"
        serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties."/>
        <CREATIVEGHOSTWRITERS />

        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents />

      </main>
    </>
  )
}

export default Ghostwriting;
