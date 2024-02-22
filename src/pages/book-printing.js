import React from 'react';
import Link from 'next/link';

import FEATURED from '../component/printing/featuredSec'

import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import PWMODE from '../component/printing/PublishingWorkMode'
import PUBLISHING from '../component/printing/publishing'
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
        {/* <FEATURED
          banneraffordable='aboutus'
          title='Take Your Book Where Your Audience Is'
          dec={`With thousands of publishing options to consider, our team helps you identify the right platform for your book. `}
          href1={<> <Link href="tel:800-781-9093" data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="#" onClick={openLiveChat} className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        /> */}
        <MRHero
          title="Take Your Book Where <br/> Your Audience Is"
          desc="With thousands of publishing options to consider, our team helps you identify the right platform for your book."
          logos="images/banner/img2.png"
          counter={true}
          classes='bg-[#FEFEFE]'
        />
        <LogoSliders></LogoSliders>
        <PWMODE />
        <PUBLISHING />
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents />
      </main>
    </>
  )
}

export default about
