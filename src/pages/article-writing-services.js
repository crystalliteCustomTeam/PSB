import React from 'react'
import LHArticle from '../component/ArticleWritingServices/LetUsHelpArticle'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/bottomLogosNEW'
import { MRHero } from '@/component';
import StoryPlot from "@/fa-component/StoryPlot"

const Ghostwriting = () => {


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
          title={`Result-Driven Article-Writing <br class="mr-2xl:block !hidden" /> Services That Boost Your <br class="mr-2xl:block !hidden" /> Online`}
          desc="Drive more customers, convert the existing ones into loyal customers, and create compelling articles that speak to what matters most to your target audience."
          logos="images/banner/img2.png"
          counter={true}
          classes='!py-[80px] bg-[#FEFEFE]'
          beforeImg="before:mr-md:bg-[url('../../public/imageAR/business-woman-working.png')]"
        />
        <LogoSliders />
        <LHArticle />
        <GhostWriting serviceTitle="Article Writing Services"
          serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties.
        " />
        <CREATIVEGHOSTWRITERS />
        <BTM />
        <CTA />
        <WMODE />
        <SwiperComponents />
        <StoryPlot/>
      </main>
    </>
  )
}

export default Ghostwriting;
