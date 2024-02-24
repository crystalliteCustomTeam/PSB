import React from 'react';
import WEARE from '../component/editing/LetUsWEARE'
import WMODE from '../component/workMode1'
import PWMODE from '../component/editing/CoverDesign'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/bottomLogosNEW'
import { MRHero } from '@/component';
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import StoryPlot from "@/fa-component/StoryPlot"

const editing = () => {

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
          title="An Editing Process that <br/> Leads to Perfection on Every Page"
          desc="An ideal editing process that creates perfect work, editing is an important aspect of writing and crafting an amazing book. Our editors are well-trained in the art of perfecting a novel or a book."
          logos="images/banner/img2.png"
          counter={true}
          classes='bg-[#fefefe] !py-[80px]'
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/night-laptop.png')]"
        />
        <LogoSliders />
        <WEARE />
        <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
        <PWMODE />
        <BTM />
        <CTA />
        <WMODE />
        <SwiperComponents />
        <StoryPlot/>
      </main>
    </>
  )
}

export default editing
