import Head from 'next/head'
// components
import Tradition from '@/fa-component/Tradition'
import EnlistedNew from '@/fa-component/childrenIllustration/EnlistedNew'
import BroaderNew from '@/fa-component/BroaderNew'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import SwiperComponent from '@/component/SwiperComponent'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import StoryPlot from '@/fa-component/StoryPlot';
import PublishingNewComponent from '@/fa-component/PublishingNewComponent'
import MagazineProp from '@/component/MagazineProp'

// import { Helmet } from 'react-helmet'
// images
import bannerImg from 'media/ahsan/children-banner.png'
import img2 from 'media/images/banner/img2.png'
import broader from 'media/ahsan/children-broder.png'
import { MRHero } from '@/component'
import Sales from 'media/ahsan/sales.png'
import Compatibility from 'media/ahsan/compatibility.png'
import UniqueIllustrations from 'media/ahsan/device-compatibility.png'
import EasyUpload from 'media/ahsan/easyuploadCover.png'
import ChildrenProps from '@/component/childrenBookIllustration/childProps'
import WMODE1 from '../component/workMode1'
import BestFriendMarco from 'media/ahsan/bestFriendMarco.png'
import IllustrationPackages from '@/component/IllustrationPackages/IllustrationPackages'


const propData=[
  {
    imagePath: Sales ,
    heading:"Increased <br/> Sales",
    alt:"Increased Sales"
  },
  {
    imagePath: Compatibility ,
    heading:"All-Device <br/> Compatibility",
    alt: "All-Device Compatibility"
  },
  {
    imagePath: EasyUpload ,
    heading:"Easy To <br/> Upload",
    alt:"Easy To Upload"
  },
  {
    imagePath: UniqueIllustrations ,
    heading:"Unique <br/> Illustrations",
    alt:"Unique Illustrations"
  }
  
]

const amazonpublishing = () => {
  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3 leading-tight'>Pinnacle Publishing For<br /> Children's Illustration<br />Book</h1>

  const bannertext = [
    {
      title: newSpan,
      discuss: `LET'S DISCUSS`,
      homebannernum: '800-781-9093',
      bannercounter: 'counter',
      imageban: bannerImg,
      img2: img2,
    }
  ]
  const packagesData = [
    {
      title: "Half Page Illustration",
      amount: "before:content-['$75']",
      desc: "As the name says, this is an illustration that fills half a page. While it can be detailed, due to it's smaller size, the background will be less detailed than a full page illustration.",
      note: "Add on: £50 For Expicted Services",
      list: [
        "Up To Two Characters",
        "Background",
        "Extra Characters - $15 Each",
      ]
    },
    {
      title: "Full Page Illustration",
      amount: "before:content-['$105']",
      desc: "This is a full page illustration where we pull out all the stops and include lots of detail! We can also leave space for your text if needed.",
      note: "Add on: £50 For Expicted Services",
      list: [
        "Up To Three Characters",
        "Detailed Background",
        "Extra Characters - $15 Each",
      ]
    },
    {
      title: "Spread Illustration",
      amount: "before:content-['$190']",
      desc: "Spread across two full pages, normally with text on the illustration. While a mix of different illustration sizes makes a beautiful book, going all out and making your whole book double- page spreads will undoubtedly will make it amazing!",
      note: "Add on: £50 For Expicted Services",
      list: [
        "Up To Six Characters",
        "Detailed Background",
        "Extra Characters - $15 Each",
      ]
    },
  ];
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

      <MRHero
        title="Book Cover Illustration Services"
        desc="Achieve more with our top-of-the-line book cover illustration services that make your books visually appealing and irresistible."
        logos="images/banner/img2.png"
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/bookCoverillustration1.png')]"
      />
      

      {/*========= Clients fold =========*/}
      {/* <Clients /> */}

      <Enlistedlogo />

      <MagazineProp
        subtitle="Let Us Help You"
        title="Give Your Book Cover a Tremendous Finish"
        desc="It would be best to have a team of professional book cover illustrators that recognize the value of cover images and drawings in kids' literature, art books, comics, graphic novels, digital book cover, tutorials, and guide books. The right illustrations are necessary to represent the theme of the book and the author's thought process. Our expert illustrators will produce compelling drawings that will excite your viewers, whether you’re searching for graphics for your entire book or just the cover."
        classes=""
        data={propData}
      />
      {/*========= Tradition fold =========*/}
      <Tradition
        title="Some Of Our Best Book Cover Illustrations"
        desc="We have worked on a variety of projects for clients that included creating picture book illustrations, illustrated stories, cartoon books, kid’s comics, children's encyclopedia, and more. Have a look at our best sample for children's book illustrations below!"
        background="bg-[url('../../public/ahsan/blueBG.png')]"
        classes="!text-[#fff]"
        BGclasses="bg-[#40BEE2]"
        txtColor="!text-[#fff]"
      />

     <ChildrenProps
      subtitle=''
      title='Why Choose Us?'
      desc='Illustration Experts has been empowering clients to share their ideas into excellent quality illustrations at extremely competitive rates. Our team possesses the required level of expertise and creativity to deliver pragmatic designs and evoke an emotional response.'
      ImagePath={BestFriendMarco}
      lists={[
        "<span class='text-[#00c0e4] font-bold'>Qualified Illustrators: </span>Every Work Of Our Client Is Catered By An Experienced Professional To Ensure That The Work Is Perfect.",
        "<span class='text-[#00c0e4] font-bold'>Quickest Turnarounds: </span>Late Delivery Of Services Is Something That Puts Customers Off, And We Never Let That Happen. We Always Deliver On Time!",
        "<span class='text-[#00c0e4] font-bold'>Satisfaction Guaranteed: </span>Our Experts Present You With Numerous Illustrations And Revise The Approved Ones Until You’re Fully Satisfied.",
        "<span class='text-[#00c0e4] font-bold'>Unlimited Revisions: </span>We Offer Unlimited Quick Revisions To Ensure That The Final Draft Lives Up To Our Client's Expectations."
      ]}
     />

      <PublishingNewComponent
        subtitle="Share Your Book Cover Illustration Requirements With"
        title="Our Experts For The Best Results."
        desc="Connect With Us Today!"
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
       {/* Packages */}
       <IllustrationPackages  packagesData={packagesData}/>
      
      {/*========= CTA fold =========*/}
      <BTM />
      <CTA />
      {/*========= WorkModules fold =========*/}
      <WMODE1 
        subtitle="Carrying out"
        title="Steps To Get Started!"
        desc=" We are known for our outstanding, extraordinary quality illustrations and our dependable services at extremely affordable prices. Here is our 3-step process for a charming illustrative design!"
        GridCols="grid-cols-3"
        StoryPlotData = {[
          {
              steps: "Step 01",
              heading: "Sign Up",
              desc: "Sign up now and share your exciting ideas about illustrative design. Please consult with our highly trained consultants and explain to them about your needs and requirements. Please fill out our contact us form and get in touch with our consultant right away"
          },
          {
              steps: "Step 02",
              heading: "Illustration Commences",
              desc: "After you've finalized your favorite illustration design, our expert illustrators commence the work right away on your custom illustration. Each illustration can take some time to prepare as they try to create something unique and charming"
          },
          {
              steps: "Step 03",
              heading: "Final Delivery",
              desc: "After we've finalized the design and got the designed approved by you, we then commence our final phase to provide you with the print-ready professional PDF files and finally, send you the complete formats and high-quality final files."
          }
      ]}
      />
      {/*========= swiperComponent fold =========*/}
      <SwiperComponent />

      {/*========= Bookshelf fold =========*/}
      <StoryPlot 
      BGimage="before:!bg-[url('../../public/ahsan/bookCoverssBGStory.png')]"
      />
    </>
  )
}

export default amazonpublishing
