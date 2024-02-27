import React from 'react';
import Link from 'next/link';
//
import FEATURED from '../component/bookPublication/featuredSec'
import WEARE from '../component/bookPublication/LetUsWEARE'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import PWMODE from '../component/ProcessWorkMode'
import PUBLISHING from '../component/publishing'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import { MRHero } from '@/component';
import StoryPlot from '@/fa-component/StoryPlot';


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
          subTitle="Awarded #1 Book Publishing Services"
          title="Transform Your Manuscript Into  A Bestseller With Premier Book Publishing Services"
          desc="Welcome to Best Selling Publisher, where your publishing dreams turn into reality. As a leading book publishing company, we specialize in bringing authors' visions to life and catapulting their works onto bestseller lists, including Amazon's coveted ranks.With our comprehensive book publishing services, from meticulous editing to bespoke marketing strategies, we're here to guide you every step of the way. Partner with us and see your book shine across the globe."
          logos="images/banner/img2.png"
          counter={true}
          groupCTA={false}
          classes="bg-right bg-center !py-[80px]"
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/bookstore-with-bookshelf.png')]"
        />
        <Enlistedlogo />
        <WEARE />
        <PUBLISHING
          bgImg="mr-md:bg-[url('../../public/ahsan/bg_black.png')]"
          classes="bg-black"
        />
        <PWMODE 
          PublishWithUs={
            [
              {
                  steps: "Step 01",
                  heading: "Professionalism",
                  desc: "We uphold the highest standards of professionalism, ensuring that your book is bound with quality. Our commitment to excellence is non-negotiable."
              },
              {
                  steps: "Step 02",
                  heading: "Experience",
                  desc: "With years of experience in the publishing industry, we possess a profound understanding of what it takes to make a book successful. We’ve worked with authors from diverse genres, and our portfolio speaks for itself."
              },
              {
                  steps: "Step 03",
                  heading: "Customization",
                  desc: "We understand that every author and book is unique. That’s why our services are fully customizable and tailored to your specific needs and goals. Your vision is at the forefront of everything we do, from book writing to book design services."
              },
              {
                  steps: "Step 04",
                  heading: "Affordability",
                  desc: "We believe that publishing should be accessible to all. Our book services pricing is competitive, and we offer flexible payment options to accommodate your budget."
              },
              {
                  steps: "Step 05",
                  heading: "Confidentiality",
                  desc: "We take your privacy seriously and maintain strict confidentiality throughout the entire process. Your work is safe in our hands."
              },
              {
                  steps: "Step 06",
                  heading: "Submitting it for review",
                  desc: "This is the final stage of the process, ensuring that all tasks are completed and your design is perfected. Our team affirms your success."
              }
          ]
          }
        />
        <BTM />
        <CTA />
        {/* <WMODE /> */}
        <SwiperComponents />
        <StoryPlot />
      </main>
    </>
  )
}

export default about
