import React from 'react';
import Link from 'next/link';

import FEATURED from '../component/contactus/featuredSec'

import WMODE from '../component/workMode1'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'

import ContactModel from '../component/ContactModel'
const blog = () => {
  return (
    <>
      <main>
        <FEATURED
          banneraffordable='aboutus'
          title='Witness Excellence by Working with the Top Industry Specialists'
          dec={`Your dream of becoming a successful author is our mission. So, don’t hold back; get ahold of us today.`}
          href1={<> <Link href='tel:800-781-9093' data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="href='javascript:$zopim.livechat.window.show()'" className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <ContactModel></ContactModel>
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents />

      </main>
    </>
  )
}

export default blog
