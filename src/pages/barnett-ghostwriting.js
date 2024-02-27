import React from 'react'
import WS from '../component/writingservices';
import Slider1 from '../component/Slider1';
import DS1 from '../component/demandingSpecilaist1';
import IM1 from '../component/impressiveWorks1';
import BW1 from '../component/bookWriting1';
import BTM from '../component/bottomLogos';
import WMODE1 from '../component/workMode1'
import MBOOK1 from '../component/marketBook1'
import CTA3 from '../component/cta3';
import CTA4 from '../component/cta4';
import SwiperComponents from '../component/SwiperComponent'
import { MRHero } from '@/component';
import Enlistedlogo from '@/fa-component/Enlistedlogo';
import Tradition from '@/fa-component/Tradition';
import StoryPlot from '@/component';
import PublishingNewComponent from '@/fa-component/PublishingNewComponent';
// import TSlider from '../component/testimonialslider';
export default function Home() {
  return (

    <>
      <MRHero
        title="Your Source For Superior Book Writing!"
        desc="Which book writing service is your need? You will find everything you are looking for, from professional writers to top marketers"
        logos="images/banner/img2.png"
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/barnett-ghostwriting.png')]"
      />
      <Enlistedlogo />

      <WS />
      <DS1
        title='Working With The Most Demanded Specialists'
        desc={'Have a story in mind? Share it with the world because we truly believe every story is worth sharing. To showcase your narrative in the best possible way, our ghostwriters are well-suited for the task. Achieving excellence requires dedication and hard work, qualities our company proudly possesses. Our team works tirelessly to bring your vision to life, transforming your ideas and story into a masterpiece with beautiful words.'}
      />
      <Tradition
        subtitle="Our Impressive Work"
        title="From Rough Draft To Successful <br/> Publishing We Have Made It Possible"
        desc="We make it possible for you to make your book the next big read for the readers. Bring us your rough drafts, and let our team work magnificently on their execution."
        background="bg-[url('../../public/ahsan/bgBlack2.png')]"
        classes="bg-cover !text-[#fff]"
        txtColor="!text-[#fff]"
      />

      <BW1
        title='Getting Your Book Written By The Top Industry Experts?'
        desc={'Your million-dollar story is worth bringing alive. And for that, our ghostwriters are dedicated to the execution of your book and work tirelessly to mold the story into the form of a picture-perfect book. We guarantee that the services you take from us are unmatchable and will meet your desired results.'}
        descs={'To give our customers a high-end result, we have hired professional experts with years of experience that are the most demanded. Therefore, don’t worry while choosing  Best Selling Publisher Ghostwriting for your service because working with us means getting the best.'}
      />
      <BTM />
      <CTA3 />
      <MBOOK1 />
      <PublishingNewComponent
        subtitle="Are You Ready To Be On The"
        title="List Of Best-Selling Authors?"
        desc="Let’s Work Together!"
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <WMODE1 
        subtile="Carrying out"
        title="The Fastest Work Mode, Get Your <br className='mr-lg:block hidden' /> Work in 4 Easy Steps"
        desc=" Working with us gives you prompt delivery of work because we have set up everything systematically. Here is our 4 step process, which keeps us streamlined from the beginning."
        GridCols="grid-cols-4"
        StoryPlotData = {[
          {
              steps: "Step 01",
              heading: "Submit Your Manuscript",
              desc: "After making up your mind about working with us, you place your order."
          },
          {
              steps: "Step 02",
              heading: "Edit & Design",
              desc: "We refine your text and design your book's cover."
          },
          {
              steps: "Step 03",
              heading: "Review & Approve",
              desc: "You review our work and give the green light."
          },
          {
              steps: "Step 04",
              heading: "Publish & Distribute",
              desc: "Your book is published and distributed on schedule."
          }
      ]}
      />
      <SwiperComponents />
      <StoryPlot />





    </>


  )
}
