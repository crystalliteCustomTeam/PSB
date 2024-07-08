"use client"
import React from 'react'
import Head from 'next/head'
import { Consultation, FAQS, Footer, IndustryExperts, MarketingProcess, StandOut } from '@/component/LP-Two'
import Working from '@/component/AudioBooklp/Working'
import MarketBook from '@/component/AudioBooklp/MarketBook'
import Banner from '@/component/AudioBooklp/Banner'
import BrandLogos from '@/component/AudioBooklp/BrandLogos'
import AudioBooks from '@/component/AudioBooklp/AudioBooks'
import ServiceAudio from '@/component/AudioBooklp/ServiceAudio'
// Images 
// Testimonial Icons
import Icon16 from "media/assets/audiobook/trust.png"
import Icon17 from "media/assets/audiobook/google.png"
import Testimonials from '@/component/AudioBooklp/Testimonials/Testimonials'
import ChooseAudio from '@/component/AudioBooklp/ChooseAudio'
// Stand Out 
import StandOutBanner from "media/assets/audiobook/standOutBanner.png"
// Industry Expert 
import IndustryExpertsBanner from "media/assets/audiobook/IndustryExpertsBanner.png"
// Marketing Image
import StreamlinedBooks from "media/assets/audiobook/streamlinedBooks.png"
// Consultation
import BannerBg from "media/assets/audiobook/consultationBanner.png"
import BannerMockup from "media/assets/audiobook/bannerMockup.png"
import Header from '@/component/AudioBooklp/Header'
import { MRHero } from '@/component'

const autoBookLp = () => {
    {/* MarketingProcess Section Content*/ }
    const accordionContent = [
        ["Initial Consultation", "We begin detailed consultations as part of our services to understand the goals and target audience of a book. We discuss your needs and outline the best marketing strategies to reach your aims"],
        ["Customized Marketing Plan", "We create a marketing plan customized to your book's needs. This plan outlines strategies and tactics to effectively reach and engage your target audience."],
        ["Content Creation and Optimization", "We produce high-quality content and optimize it for search engines. This ensures your book gets noticed and attracts the right audience."],
        ["Multi-Channel Promotion", "We do social media, email, and online advertising to promote your book, thereby maximizing your outreach and engagement with readers."],
        ["Ongoing Support and Analysis", "We provide continuous support and analyze your book's performance. This helps refine strategies and ensure your marketing efforts are always effective."],
    ];
    {/* Testimonials Section Content*/ }
    const testimonialData = [
        ["Antonio L. Rivers", "Bestselling Author", Icon16, "Working with this team transformed my book's reach. Their personalized marketing strategies truly made a significant difference in my book's success."],
        ["Robert R. King", "CEO of PageTurner Publishing", Icon17, "Their comprehensive services helped our authors gain visibility and drive sales. We're thoroughly impressed with the consistent and impactful results."],
        ["Carol T. McKeehan", "Indie Author", Icon16, "I was amazed by their dedication and support. They guided me through every step, ensuring my book's success and wider reach."],
        ["Antonio L. Rivers", "Bestselling Author", Icon16, "Working with this team transformed my book's reach. Their personalized marketing strategies truly made a significant difference in my book's success."],
        ["Robert R. King", "CEO of PageTurner Publishing", Icon17, "Their comprehensive services helped our authors gain visibility and drive sales. We're thoroughly impressed with the consistent and impactful results."],
        ["Carol T. McKeehan", "Indie Author", Icon16, "I was amazed by their dedication and support. They guided me through every step, ensuring my book's success and wider reach."],
    ];
    {/* Testimonials Section Content*/ }
    {/* MarketingProcess Section Content*/ }
    {/* FAQS Section Content */ }
    const faqsContent = [
        ["Can I hire someone to market my book?", "Yes, you can hire book marketing services to optimize your sales pages, making them irresistible to readers. A professional book marketer can enhance your Amazon description, select effective keywords, and even improve your website with special offers. This ensures your book attracts more attention and drives more sales."],
        ["How much does a professional book marketer cost?", "The cost of hiring a professional book marketer can vary greatly. If you're implementing your own promotional plan, expenses might be minimal, starting as low as $50. However, if you hire a publishing company to handle your book marketing from start to finish, costs can range up to $4,000 or more. The investment often reflects in the quality and effectiveness of the marketing results."],
        ["What is the difference between a book publicist and a book marketer?", "A book marketer focuses on paid promotions to drive sales, such as ads and optimized sales pages. On the other hand, a book publicist handles earned promotions and events, like media coverage and book signings. Essentially, marketing is about creating direct advertising opportunities, while publicity focuses on generating buzz and organic interest through media and events."],
        ["Can you sell a book without marketing?", "Selling a book without any form of marketing is virtually impossible, especially in self-publishing. Marketing is crucial to reach potential readers, generate interest, and drive sales. Without it, your book is unlikely to gain the visibility needed to achieve success"],
        ["What does book marketing look like?", "Book marketing involves using various online platforms and strategies to promote your book. This includes using social media, maintaining an engaging author website, and optimizing your Amazon profile. Key strategies encompass email marketing, search engine optimization (SEO), and paid advertisements. Together, these efforts help increase your book's visibility and attract a wider audience."]
    ];
    {/* FAQS Section Content */ }
    return (
        <>
            {/* Head */}
            <Head>
                <meta name="robots" content="noindex" />
                <title>Top Book Marketing Company - Best Selling Publisher</title>
                <meta name="description" content="Partner with Best Selling Publisher, an expert book marketing company, offering customized strategies to maximize your book's visibility and drive sales!" />
            </Head>
            {/* Head */}
            <Header />
            {/* Banner Start */}
            <Banner />
            {/* Banner End */}
            {/* Brands Logo Slider Start */}
            <BrandLogos />
            {/* Brands Logo Slider End */}
            {/* MarketBook Section */}
            <MarketBook />
            {/* MarketBook Section */}
            {/* Audio Book Start */}
            <AudioBooks />
            {/* Audio Book End */}
            {/* Services Start */}
            <ServiceAudio />
            {/* Services End */}
            {/* Testimonials Start */}
            <Testimonials
                title="Our Client Testimonials"
                desc="Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."
                data={testimonialData}
            />
            {/* Testimonials End */}
            {/* Consultation Section */}
            <Consultation
                title={`Request <span class="text-[#40BEE2]">Free Consultation</span> From Experts Today!`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.`}
                backgroundImage={BannerBg}
                mockup={BannerMockup}
            />
            {/* Consultation Section */}
            {/* MarketingProcess Section */}
            <MarketingProcess
                title={`Our 5-Step Process Of Self Book Publishing Company!`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.`}
                items={accordionContent}
                booksImage={StreamlinedBooks}
            />
            {/* MarketingProcess Section */}
            {/* Choose Audio Start */}
            <ChooseAudio />
            {/* Choose Audio End */}
            {/* StandOut Section */}
            <StandOut
                title={`Ready To Make Your Book Stand Out?`}
                desc={'Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.'}
                bannerBg={StandOutBanner}
            />
            {/* StandOut Section */}
            {/* BrandLogos Section */}
            <Working
                title={`Just By Working With Us.`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing.`}
            />
            {/* BrandLogos Section */}
            {/* IndustryExperts Section */}
            <IndustryExperts
                title={`Let's Turn Your Book Into A Best Seller`}
                desc={`Best Selling Publisher stands as the pinnacle of excellence in the world of publishing services, renowned for its unparalleled commitment to author success. With a dedicated team of industry experts and innovative resources at their disposal, Best Selling Publisher goes above and beyond.`}
                descTwo={``}
                isContact={true}
                bannerBg={IndustryExpertsBanner}
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
        </>
    )
}

export default autoBookLp
