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
import Head from 'next/head'


const Ghostwriting = () => {

  return (
    <>
      <Head>
        <title>Professional Ghostwriting Services | Best Selling Publisher</title>
        <meta name="description" content="Best Selling Publisher offers professional ghostwriting services tailored to your needs. Start your publishing journey today and see why we're the premier choice for authors." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </Head>
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
          title="Affordable and Professional  <br /> Ghostwriting Services"
          desc="Do you know how to make your content incredible? You team up with the experts! Over the years, we have assisted innumerable authors who aspired to become the next best sellers. If you plan to be one of them, we are here for you."
          logos="images/banner/img2.png"
          counter={true}
          classes='!py-[80px] bg-[#fefefe]'
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/serious-man.png')]"
        />
        <Enlistedlogo />
        <LETUSHELP />
        <GhostWriting 
        serviceTitle="Ghostwriting Services"
          serviceDesc="What if we tell you that you no longer have to worry about writing? It’ll ease so many of your problems, right?"
          serviceDesc2="Best Selling Publisher's exceptional ghostwriting services set them apart in the industry. Their team of skilled writers possesses a rare talent for impeccably embodying the voice and vision of their clients, whether it's for a memoir, a novel, or corporate literature."/>
        <CREATIVEGHOSTWRITERS />
        <CTA />
        <BTM />
        <WMODE
          subtitle="We Pursue"
          title="A Swift Work Mode that Involves 4 Easy Steps"
          desc="We emphasize prompt deliveries because we don’t like to keep you waiting. Following are the 4 easy steps that keep us streamlined from the beginning:"
          GridCols="grid-cols-4"
          StoryPlotData={[
            {
              steps: "Step 01",
              heading: "Submit Your Manuscript",
              desc: "Start your publishing process by sharing your manuscript with us."
            },
            {
              steps: "Step 02",
              heading: "Edit & Design",
              desc: "We add our artistic expertise while retaining your unique voice."
            },
            {
              steps: "Step 03",
              heading: "Review & Approve",
              desc: "We will NEVER go above your head! Your approval matters, and we want to ensure our creative contributions align with your vision."
            },
            {
              steps: "Step 04",
              heading: "Publish & Distribute",
              desc: "Witness your book being published and reaching readers across the globe."
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
