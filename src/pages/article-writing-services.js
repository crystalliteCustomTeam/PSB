import React from 'react'
import LHArticle from '../component/ArticleWritingServices/LetUsHelpArticle'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import { MRHero, MRContact } from '@/component';
import Head from 'next/head'

const Ghostwriting = () => {


  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  return (
    <>
    <Head>
      <title>Best Selling Publisher | Exceptional Article Writing Services</title>
      <meta name="description" content="At Best Selling Publisher, we take pride in our exceptional article writing services. Connect with us to start your publishing journey today!" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
    </Head>
      <main>
        <MRHero
          title={`Craft Your Narrative with Our Help — Premier Article Writing Excellencee`}
          desc="Ever pondered the diverse essence of an article? It's more than words. It's a fusion of informative prowess, persuasive elegance, and illuminative depth. Ready to explore where words hold the power to captivate?"
          logos="images/banner/img2.png"
          counter={true}
          classes='!py-[80px] bg-[#FEFEFE]'
          beforeImg="before:mr-md:bg-[url('../../public/imageAR/business-woman-working.png')]"
        />
        <Enlistedlogo />
        <LHArticle />
        <GhostWriting serviceTitle="Article Writing Services"
          serviceDesc="At Best Selling Publisher, we take pride in exceptional article-writing services that consistently exceed expectations. With our dedicated team of experienced writers, we deliver compelling and well-researched articles tailored to meet your unique needs. Our commitment to excellence shines through in every piece. 
        " />
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
        <MRContact/>
      </main>
    </>
  )
}

export default Ghostwriting;
