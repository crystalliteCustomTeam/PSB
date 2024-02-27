import React from 'react'
import LHArticle from '../component/WebCopywritingServices/LetUsHelpWeb'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import WMODE from '../component/workMode1'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import StoryPlot from "@/fa-component/StoryPlot"
import { MRHero } from '@/component';


const WebCopywritingServices = () => {

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
          title="Develop Your Business With The Outstanding Skills And  Expertise of Our Web Copywriters"
          desc="Welcome to Best Selling Publisher Ghostwriting. We offer professional web copywriting services, taking your website to the next level with the help of our expert copywriters."
          logos="images/banner/img2.png"
          classes='bg-[#FEFEFE] !py-[80px]'
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/front-laptop-keyboard.png')]"
          counter={true}
        />
        <Enlistedlogo />
        <LHArticle />
        <GhostWriting serviceTitle="Web Copywriting Services"
          serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties.
        "/>
        <CREATIVEGHOSTWRITERS />
        <BTM />
        <CTA />
        <WMODE />
        <SwiperComponents />
        <StoryPlot />
      </main>
    </>
  )
}

export default WebCopywritingServices;
