import React from 'react';
import Link from 'next/link';
import FEATURED from '../component/AboutUS/featuredSec'
import IM from '../component/impressiveWorks1';
import WMODE from '../component/workMode1'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/LogoSlider'
import DM1 from '../component/demandingSpecilaist1'
import BW1 from '../component/bookWriting1';
import { MRHero } from '@/component';
import Head from 'next/head';



const about = () => {

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  return (
    <>
    <Head>
      <title>Premier Book Publishing Assistance | Book Selling Publisher</title>
      <meta name="description" content="From eBooks to audiobooks, we offer a wide range of publishing services tailored to meet your needs. Contact us today to get started on your project." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
    </Head>
      <main>
        {/* <FEATURED
          banneraffordable='aboutus'
          title='About US'
          dec={`Shape your idea into the form of a best-selling book and spread your work to the masses. `}
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
        // subTitle="Awarded #1 Book Publishing Services"
        title="About US"
        desc="Are you in search of the perfect partner to publish your book? We’re so glad you have found us! "
        fullImg="mr-lg:bg-[url('../../public/assets/images/newimg/editing-banner.png')]"
        classes="bg-right bg-center mr-lg:!py-[200px]"
        form={false}
      />
        <LogoSliders></LogoSliders>

        <IM
          title='Every Project Is Treated Like a Work of Art'
          desc={"We don't just think outside the box — we obliterate it."}
        />
        <DM1
          title='Our Specialists Are Always in Demand'
          desc={"Ever wondered what makes a story truly captivating?  It combines linguistic finesse, creative brilliance, and technical know-how perfectly. And guess what? Our team of writing experts has it all! From crafting compelling narratives to distilling complex information into accessible content, they're the wizards behind our communication success."}
        />
        <BW1
          title='Let the Finest Writers Guide You!'
          desc={`How cool would it be to team up with the greatest literary minds?
          You'd get insider insights, hands-on guidance, and a huge boost in credibility for your book. They'll walk you through the publishing like a pro, ensuring your masterpiece gets the spotlight it deserves.`}
          descs={`Plus, having a well-known writer in your corner? That's a game-changer. 
          Moreover, being associated with a celebrated writer can enhance your reputation as an author, positioning you as a rising star in the literary world. With their guidance and support, your book has the potential to resonate with readers on a deeper level.
          `}
        />

        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents />
      </main>
    </>
  )
}

export default about
