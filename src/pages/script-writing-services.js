import React from 'react'
import Link from 'next/link';
import FEATURED from '../component/ScriptWritingServices/featuredSec'
import LHScript from '../component/ScriptWritingServices/LetUsPress'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/bottomLogosNEW'
import { MRHero } from '@/component';




const Ghostwriting = () => {

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
          banneraffordable='ScriptWriting'
          title='Professional High-Quality Script by Expert Writers'
          dec={`Streamline your content needs with our high-quality script writing service, which educates your audience about your brand and helps elevate you.`}
          href1={<> <Link href="tel:800-781-9093" data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link onClick={openLiveChat} href="#" className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        /> */}
        <MRHero
          title="Professional High-Quality <br /> Script by Expert Writers"
          desc="Streamline your content needs with our high-quality script writing service, which educates your audience about your brand and helps elevate you."
          logos="images/banner/img2.png"
          counter={true}
        />
        <LogoSliders />
        <LHScript />
        <GhostWriting serviceTitle="Script Writing Services"
        serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties." />
        <CREATIVEGHOSTWRITERS />
        <CTA />
        <BTM />
        <WMODE />


        <SwiperComponents />

      </main>
    </>
  )
}

export default Ghostwriting;
