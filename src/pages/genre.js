import React from 'react';
import WEARE from '../component/genre/LetUsWEARE'
import MANUSCRIPT from '../component/genre/manuscript';
import WMODE from '../component/workMode1'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import { MRHero } from '@/component';
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
          title="We Are the Gatekeepers <br/> of Literary Success"
          desc="Our mission as a company is to bring you literary success. How we go about achieving that is our ghostwriter’s magic. We offer great content for every book genre, whether you need fiction, autobiography, memoirs, or children’s books."
          logos="images/banner/img2.png"
          counter={true}
          classes='bg-[#fefefe] !py-[80px]'
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/books-library.png')]"
        />
        <Enlistedlogo />
        <WEARE />
        <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
        <MANUSCRIPT />
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
