import React from 'react';
import Link from 'next/link';

import FEATURED from '../component/genre/featuredSec'
import HeaderContactForm from '../component/headerContactformNew';
import WEARE from '../component/genre/LetUsWEARE'
import MANUSCRIPT from '../component/genre/manuscript';
import WMODE from '../component/workMode1'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/bottomLogosNEW'





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
        <FEATURED
          banneraffordable='aboutus'
          title='We Are the Gatekeepers of Literary Success'
          dec={`Our mission as a company is to bring you literary success. How we go about achieving that is our ghostwriter’s magic. We offer great content for every book genre, whether you need fiction, autobiography, memoirs, or children’s books.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="#" onClick={openLiveChat} className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
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
