import React from 'react'
import LHPress from '../component/PressReleaseWritingServices/LetUsPress'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import { MRHero, MRContact, MRContent2 } from '@/component'




const Ghostwriting = () => {

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };
  const MRContent2Data = [
    {
      title: "Fiction",
      desc: "Our fiction ghostwriters will assist you in creatively expressing your ideas into enticing literacy that will captivate your audience. All aspects of a story are considered, particularly the author’s major plot and characters. "
    },
    {
      title: "Informative",
      desc: "Our ghostwriters comprehend the nuance of your text. They ensure their information is reliable and well-acknowledged worldwide, under the available data and facts."
    },
    {
      title: "Memoir",
      desc: "Our ghostwriters have been trained to write memoirs, not to confuse them with autobiographies. Furthermore, they cherish your sentiments and emotions and go to great lengths to turn your precious memories into a book."
    },
    {
      title: "Children's Book",
      desc: "Our well-trained and experienced writers are well-versed in all aspects of children’s books. They use their ingenuity to write classic subjects that young minds can understand, with vibrant graphics that keep them hooked."
    },
    {
      title: "Self Help Book",
      desc: "We allow your ideas to reach the right audiences and serve your experiences to be their holy grail in the relevant endeavor."
    },
    {
      title: "Biography",
      desc: "Our expert writers are keenly interested in learning about your subjects’ stories, holding the skills and expertise to provide you with well-written content for whoever you want to write about. They also conduct extensive research through various channels such as newspapers, blogs, and interviews to ensure they use correct facts and figures."
    }
  
  ]
  return (
    <>
      <main>
        <MRHero
          title="Get Your Press Releases <br /> Covered By the Right Sites"
          desc="Send your work to a larger target audience that increases your brand visibility and makes your services known to the masses."
          logos="images/banner/img2.png"
          classes='bg-[#fefefe] !py-[80px]'
          counter={true}
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/newspaper-concept.png')]"
        />
        <Enlistedlogo />
        <LHPress />
        <GhostWriting serviceTitle="Press Release Writing Services"
        serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties."/>
        <MRContent2
          subTitle="Our Creative Ghostwriters,"
          title="Bringing Your Imagination To Life."
          desc={`You may have an idea for the next best-seller, but you may not have the time or expertise to write it yourself. Our platform meets all of the <br class="mr-xl:block hidden"/> requirements and offers a diverse range of writing styles, including:`}
          data={MRContent2Data}
        />
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
        <MRContact/>
      </main>
    </>
  )
}

export default Ghostwriting;
