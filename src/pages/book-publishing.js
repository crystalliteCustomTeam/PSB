import React from 'react';
import Link from 'next/link';

import FEATURED from '../component/bookPublication/featuredSec'
import WEARE from '../component/bookPublication/LetUsWEARE'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import PWMODE from '../component/bookPublication/ProcessWorkMode'
import PUBLISHING from '../component/bookPublication/publishing'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/bottomLogosNEW'





const about = () => {
  return (
    <>
      <main>
        <FEATURED
          banneraffordable='aboutus'
          title='We Will Swiftly Publish Your Amazingly Written Book and Aid You in Bringing About Success'
          dec={`Writing is only half the battle of building a great novel; the other half involves every other aspect that goes into the literary creation.`}
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
        <WEARE />
        <PUBLISHING />
        <PWMODE />
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents />
      </main>
    </>
  )
}

export default about
