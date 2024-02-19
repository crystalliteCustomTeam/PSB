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



const about = () => {

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
        />
        <LogoSliders></LogoSliders>

        <IM
          title='From Rough Draft to Successful Publishing, We Make It Possible'
          desc={'We make it possible for you to make your idea the next big read. We transform your ideas into magnificent books.'}
        />
        <DM1
          title='Working With The Most Demanded Specialists'
          desc={'Have a story in mind? Share it with the world because we truly believe every story is worth sharing. Our ghostwriters have the recipe for success to showcase your life and ideas in the best possible way. Achieving excellence requires more than just dedication and hard work; our experts have the thirst and taste for quality that we are proud of. Our team works tirelessly to bring your vision to life, transforming your ideas and story into a masterpiece with beautiful words.'}
        />
        <BW1
          title='Getting Your Book Written By The Top Industry Experts?'
          desc={'Your million-dollar story is worth bringing alive. And for that, our ghostwriters are dedicated to the execution of your book and work tirelessly to mold the story into the form of a picture-perfect book. We guarantee that the services you take from us are unmatchable and will meet your desired results.'}
          descs={'To give our customers a high-end result, we have hired professional experts with years of experience who are highly sought after. Therefore, don’t worry while choosing  Best Selling Publisher Ghostwriting for your service because working with us means getting the best.'}
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
