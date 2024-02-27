import React from 'react'
import LHMagazine from '../component/MagazineWriting/LetUsMagazine'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import StoryPlot from "@/fa-component/StoryPlot"
import { MRHero } from '@/component';




const MagazineWriting = () => {

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  return (
    <>
      <main>
        <MRHero
          title="Our Magazine Writers <br /> Bring It All Altogether"
          desc="Attracting the reader at the first step can be tricky, but our expert writers effortlessly bring all the content together, instantly hooking your readers from the very first sentence."
          logos="images/banner/img2.png"
          classes='bg-[#fefefe] !py-[80px]'
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/magazine.png')]"
          counter={true}
        />
        <Enlistedlogo />
        <LHMagazine />
        <GhostWriting serviceTitle="Magazine Writting Services"
          serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties.
        "/>
        <CREATIVEGHOSTWRITERS />
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents />
        <StoryPlot/>
      </main>
    </>
  )
}

export default MagazineWriting;
