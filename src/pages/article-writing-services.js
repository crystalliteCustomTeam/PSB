import React from 'react'
import Link from 'next/link';

import FEATURED from '../component/ArticleWritingServices/featuredSec'
import LHArticle from '../component/ArticleWritingServices/LetUsHelpArticle'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'

import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/bottomLogosNEW'



const Ghostwriting = () => {
  return (
    <>
      <main>

        <FEATURED
          banneraffordable='article'
          title='Result-Driven Article-Writing Services That Boost Your Online '
          dec={` Drive more customers, convert the existing ones into loyal customers, and create compelling articles that speak to what matters most to your target audience.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href=" " className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LogoSliders />
        <LHArticle />
        <GhostWriting serviceTitle="Article Writing Services"
        serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties.
        " />
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
