import React from 'react'
import LHPress from '../component/PressReleaseWritingServices/LetUsPress'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import StoryPlot from "@/fa-component/StoryPlot"
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import { MRHero } from '@/component'




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
          title="Get Your Press Releases <br /> Covered By the Right Sites"
          desc="Send your work to a larger target audience that increases your brand visibility and makes your services known to the masses."
          logos="images/banner/img2.png"
          classes='bg-[#fefefe] !py-[80px]'
          counter={true}
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/newspaper-concept.png')]"
        />
        <Enlistedlogo />
        <LHPress />
        <GhostWriting serviceTitle="Press Release Writing Services"
        serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties."/>
        <CREATIVEGHOSTWRITERS />
        <BTM />
        <CTA />
        <WMODE
          subtitle="Carrying out"
          title="The Fastest Work Mode, Get Your <br className='mr-lg:block hidden' /> Work in 4 Easy Steps"
          desc=" Working with us gives you prompt delivery of work because we have set up everything systematically. Here is our 4 step process, which keeps us streamlined from the beginning."
          GridCols="grid-cols-4"
          StoryPlotData={[
            {
              steps: "Step 01",
              heading: "Submit Your Manuscript",
              desc: "After making up your mind about working with us, you place your order."
            },
            {
              steps: "Step 02",
              heading: "Edit & Design",
              desc: "We refine your text and design your book's cover."
            },
            {
              steps: "Step 03",
              heading: "Review & Approve",
              desc: "You review our work and give the green light."
            },
            {
              steps: "Step 04",
              heading: "Publish & Distribute",
              desc: "Your book is published and distributed on schedule."
            }
          ]}
        />
        <SwiperComponents />
        <StoryPlot/>
      </main>
    </>
  )
}

export default Ghostwriting;
