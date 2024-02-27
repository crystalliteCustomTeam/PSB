import React from 'react';
import Link from 'next/link';

import FEATURED from '../component/marketing/featuredSec'
import WEARE from '../component/marketing/LetUsWEARE'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import PWMODE from '../component/marketing/ProcessWorkMode'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import { MRHero, MRContact } from '@/component';
import OptimalMarketing from '@/component/OptimalMarketing';





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
          title='Providing Professional Online Book Marketing Services'
          dec={`We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="#" onClick={openLiveChat} className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        /> */}
        <MRHero
          title="Providing Professional Online Book Marketing Services"
          desc="We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves."
          logos="images/banner/img2.png"
          counter={true}
          classes='bg-right bg-center !py-[80px]'
          beforeImg="mr-md:before:bg-[url('../../public/ahsan/young-beautiful-woman.png')]"
        />
        <Enlistedlogo />
        <WEARE />
        <PWMODE />
        <BTM />
        <CTA />
        <SwiperComponents />
        <MRContact />
      </main>
    </>
  )
}

export default about
