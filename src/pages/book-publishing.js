import React from 'react';
import Link from 'next/link';
//
import FEATURED from '../component/bookPublication/featuredSec'
import WEARE from '../component/bookPublication/LetUsWEARE'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import PWMODE from '../component/bookPublication/ProcessWorkMode'
import PUBLISHING from '../component/publishing'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import { MRHero } from '@/component';
import StoryPlot from '@/fa-component/StoryPlot';


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
          title={<> Transform Your Manuscript Into  <br />
            A Bestseller With Premier Book <br />
            Publishing Services </>}
          dec={`Welcome to Best Selling Publisher, where your publishing dreams turn into reality. As a leading book publishing company, we specialize in bringing authors' visions to life and catapulting their works onto bestseller lists, including Amazon's coveted ranks.With our comprehensive book publishing services, from meticulous editing to bespoke marketing strategies, we're here to guide you every step of the way. Partner with us and see your book shine across the globe.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Start Your Publishing Journey Today <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="#" onClick={openLiveChat} className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        /> */}
        <MRHero
          subTitle="Awarded #1 Book Publishing Services"
          title="Transform Your Manuscript Into  A Bestseller With Premier Book Publishing Services"
          desc="Welcome to Best Selling Publisher, where your publishing dreams turn into reality. As a leading book publishing company, we specialize in bringing authors' visions to life and catapulting their works onto bestseller lists, including Amazon's coveted ranks.With our comprehensive book publishing services, from meticulous editing to bespoke marketing strategies, we're here to guide you every step of the way. Partner with us and see your book shine across the globe."
          logos="images/banner/img2.png"
          counter={true}
          groupCTA={false}
          classes="bg-right bg-center !py-[80px]"
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/bookstore-with-bookshelf.png')]"
        />
        <Enlistedlogo />
        <WEARE />
        <PUBLISHING
          bgImg="mr-md:bg-[url('../../public/ahsan/bg_black.png')]"
          classes="bg-black"
        />
        <PWMODE />
        <BTM />
        <CTA />
        {/* <WMODE /> */}
        <SwiperComponents />
        <StoryPlot />
      </main>
    </>
  )
}

export default about
