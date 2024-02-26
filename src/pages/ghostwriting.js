import React from 'react'
import Link from 'next/link'

import FEATURED from '../component/ghostWritingServices/featuredSec'
import LETUSHELP from '../component/ghostWritingServices/LetUsHelp'
import GhostWriting from '@/component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'

import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/bottomLogosNEW'
import { MRHero } from '@/component'
import IllustrationPackages from '@/component/IllustrationPackages/IllustrationPackages'


const Ghostwriting = () => {
  const packagesData = [
    {
      title: "Half Page Illustration",
      amount: "before:content-['$75']",
      desc: "As the name says, this is an illustration that fills half a page. While it can be detailed, due to it's smaller size, the background will be less detailed than a full page illustration.",
      note: "Add on: £50 For Expicted Services",
      list: [
        "Up To Two Characters",
        "Background",
        "Extra Characters - $15 Each",
      ]
    },
    {
      title: "Full Page Illustration",
      amount: "before:content-['$105']",
      desc: "This is a full page illustration where we pull out all the stops and include lots of detail! We can also leave space for your text if needed.",
      note: "Add on: £50 For Expicted Services",
      list: [
        "Up To Three Characters",
        "Detailed Background",
        "Extra Characters - $15 Each",
      ]
    },
    {
      title: "Spread Illustration",
      amount: "before:content-['$190']",
      desc: "Spread across two full pages, normally with text on the illustration. While a mix of different illustration sizes makes a beautiful book, going all out and making your whole book double- page spreads will undoubtedly will make it amazing!",
      note: "Add on: £50 For Expicted Services",
      list: [
        "Up To Six Characters",
        "Detailed Background",
        "Extra Characters - $15 Each",
      ]
    },
  ];
  return (
    <>
      <main>

        {/* <FEATURED
          banneraffordable='affo'
          title='The Best Affordable and Professional Ghostwriting Services Agency'
          dec={` We’ve helped thousands of authors express themselves eloquently; you can be next! Hire our top-tier expert writers today and imprint your words in your readers’ minds forever.`}
          href1={<> <Link href="tel:800-781-9093" data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="javascript:$zopim.livechat.window.show()" className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        /> */}
        <MRHero
          title="The Best Affordable And <br /> Professional Ghostwriting <br /> Services Agency"
          desc="We’ve helped thousands of authors express themselves eloquently; you can be next! Hire our top-tier expert writers today and imprint your words in your readers’ minds forever."
          logos="images/banner/img2.png"
          counter={true}
        />
        <LogoSliders />
        <LETUSHELP
          title='What Sets Us Apart?'
          desc={' Best Selling Publisher Ghostwriting is a well-known international ghostwriting and editing firm that has been operating for over a decade. Our experts create well-versed writing that demonstrates true professionalism while exhibiting creativity. Our services are not only economical but also ensure that both the needs of the authors and the preferences of their target audience are adequately met. Some of our platform’s distinguishing traits are as follows: '}
        />
        <GhostWriting serviceTitle="Ghostwriting Services"
          serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties.
        "/>
        <CREATIVEGHOSTWRITERS />
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents />
        <IllustrationPackages packagesData={packagesData} />
      </main>
    </>
  )
}

export default Ghostwriting;
