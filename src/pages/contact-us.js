import React from 'react';
import Link from 'next/link';
import FEATURED from '../component/contactus/featuredSec'
import WMODE from '../component/workMode1'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import ContactModel from '../component/ContactModel'
import { MRHero } from '@/component';
const blog = () => {
  return (
    <>
      <main>
        {/* <FEATURED
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
        /> */}
         <MRHero
          title="Witness Excellence By <br /> Working With The Top <br /> Industry Specialists"
          desc="Your dream of becoming a successful author is our mission. So, don’t hold back; get ahold of us today."
          // containImg="images/newimg/contact-banner.png"
          logos="images/banner/img2.png"
          form={false}
          counter={true}
          classes='!py-[80px] bg-[#fefefe] bg-right bg-center'
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/portrait-woman-customer-service-worker.png')] before:!opacity-100"
        />
        <Enlistedlogo/>
        <ContactModel></ContactModel>
        <BTM />
        <CTA />
        <WMODE
          subtitle="Carrying out"
          title="The Fastest Work Mode, Get Your <br className='mr-lg:block hidden' /> Work in 4 Easy Steps"
          desc=" Working with us gives you prompt delivery of work because we have set up everything systematically. Here is our 4 step process, which keeps us streamlined from the beginning."
          GridCols="grid-cols-4"
          StoryPlotData={[
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

      </main>
    </>
  )
}

export default blog
