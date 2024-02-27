import React from 'react';
import Link from 'next/link';

import FEATURED from '../component/printing/featuredSec'

import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import PWMODE from '../component/PublishingWorkMode'
import PUBLISHINGHome from '../component/publishing'
import PUBLISHING from '../component/printing/publishing'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import { MRHero } from '@/component';
import StoryPlot from '@/fa-component/StoryPlot';
import PublishingNewComponent from '@/fa-component/PublishingNewComponent';


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
          title="Take Your Book Where Your Audience Is"
          desc="With thousands of publishing options to consider, our team helps you identify the right platform for your book."
          logos="images/banner/img2.png"
          counter={true}
          classes='bg-right bg-center !py-[80px]'
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/bookstore-with-bookshelf.png')]"
        />
        <Enlistedlogo/>
        <PWMODE
          subTitle="Our Comprehensive Publishing Services"
          title="Are Streamlined To Help Our Clients Bring <br/> Their Ideas Onto Paper"
          desc="Our excellence stems from our unique and client-centric approach. We have catered to projects of various genres, formats, and platforms. <br/> Let us do the walking and talking on your behalf and see the exceptional results yourself."
        />
        <PUBLISHING />
        <PublishingNewComponent
          subtitle="Enlist Yourself with the All-Time Best "
          title="Your Book Deserves Only The"
          desc="Best Selling Publishers."
          bgImage="bg-[url('../../public/ahsan/WhiteBG.png')]"
          classes="!bg-cover !bg-no-repeat"
          textBG="bg-black"
          txtBlK="!text-black"
        />
        <BTM />
        <CTA />
        <SwiperComponents />
        <StoryPlot />
      </main>
    </>
  )
}

export default about
