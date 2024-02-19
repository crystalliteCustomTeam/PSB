import React from 'react'
import Link from 'next/link';
import FEATURED from '../component/WebCopywritingServices/featuredSec'
import LHArticle from '../component/WebCopywritingServices/LetUsHelpWeb'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import LogoSliders from '../component/bottomLogosNEW'


const WebCopywritingServices = () => {

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
          banneraffordable='article'
          title='Develop Your Business with the Outstanding Skills and Expertise of Our Web Copywriters'
          dec={` Welcome to  Best Selling Publisher Ghostwriting. We offer professional web copywriting services, taking your website to the next level with the help of our expert copywriters.`}
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
        <LHArticle />
        <GhostWriting  serviceTitle="Web Copywriting Services"
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

export default WebCopywritingServices;
