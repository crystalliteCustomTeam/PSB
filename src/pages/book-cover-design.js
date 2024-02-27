import React from 'react';
import WEARE from '../component/CoverDesign/LetUsWEARE'
import WMODE from '../component/workMode1'
import PWMODE from '../component/CoverDesign/CoverDesign'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import BOOKCOVERS from '../component/CoverDesign/BookCovers'
import TAbNAVIGATION from '../component/CoverDesign/TabNavigateCovers'
import WORKON from '../component/CoverDesign/ProcessWorkMode'
import SwiperComponents from '../component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import { MRHero } from '@/component';
import OurComprehensive from '@/component/OurComprehensive';
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import StoryPlot from "@/fa-component/StoryPlot"


const about = () => {


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
          title="The Most Attractive Cover Designs to Gain the Attention of Potential Readers"
          desc="Our creative designers understand the importance of crafting eye-catching designs that compel potential readers to purchase them."
          logos="images/banner/img2.png"
          classes='!py-[80px] bg-[#fefefe]'
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/world-book-day.png')]"
          counter={true}
        />
        <Enlistedlogo />
        <WEARE />
        <OurComprehensive/>
        {/* <PWMODE /> */}
        <BOOKCOVERS />
        <TAbNAVIGATION />
        <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
        <WORKON />
        <BTM />
        <CTA />
        {/* <WMODE /> */}
        <SwiperComponents />
        <StoryPlot/>
      </main>
    </>
  )
}

export default about
