import React from 'react'
import LETUSHELP from '../component/ghostWritingServices/LetUsHelp'
import GhostWriting from '@/component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import { MRHero, MRContact } from '@/component'


const Ghostwriting = () => {

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
          classes='!py-[80px] bg-[#fefefe]'
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/serious-man.png')]"
        />
        <Enlistedlogo />
        <LETUSHELP
          title='What Sets Us Apart?'
          desc='Best Selling Publisher Ghostwriting is a well-known international ghostwriting and editing firm that has been operating for over a decade. Our experts create well-versed writing that demonstrates true professionalism while exhibiting creativity. Our services are not only economical but also ensure that both the needs of the authors and the preferences of their target audience are adequately met. Some of our platform’s distinguishing traits are as follows:'
          data={[
            {
              h4title: "Seal of <br className='xl:hidden block' /> Approval",
              desc: "100% original Content",
              imgPath: ARcheck,
              alt: ARcheck
            },
            {
              h4title: "Reviewed by <br className='xl:hidden block' /> editors",
              desc: "Error-free copy",
              imgPath: ARcheck,
              alt: ARcheck
            },
            {
              h4title: "Unlimited <br className='xl:hidden block' /> Revisions",
              desc: "For all your book projects",
              imgPath: ARcheck,
              alt: ARcheck
            },
            {
              h4title: "Rights of  <br className='xl:hidden block' /> Ownership Maintained",
              desc: "No reselling",
              imgPath: ARcheck,
              alt: ARcheck
            },
          ]}
        />
        <GhostWriting serviceTitle="Ghostwriting Services"
          serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties.
        "/>
        <CREATIVEGHOSTWRITERS />
        <CTA />
        <BTM />
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
        <MRContact />
      </main>
    </>
  )
}

export default Ghostwriting;
