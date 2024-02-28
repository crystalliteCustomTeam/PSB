import WEARE from "@/component/bookPublication/LetUsWEARE"
import PWMODE from "@/component/ProcessWorkMode"
import PUBLISHING from "@/component/publishing"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import SwiperComponents from "@/component/SwiperComponent"
import { MRHero, MRContact, MRContent1 } from "@/component"
import Enlistedlogo from "@/fa-component/Enlistedlogo"

const Publication = () => {
  return (
    <main>
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
      <MRContent1
        title="Our Book Publishing Experts Will Work to Fine-Tune Your Book"
        desc="At Best Selling Publisher, we specialize in comprehensive book publishing services designed to bring your manuscript to life and get it into the hands of eager readers we're dedicated to crafting legacies. Here’s why countless authors have trusted us to navigate their publishing journey:"
        img1="/ahsan/book-publishingsection2.png"
        list={[
          "<span class='text-primary-100 font-bold'>Expertise Across Genres:</span> Whether your masterpiece is fiction, non-fiction, or anything in between, our team of seasoned editors, designers, and marketing strategists bring your story to life, ensuring it resonates with your target audience.",
          "<span class='text-primary-100 font-bold'>Customized Publishing Plans:</span> Understanding that each book is unique, we offer personalized publishing services tailored to meet your specific needs. From Amazon book publishing to global distribution, we customize our approach to maximize your book's success.",
          "<span class='text-primary-100 font-bold'>Unparalleled Amazon Presence:</span> Leveraging our deep understanding of Amazon book publishing services, we optimize your book’s visibility and sales potential, helping you climb the ranks and achieve bestseller status.",
          "<span class='text-primary-100 font-bold'>Comprehensive Marketing Support:</span> Our innovative marketing solutions extend your book's reach, engaging readers across multiple platforms and turning visibility into sustained success"
        ]}
        direction="flex-row-reverse"
        listBorder="border-b-[1px] border-black pb-2 !font-normal"
      />
      <MRContent1
        subTitle="Global Publishing Excellence Awaits Your Book"
        title="Maximize Your Book's Impact with Our Publishing Services"
        desc="Step into the spotlight with Best Selling Publisher, your trusted book publishing company dedicated to amplifying authors' voices worldwide. We specialize in navigating the complexities of the publishing landscape to ensure your book achieves the recognition it deserves. From Amazon book publishing services to extensive distribution networks, our tailored approach positions your work in front of the right audience, both digitally and in print."
        listing={false}
        theme="dark"
        classes="bg-[url('../../public/imageAR/serviceBG.png')]"
        img1="/assets/images/newimg/graduation-cap-earth-globe.png"
        textTheme="text-white"
        cta={false}
        ctaText="Publish Your Book, Reach the World - Get Started!"
      />
      <PWMODE
        PublishWithUs={
          [
            {
              step: "Step 01",
              heading: "Professionalism",
              desc: "We uphold the highest standards of professionalism, ensuring that your book is bound with quality. Our commitment to excellence is non-negotiable."
            },
            {
              step: "Step 02",
              heading: "Experience",
              desc: "With years of experience in the publishing industry, we possess a profound understanding of what it takes to make a book successful, We've worked with authors from diverse genres, and our portfolio speaks for itself."
            },
            {
              step: "Step 03",
              heading: "Customization",
              desc: "We understand that every author and book is unique. That's why our services are fully customizable, tailored to your specific needs and goals. Your vision is at the forefront of everything we do from book writing to book design services."
            },
            {
              step: "Step 04",
              heading: "Affordability",
              desc: "We believe that publishing should be accessible to all, Our book services pricing is competitive, and we offer flexible payment options to accommodate your budget."
            },
            {
              step: "Step 05",
              heading: "Confidentiality",
              desc: "We take your privacy seriously and maintain strict confidentiality throughout the entire process. Your work is safe in our hands."
            },
            {
              step: "Step 06",
              heading: "Submitting it for review",
              desc: "Now this is the final stage of the process when we submit it for review and ensure that all the tasks are completed and that your design is perfected. Our team will ensure your success."
            }
          ]
        }
      />
      <BTM />
      <CTA />
      <SwiperComponents />
      <MRContact />
    </main>
  )
}

export default Publication