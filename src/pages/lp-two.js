import {
    Header,
    Hero,
    Bookmockups,
    Benifits,
    MarketingService,
    Consultation,
    Portfolio,
    MarketingProcess,
    WhyChoose,
    StandOut,
    BrandLogos,
    Testimonials,
    IndustryExperts,
    FAQS,
    Footer,
} from "@/component/LP-Two"
import Head from "next/head"
import Icon1 from "media/lp-two-images/servicesIcons/1.svg"
import Icon2 from "media/lp-two-images/servicesIcons/2.svg"
import Icon3 from "media/lp-two-images/servicesIcons/3.svg"
import Icon4 from "media/lp-two-images/servicesIcons/4.svg"
import Icon5 from "media/lp-two-images/servicesIcons/5.svg"
import Icon6 from "media/lp-two-images/servicesIcons/6.svg"
import Icon7 from "media/lp-two-images/servicesIcons/7.svg"
import Icon8 from "media/lp-two-images/servicesIcons/8.svg"
import Icon9 from "media/lp-two-images/servicesIcons/9.svg"
import Icon10 from "media/lp-two-images/servicesIcons/10.svg"
import Icon11 from "media/lp-two-images/servicesIcons/11.svg"
import Icon12 from "media/lp-two-images/servicesIcons/12.svg"
import Icon13 from "media/lp-two-images/servicesIcons/13.svg"
import Icon14 from "media/lp-two-images/servicesIcons/14.svg"
import Icon15 from "media/lp-two-images/servicesIcons/15.svg"
const LPTwo = () => {
    {/* Marketing Services Section Content */ }
    const serviceContent = [
        [Icon1, "Barnes and Noble <br/> Nook Edition", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon2, "Apple <br/> Books", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon3, "Amazon <br/> Kindle", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon4, "Marketing <br/> Consultation", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon5, "Business <br/> Cards", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon6, "Personal Marketing <br/> Assistants", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon7, "Social Media <br/> Set-Up", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon8, "Creative and Appealing <br/> Bookmarks", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon9, "Digital <br/> Postcards", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon10, "Press <br/> Release", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon11, "Book Video <br/> Trailers", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon12, "Marketing on Social Media <br/> Platforms", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon13, "Audio <br/> Book", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon14, "Author <br/> Website", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
        [Icon15, "Article <br/> Writing", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."],
    ];
    {/* Marketing Services Section Content */ }

    {/* MarketingProcess Section Content*/ }
    const accordionContent = [
        ["The Comprehensive Marketing Plan:", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques"],
        ["Social Media and Additional Media Channels:", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques"],
        ["Marketing Plan Implementation:", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques"],
        ["Target Audience:", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques"],
        ["Effective Marketing Strategy is What is Needed:", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques"],
    ];
    {/* MarketingProcess Section Content*/ }

    {/* WhyChoose Section Content*/ }
    const cardData = [
        ["Build Your Brand", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence."],
        ["Engage Your Audience", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence."],
        ["Leverage Media Channels", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence."],
    ];
    {/* WhyChoose Section Content*/ }

    {/* Testimonials Section Content*/ }
    const testimonialData = [
        ["Antonio L. Rivers", "Book Marketing", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced,effective"],
        ["Robert R. King", "Book Marketing", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced,effective"],
        ["Carol T. McKeehan", "Book Marketing", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced,effective"],
        ["Antonio L. Rivers", "Book Marketing", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced,effective"],
        ["Robert R. King", "Book Marketing", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced,effective"],
        ["Carol T. McKeehan", "Book Marketing", "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced,effective"]
    ];
    {/* Testimonials Section Content*/ }

    {/* FAQS Section Content */ }
    const faqsContent = [
        ["How Can Book Marketing Benefit My Author Career?", "Our Services Include Everything From Ghostwriting To Editing And Publishing Assistance. Whether You Need Help Crafting A Compelling Storyline Or Want To Polish Your Manuscript, Our Team Of Experienced Individuals Is Here To Help. We Pride Ourselves On Providing Exceptional Service And Producing High-Quality Work. Don’t Let Your Ideas Gather Dust On A Shelf. Contact Us To Help You Bring Your Book To Life. Trust Us, As One Of The Top Book Writing Companies In The Industry, To Turn Your Book Into A Best-Seller."],
        ["Is Social Media Essential For Book Marketing, And Which Platforms Are Most Effective?", "Our Services Include Everything From Ghostwriting To Editing And Publishing Assistance. Whether You Need Help Crafting A Compelling Storyline Or Want To Polish Your Manuscript, Our Team Of Experienced Individuals Is Here To Help. We Pride Ourselves On Providing Exceptional Service And Producing High-Quality Work. Don’t Let Your Ideas Gather Dust On A Shelf. Contact Us To Help You Bring Your Book To Life. Trust Us, As One Of The Top Book Writing Companies In The Industry, To Turn Your Book Into A Best-Seller."],
        ["What Is SEO Book Marketing, And Why Is It Important For Authors?", "Our Services Include Everything From Ghostwriting To Editing And Publishing Assistance. Whether You Need Help Crafting A Compelling Storyline Or Want To Polish Your Manuscript, Our Team Of Experienced Individuals Is Here To Help. We Pride Ourselves On Providing Exceptional Service And Producing High-Quality Work. Don’t Let Your Ideas Gather Dust On A Shelf. Contact Us To Help You Bring Your Book To Life. Trust Us, As One Of The Top Book Writing Companies In The Industry, To Turn Your Book Into A Best-Seller."],
        ["What Is The Purpose Of Book Marketing Services?", "Our Services Include Everything From Ghostwriting To Editing And Publishing Assistance. Whether You Need Help Crafting A Compelling Storyline Or Want To Polish Your Manuscript, Our Team Of Experienced Individuals Is Here To Help. We Pride Ourselves On Providing Exceptional Service And Producing High-Quality Work. Don’t Let Your Ideas Gather Dust On A Shelf. Contact Us To Help You Bring Your Book To Life. Trust Us, As One Of The Top Book Writing Companies In The Industry, To Turn Your Book Into A Best-Seller."],
    ];
    {/* FAQS Section Content */ }
    return (
        <main>
            {/* Head */}
            <Head>
                <meta name="robots" content="noindex" />
                <title>LP Two | Best Book Publishing Company</title>
                <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
            </Head>
            {/* Head */}
            <Header />
            {/* Hero Section */}
            <Hero
                title={`Providing <span class="text-[#40BEE2]"> Professional</span> Online <br class="mr-lg:block hidden" /> <span class="text-[#40BEE2]">Book</span> Marketing Services`}
                desc={`We will strategically promote your books online to optimize sales and secure the well-deserved exposure your <br class="mr-xl:block hidden" /> work deserves. We will strategically promote your books online to optimize sales`}
            />
            {/* Hero Section */}

            {/* Books Mockup Section */}
            <Bookmockups />
            {/* Books Mockup Section */}

            {/* Benifits Section */}
            <Benifits
                title="How We Market Your Book?"
                desc="Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing."
            />
            {/* Benifits Section */}

            {/* Marketing Services Section */}
            <MarketingService
                title={`Our Book <span class="text-[#40BEE2]">Marketing</span> Services`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned <br class="mr-xl:block hidden" /> marketing professionals expertly employ advanced, effective techniques to boost your Consistency.`}
                services={serviceContent} />
            {/* Marketing Services Section */}

            {/* Consultation Section */}
            <Consultation
                title={`Request <span class="text-[#40BEE2]">Free Consultation</span> From Experts Today!`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned <br class="mr-lg:block hidden" /> marketing professionals expertly employ advanced, effective techniques to boost your Consistency.`}
            />
            {/* Consultation Section */}

            {/* Portfolio Section */}
            <Portfolio
                subtitle="Reach A Mass Readership?"
                title={`Our <span class="text-[#40BEE2]">Genre</span> Portfolio`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned <br class='mr-lg:block hidden' /> marketing professionals expertly employ advanced, effective techniques to boost your Consistency.`}
            />
            {/* Portfolio Section */}

            {/* MarketingProcess Section */}
            <MarketingProcess
                title={`Our <span class='text-[#40BEE2]'>Streamlined</span> Book <span class='text-[#40BEE2]'>Marketing</span> Process`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned <br class="mr-lg:block hidden" /> marketing professionals expertly employ advanced, effective techniques to boost your Consistency.`}
                items={accordionContent}
            />
            {/* MarketingProcess Section */}

            {/* WhyChoose Section */}
            <WhyChoose
                title={`Why Choose Our Book Marketing Company?`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.`}
                card={cardData}
            />
            {/* WhyChoose Section */}

            {/* StandOut Section */}
            <StandOut
                title={`Ready To Make Your Book Stand Out?`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost <br class="mr-xl:block hidden" /> your literal presence. Our seasoned marketing professionals expertly employ advanced, effective <br class="mr-xl:block hidden" /> techniques to boost your Consistency.`}
            />
            {/* StandOut Section */}

            {/* BrandLogos Section */}
            <BrandLogos
                title={`Just By <span class="text-[#40BEE2]">Working</span> With US.`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective <br class="mr-xl:block hidden" /> techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.`}
            />
            {/* BrandLogos Section */}

            {/* Testimonials Section */}
            <Testimonials
                title="Our <span class='text-[#40BEE2]''>Client</span> Testimonials"
                desc="Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned <br /> marketing professionals expertly employ advanced, effective techniques to boost your Consistency."
                data={testimonialData}
            />
            {/* Testimonials Section */}

            {/* IndustryExperts Section */}
            <IndustryExperts
                title={`Let's Turn Your Book Into A Best Seller`}
                desc={`Best Selling Publisher stands as the pinnacle of excellence in the world of publishing services, renowned for its unparalleled commitment to author success. With a dedicated team of industry experts and innovative resources at their disposal, Best Selling Publisher goes above and beyond.`}
                descTwo={`Don't hesitate to reach out and take the first step towards literary success with one of the finest publishers in the industry.`}
            />
            {/* IndustryExperts Section */}

            {/* FAQS Section */}
            <FAQS
                title={`Frequently <span class='text-[#40BEE2]'>Asked</span> Questions`}
                items={faqsContent}
            />
            {/* FAQS Section */}

            {/* Footer Section */}
            <Footer />
            {/* Footer Section */}
        </main>
    )
}
export default LPTwo;