import { Benifits, ContactUs, Header, Hero, IllustrationsProcess, Portfolios, StandOut, StandOut2, Testimonials, TypesOfIllustrations, WhyChoose } from "@/component/LP-Three";
import Head from "next/head";
import Book1 from "media/book-illustrations/portfolio/7.png"
import Book2 from "media/book-illustrations/portfolio/8.png"
import Book3 from "media/book-illustrations/portfolio/9.png"
import Book4 from "media/book-illustrations/portfolio/10.png"
import Book5 from "media/book-illustrations/portfolio/11.png"
// Testimonial Icons
import Icon1 from "media/book-illustrations/google.png"
import Icon2 from "media/book-illustrations/trustPilot.png"
import { FAQS, Footer } from "@/component/LP-Two";
const LpThree = () => {
    const tabContent = [
        {
            name: "Full Page Illustration",
            img: Book1,
            title: "Full Page Illustration",
            desc: "Full-page illustrations are visual showcases. These captivating artworks occupy an entire page, elevating your storytelling with intricate detail, vivid color, and compelling compositions. Make a bold statement with Anideos’ full-page children’s book illustrations design services. Our artists craft detailed, immersive visuals that enrich your storytelling experience. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."
        },
        {
            name: "Spot Illustration",
            img: Book2,
            title: "Spot Illustration",
            desc: "Full-page illustrations are visual showcases. These captivating artworks occupy an entire page, elevating your storytelling with intricate detail, vivid color, and compelling compositions. Make a bold statement with Anideos’ full-page children’s book illustrations design services. Our artists craft detailed, immersive visuals that enrich your storytelling experience. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."
        },
        {
            name: "Half Page Illustration",
            img: Book3,
            title: "Half Page Illustration",
            desc: "Full-page illustrations are visual showcases. These captivating artworks occupy an entire page, elevating your storytelling with intricate detail, vivid color, and compelling compositions. Make a bold statement with Anideos’ full-page children’s book illustrations design services. Our artists craft detailed, immersive visuals that enrich your storytelling experience. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."
        },
        {
            name: "Spread Illustration",
            img: Book4,
            title: "Spread Illustration",
            desc: "Full-page illustrations are visual showcases. These captivating artworks occupy an entire page, elevating your storytelling with intricate detail, vivid color, and compelling compositions. Make a bold statement with Anideos’ full-page children’s book illustrations design services. Our artists craft detailed, immersive visuals that enrich your storytelling experience. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."
        },
        {
            name: "Book Cover Design",
            img: Book5,
            title: "Book Cover Design",
            desc: "Full-page illustrations are visual showcases. These captivating artworks occupy an entire page, elevating your storytelling with intricate detail, vivid color, and compelling compositions. Make a bold statement with Anideos’ full-page children’s book illustrations design services. Our artists craft detailed, immersive visuals that enrich your storytelling experience. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency."
        },
    ]
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
        <main>
            <Head>
                <meta name="robots" content="noindex" />
                <title>Book Illustrations LP | Best Book Publishing Company</title>
                <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
            </Head>
            <Header />
            <Hero />
            <Benifits
                title="How We Market Your Book?"
                desc="Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency.Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost"
            />
            <StandOut />
            <TypesOfIllustrations tabs={tabContent} />
            <Portfolios />
            <StandOut2 />
            <IllustrationsProcess />
            <WhyChoose />
            {/* Testimonials Section */}
            <Testimonials
                title="Testimonials Words From Our Satisfied Customers"
                desc="Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective"
                data={testimonialData}
            />
            {/* Testimonials Section */}
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
        </main>
    )
}
export default LpThree;