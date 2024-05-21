import React from 'react';
import Link from 'next/link';
import FEATURED from '../component/blogs/featuredSec'
import WEARE from '../component/blogs/LetUsWEARE'
import WMODE from '../component/workMode1'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import { MRHero, MRContact } from '@/component';
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import Head from 'next/head';

const blog = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main>
        {/* <FEATURED
          banneraffordable='aboutus'
          title='The Blogs of Barnett, Home of Creativity'
          dec={`Our blog is a paradise for writers, authors, and intellectuals alike. Over here, we share ideas on design, publishing, marketing, and promotion. We discuss the ghostwriting industry and how it works, as well as educating readers on what the landscape of the industry is.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href=" " className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        /> */}
        <MRHero
          title="The Blogs Of Best Selling Publisher, Home Of Creativity"
          desc="Our blog is a paradise for writers, authors, and intellectuals alike. Over here we share ideas on design, publishing, marketing and promotion. We discuss the ghostwriting industry and how it works as well as educating readers on what the landscape of the industry is."
          logos="images/banner/img2.png"
          classes='!py-[40px] bg-[#fefefe] bg-right bg-center'
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/young-student-working-assignment.png')] before:!opacity-100"
          counter={true}
          form={false}
        />
        <Enlistedlogo />
        <WEARE />
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
        <MRContact />
      </main>
    </>
  )
}

export default blog
