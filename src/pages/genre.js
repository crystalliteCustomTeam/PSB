import React from 'react';
import WEARE from '../component/genre/LetUsWEARE'
import MANUSCRIPT from '../component/genre/manuscript';
import WMODE from '../component/workMode1'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/bottomLogosNEW'
import { MRHero } from '@/component';





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
        <LogoSliders />
        <WEARE />
        <MANUSCRIPT />
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents />
      </main>
    </>
  )
}

export default about
