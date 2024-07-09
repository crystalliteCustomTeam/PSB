import MarketBook from "@/component/AudioBooklp/MarketBook"
import {
    CaseStudies,
    ContactUs,
    Header,
    Hero,
    Methods,
    Portfolio,
    SecondaryForm,
    Services,
    StandOut,
    Testimonials,
    WhyChoose,
    WorkingWithUs
} from "@/component/LP-Four"
import { FAQS, Footer, MarketingProcess } from "@/component/LP-Two"
// Testimonial Icons
import Icon1 from "media/book-illustrations/google.png"
import Icon2 from "media/book-illustrations/trustPilot.png"
// Marketing Image
import StreamlinedBooks from "media/lp-four/streamlinedBooks.png"
export default function LPFour() {
    {/* Testimonials Section Content*/ }
    const testimonialData = [
        ["Emma Rodriguez", "Bestselling Author", Icon1, "Working with this team transformed my book's reach. Their personalized marketing strategies truly made a significant difference in my book's success."],
        ["Michael Chen", "CEO of PageTurner Publishing", Icon1, "Their comprehensive services helped our authors gain visibility and drive sales. We're thoroughly impressed with the consistent and impactful results."],
        ["Lisa Thompson", "Indie Author", Icon1, "I was amazed by their dedication and support. They guided me through every step, ensuring my book's success and wider reach."],
        ["David Johnson", "Founder of Literary Horizons", Icon1, "Collaborating with them was a game-changer for our company. Their expertise and professionalism significantly boosted our authors' visibility."],
        ["Rachel Adams", "Marketing Director at BookWave", Icon2, "Our partnership with them has been incredibly fruitful. Their tailored strategies elevated our authors' works to new levels of success."],
        ["John Miller", "Author and Speaker", Icon2, "Their team provided the tools and support I needed to connect with a wider audience. Highly recommended for any author."]
    ];
    {/* Testimonials Section Content*/ }
    {/* MarketingProcess Section Content*/ }
    const accordionContent = [
        ["Initial Consultation", "We begin detailed consultations as part of our services to understand the goals and target audience of a book. We discuss your needs and outline the best marketing strategies to reach your aims"],
        ["Customized Marketing Plan", "We create a marketing plan customized to your book's needs. This plan outlines strategies and tactics to effectively reach and engage your target audience."],
        ["Content Creation and Optimization", "We produce high-quality content and optimize it for search engines. This ensures your book gets noticed and attracts the right audience."],
        ["Multi-Channel Promotion", "We do social media, email, and online advertising to promote your book, thereby maximizing your outreach and engagement with readers."],
        ["Ongoing Support and Analysis", "We provide continuous support and analyze your book's performance. This helps refine strategies and ensure your marketing efforts are always effective."],
    ];
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
        <div className="font-sans">
            <Header />
            <Hero />
            <MarketBook />
            <CaseStudies />
            {/* StandOut Section */}
            <StandOut
                title={`Become A Published Author Now`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. `}
            />
            {/* StandOut Section */}
            {/* Portfolio Section */}
            <Portfolio
                title={`Our Genre Portfolio`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal <br/> presence. Our seasoned marketing professionals expertly employ advanced, effective`}
            />
            {/* Portfolio Section */}
            <Services />
            <SecondaryForm />
            <Methods />
            <WorkingWithUs />
            {/* Testimonials Section */}
            <Testimonials
                title="Satisfied Client's"
                desc="Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. "
                data={testimonialData}
            />
            {/* Testimonials Section */}
            {/* MarketingProcess Section */}
            <MarketingProcess
                title={`Our 5-Step Process Of Self Book Publishing Company!`}
                desc={`Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals <br class="mr-2xl:block hidden"/> expertly employ advanced, effective techniques to boost your Consistency.`}
                items={accordionContent}
                booksImage={StreamlinedBooks}
            />
            {/* MarketingProcess Section */}
            <WhyChoose />
            {/* ContactUs Section */}
            <ContactUs />
            {/* ContactUs Section */}
            {/* FAQS Section */}
            <FAQS
                title={`Frequently Asked Questions`}
                items={faqsContent}
            />
            {/* FAQS Section */}
            {/* Footer Section */}
            <Footer />
            {/* Footer Section */}
        </div>
    )
}