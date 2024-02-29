import PWMODE from "@/component/ProcessWorkMode"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent1 } from "@/component"
import TabNavigation from "@/component/marketing/TabNavigation"
import Head from "next/head"

const BookMarketing = () => {
  return (
    <main>
      <Head>
        <title>Book Marketing | Best Book Publishing Company</title>
        <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
      </Head>
      <MRHero
        title="Providing Professional Online Book Marketing Services"
        desc="We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves."
        logos="images/banner/img2.png"
        counter={true}
        classes='bg-right bg-center !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/young-beautiful-woman.png')]"
      />
      <Enlistedlogo />
      <MRContent1
        subTitle="Optimizing Sales"
        title="Optimal Marketing Strategies That Will Let Your Work Thrive!"
        desc="An exceptional book can be let down with no or less marketing. After availing book writing services, marketing becomes a must in today’s hyper-competitive world. Effectively promoting yourself can be impossible without the necessary experience and expertise, qualities integral in the ghostwriters at Best Selling Publisher Ghostwriting. Proficient book marketers are crucial in guiding you at every step of your journey. We provide comprehensive marketing services, including Amazon marketing for the Kindle Vella distribution platform, eBook marketing for various online digital stores, author marketing to enhance your personal brand, and book marketing for non-digital formats. Our approach to marketing involves analyzing market trends first and then incorporating innovative methods to maximize impact."
        img1="ahsan/optimizingSales.png"
        listing={false}
      />
      <div className="relative  text-white xs:mb-0 bg-black" >
        <div className='mr-container m-auto py-0 mr-xs:px-0 mr-xs:py-5'>
          <TabNavigation />
        </div>
      </div>
      <PWMODE
        subtitle=""
        title="The Process of Us Marketing Your Product"
        desc="We will discuss below how we get you recognition and fame with the help of our marketing services. Our marketing team is adept at changing situations within the market and capable of utilizing the best practices that lead to the most attention and attraction towards your product, whatever it might be."
        PublishWithUs={[
          {
            step: "Step 01",
            heading: "Sign Up",
            desc: "You first sign up for our marketing services, be it book promotion, author marketing, or eBook marketing services. You answer these questions in a questionnaire. Once this is done, you will get aligned with one of our sales people who assigns your project to a particular department suited to your needs."
          },
          {
            step: "Step 02",
            heading: "Marketing Review",
            desc: "Our marketing experts then review a marketing strategy to utilize for your goals. This is based on the nature and scope of your project. Everything that follows will vary accordingly. A large project requires more investment and a larger team to cater to your needs.."
          },
          {
            step: "Step 03",
            heading: "Research",
            desc: " We then begin research on the subjects and topics that people are interested in. What are common traits within these topics, such as the covers, titles, and book descriptions? What are the things they try to avoid? These are the questions that we answer during our research phase."
          },
          {
            step: "Step 04",
            heading: "Target audience selection",
            desc: "Here, we decide who the target audience or demographic will be for your book, the type of product they might like, and how to meet or exceed their expectations."
          },
          {
            step: "Step 05",
            heading: "Making it look good",
            desc: " Now is the time to work on the book cover. Your cover is the most important piece of marketing of your book, and our cover designers understand this better than anyone else."
          },
          {
            step: "Step 06",
            heading: "Submitting it for review",
            desc: "Now this is the final stage of the process when we submit it for review and ensure that all the tasks are completed and that your design is perfected. Our team will ensure your success."
          }
        ]}

      />
      <BTM />
      <CTA />
      <SwiperComponents />
      <MRContact />
    </main>
  )
}

export default BookMarketing