import Head from 'next/head'
// components
import Tradition from '@/fa-component/Tradition'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import SwiperComponent from '@/component/SwiperComponent'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import PublishingNewComponent from '@/fa-component/PublishingNewComponent'
import bannerImg from 'media/ahsan/children-banner.png'
import img2 from 'media/images/banner/img2.png'
import { MRHero, MRContact, MRCards, MRContent1 } from '@/component'
import Sales from 'media/ahsan/sales.png'
import AudienceOriented from 'media/ahsan/audience-oriented.png'
import Device from 'media/ahsan/device-compatibility.png'
import EasyUpload from 'media/ahsan/easyupload.png'
import Jambore from 'media/ahsan/jambore.png'
import IllustrationPackages from '@/component/IllustrationPackages/IllustrationPackages'

const MRCardData = [
  {
    classes: "bg-[#fff] shadow-lg px-3 rounded-2xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#40BEE2] hover:!text-white text-center",
    content: [
      {
        icon: Sales,
        title: "Increased <br/> Sales",
      },
      {
        icon: AudienceOriented,
        title: "Audience-Oriented <br/> Content",
      },
      {
        icon: Device,
        title: "Device <br/> Compatibility",
      },
      {
        icon: EasyUpload,
        title: "Easy To <br/> Upload",
      }
    ]
  }]

const MRCardData2 = [
  {
    classes: "bg-[#fff] shadow-lg mr-2xl:!px-5 mr-md:!px-4 px-3 rounded-xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
    stepText: "Step",
    indexing: true,
    content: [
      {
        textColor: "text-[#40BEE2] group-hover:text-white",
        title: "Sign Up",
        desc: "Sign up now and share your exciting ideas about illustrative design. Please consult with our highly trained consultants and explain to them about your needs and requirements. Please fill out our contact us form and get in touch with our consultant right away",
      },
      {
        textColor: "text-[#40BEE2] group-hover:text-white",
        title: "Illustration Commences",
        desc: "After you've finalized your favorite illustration design, our expert illustrators commence the work right away on your custom illustration. Each illustration can take some time to prepare as they try to create something unique and charming",
      },
      {
        textColor: "text-[#40BEE2] group-hover:text-white",
        title: "Final Delivery",
        desc: "After we've finalized the design and got the designed approved by you, we then commence our final phase to provide you with the print-ready professional PDF files and finally, send you the complete formats and high-quality final files.",
      }
    ]
  }]
const ChildrenBookIllustration = () => {
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
  return (
    <>
      <Head>

        <title>Ebook Publishing Company - Best Selling Publisher - Amazon Publishing Services</title>
        <link rel="icon" href="/images/favicon.svg" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>

      <MRHero
        title="Professionally-Illustrated Children’s Books"
        desc="Want a book that your children would love to read? Illustration Experts has got you covered. Our exciting and eye-catching illustrations will get children to love reading books. We aim to elevate your book's aesthetic value to indulge the children fully in their world of imagination while reading."
        logos="images/banner/img2.png"
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/children_book_illustration.png')]"
      />

      <Enlistedlogo />

      <MRCards
        subTitle="Let Us Help You"
        title={`Children's Book Illustration Services`}
        desc="Designing a children's book can be quite hectic since we cannot comprehend their choice, but our highly experienced and qualified illustrators can create something that people of all ages would love to read. We make sure that you get to relive your childhood and make children love everything about reading. Our illustration will surely attract more conversions for your book."
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[100%] mx-auto"
        cta={true}
        variant="icons"
        data={MRCardData} />

      {/*========= Tradition fold =========*/}
      <Tradition
        title="Some Of Our Best Book Cover Illustrations"
        desc="We've creating exceptional illustrations for countless books across various genres. Please have a look at some of our best work so far."
        background="bg-[url('../../public/ahsan/bgBlack2.png')]"
        classes="!text-[#fff]"
        BGclasses="bg-[#000]"
        txtColor="!text-[#fff]"
      />

      <MRContent1
        title="What Are The Types Of Illustrations For Children’s Books?"
        desc="From Acrylic To Charcoal To Watercolor, We Know Exactly What To Incorporate Onto Our Illustrations To Help Your Audience Connect Better With Your Brand."
        list={[
          "<span class='text-[#00c0e4] font-bold'>Spot Illustrations:  </span> These Are Small, Simple Illustrations To Liven Up A Page With Text. They're Usually A Quarter Of A Page Or Less With Little Or No Background.",
          "<span class='text-[#00c0e4] font-bold'>Half-Page Illustrations: </span>This Is An Illustration That Fills Half A Page. While It Can Be Detailed, The Background Will Be Less Detailed Than A Full-Page Illustration Due To Its Smaller Size.",
          "<span class='text-[#00c0e4] font-bold'>Single (Full) Page Illustrations: </span>This Is An Illustration That Fills One Whole Page. Here We Can Pull Out All The Stops And Include Lots Of Detail, Including Text If Needed",
          "<span class='text-[#00c0e4] font-bold'>Spread Illustrations: </span>Spread Across Two Full Pages, Normally With Text On The Illustration. Making Your Whole Book Double-Page Spreads Will Make It Amazing."
        ]}
        listClasses="grid grid-cols-2 gap-3"
        img1={Jambore}
        direction="flex-row-reverse"
      />

      <PublishingNewComponent
        subtitle="Share your exciting ideas with Our Illustration"
        title="Experts For The Best Results."
        desc="Talk to Us Today!"
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      {/* Packages */}
      <IllustrationPackages packagesData={packagesData} />
      {/*========= CTA fold =========*/}
      <BTM />
      <CTA />

      <MRCards
        subTitle="Carrying out"
        title={`Steps To Get Started!`}
        desc={`We are known for our outstanding, extraordinary quality illustrations and our dependable services at extremely affordable prices. Here is our 3-step process for a charming illustrative design!`}
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 mr-2xl:w-[90%] !gap-x-5 mx-auto"
        cta={false}
        variant="steps"
        data={MRCardData2} />

      {/*========= swiperComponent fold =========*/}
      <SwiperComponent />

      {/*========= Bookshelf fold =========*/}
      <MRContact
        BGimage="before:!bg-[url('../../public/ahsan/childrensBookStoryImage.png')]"
      />
    </>
  )
}

export default ChildrenBookIllustration
