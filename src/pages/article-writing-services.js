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
        <WMODE />
        <SwiperComponents />
        <MRContact/>
      </main>
    </>
  )
}

export default Ghostwriting;
