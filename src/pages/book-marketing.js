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
import LogoSliders from '../component/bottomLogosNEW'





const about = () => {
  return (
    <>
      <main>
        <FEATURED
          banneraffordable='aboutus'
          title='Providing Professional Online Book Marketing Services'
          dec={`We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves.`}
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
