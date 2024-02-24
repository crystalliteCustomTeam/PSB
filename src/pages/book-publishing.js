import React from 'react';
import Link from 'next/link';
//

import Tradition from '@/fa-component/Tradition'
import EnlistedNew from '@/fa-component/BookPublishing/EnlistedNew'
import SwiperComponent from '@/component/SwiperComponent'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import BroaderNew from '@/fa-component/BroaderNew'
import StoryPlot from '@/fa-component/StoryPlot';
import PublishingNewComponent from '@/fa-component/PublishingNewComponent'
import LogoSliders from '../component/bottomLogosNEW'
import { MRHero } from '@/component';
import broader from 'media/ahsan/spacious-bookstore.png'
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

        <title>Ebook Publishing Company - Best Selling Publisher - Amazon Publishing Services</title>
        <link rel="icon" href="/images/favicon.svg" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />

        {/* <Helmet>
<script type="application/ld+json">
{JSON.stringify(schema)}
</script>
</Helmet> */}
      </Head>
      <main>
        {/* <FEATURED
          banneraffordable='aboutus'
          title={<> Transform Your Manuscript Into  <br />
            A Bestseller With Premier Book <br />
            Publishing Services </>}
          dec={`Welcome to Best Selling Publisher, where your publishing dreams turn into reality. As a leading book publishing company, we specialize in bringing authors' visions to life and catapulting their works onto bestseller lists, including Amazon's coveted ranks.With our comprehensive book publishing services, from meticulous editing to bespoke marketing strategies, we're here to guide you every step of the way. Partner with us and see your book shine across the globe.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Start Your Publishing Journey Today <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="#" onClick={openLiveChat} className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        /> */}
        <MRHero
          subTitle=""
          title="Publishing Your Amazing Book Swiftly And Aiding You In Bringing About Great Success"
          desc="Welcome to Best Selling Publisher, where your publishing dreams turn into reality. As a leading book publishing company, we specialize in bringing authors' visions to life and catapulting their works onto bestseller lists, including Amazon's coveted ranks.With our comprehensive book publishing services, from meticulous editing to bespoke marketing strategies, we're here to guide you every step of the way. Partner with us and see your book shine across the globe."
          logos="images/banner/img2.png"
          counter={true}
          groupCTA={true}
          classes="bg-right bg-center !py-[80px]"
          beforeImg="mr-md:before:bg-[url('../../public/ahsan/handsome-guy-study-library.png')]"
        />
        <LogoSliders />
        <Tradition
          title="Top-Notch Children's Illustration Services "
          desc="Our Skilled Publishing Experts Can Guide You Through The Publishing Process"
        />
        <EnlistedNew
          subtitle="Be a Part of the Best Sellers’ Fraternity"
          title="Why Are We  The Best Book Publishing Company For You?"
          paragraph=""
        />


        <PublishingNewComponent
          subtitle="Enlist Yourself with the All-Time Best "
          title="Your Book Deserves Only The"
          desc="Best Selling Publishers."
          bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
          classes="bg-cover bg-no-repeat"
          textBG="bg-primary-100"
        />
        {/*========= Broader fold =========*/}
        <BroaderNew
          subtitle=""
          title="Publishing Children's <br/> Illustration With The Best <br/> Seller Publishin Services!"
          desc="“Whatever you may have heard, self-publishing is not a shortcut to anything. Except maybe insanity. Self-publishing, like every other kind of publishing, is hard work. You don’t wake up one morning good at it. You have to work for that.” — Zoe Winters <br/> When you're ready to publish your book, you want to ensure you're working with a reputable and reliable self-publishing company. Best Selling Publisher is one of the best in the business, and we're proud to offer our services to authors looking to self-publish. Call us today to become a published author!"
          image={broader}
        />
        {/*========= CTA fold =========*/}
        <BTM />
        <CTA />

        {/*========= swiperComponent fold =========*/}
        <SwiperComponent />

        {/*========= Bookshelf fold =========*/}
        <StoryPlot />
      </main>
    </>
  )
}

export default about
