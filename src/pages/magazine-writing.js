import React from 'react'
import Link from 'next/link';

import FEATURED from '../component/MagazineWriting/featuredSec'
import LHMagazine from '../component/MagazineWriting/LetUsMagazine'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import HeaderContactForm from '../component/headerContactformNew';


import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/bottomLogosNEW'




const MagazineWriting = () => {

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
          banneraffordable='MagazineWriting1'
          title='Our Magazine Writers Bring It All Altogether'
          dec={` Attracting the reader at the first step can be tricky, but our expert writers effortlessly bring all the content together, instantly hooking your readers from the very first sentence.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link onClick={openLiveChat} href="#" className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LogoSliders />
        <LHMagazine />
        <GhostWriting  serviceTitle="Magazine Writting Services"
        serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties.
        "/>
        <CREATIVEGHOSTWRITERS />
        <CTA />
        <BTM />
        <WMODE />


        <SwiperComponents />

      </main>
    </>
  )
}

export default MagazineWriting;
