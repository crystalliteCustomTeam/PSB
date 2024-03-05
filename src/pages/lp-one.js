import { MRContent2 } from "@/component"
import { BookSlider, Contact, Header, Hero, Reviews, ScrollBanner,Steps } from "@/component/LP-One"
import Head from "next/head"
import Nature from "media/imageAR/nature.png"

const LPOne = () => {
    const MRContent2Data = [
        {
            title: "Personalized Support",
            desc: "Our expert writers specialize in crafting top-notch articles and blog posts on virtually any topic. We guarantee your readers will be captivated with the quality of our work."
        },
        {
            title: "Quality Publishing",
            desc: "Get the best of native English writing with our U.S.-based writers! Our experts have perfected their grammar and command of language to ensure that you get quality written pieces."
        },
        {
            title: "Wide Distribution",
            desc: "Our team of experts review each piece with incredible scrutiny before giving it the seal of approval - so you can rest assured any article published goes through some serious quality control!"
        },
        {
            title: "Affordable Pricing",
            desc: "Our clients are always in full ownership of the content we create for them. This way, you can use your written articles and blog posts however you like – no strings attached!"
        },
        {
            title: "Satisfaction Guaranteed",
            desc: "Experience top-notch article writing services with us! Our satisfaction guarantee means that if you're not happy, we'll keep revising until every requirement is met. Get the quality content your business deserves today!"
        }
    ]
    return (
        <main>
            <Head>
                <title>LP One | Best Book Publishing Company</title>
                <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
            </Head>
            <Header />
            <Hero />
            <BookSlider
                title="We Have Supported Countless Writers Get Best Selling Books Published Under Their Name"
            />
            <MRContent2
                title={`Unleash Your Literary Dreams with Best Selling Publisher! <br class="mr-xl:block hidden"/> Embark on a Journey to Authorship Today!`}
                desc={`Are you ready to transform your creative vision into a captivating masterpiece? <br class="mr-xl:block hidden"/> Look no further! At Best Selling Publisher, we're your dedicated partners in making your literary dreams a reality.`}
                direction="flex-row-reverse"
                sideImage={Nature}
                data={MRContent2Data}
            />
            <ScrollBanner />
            <Steps />
            <Reviews />
            <Contact />
        </main>
    )
}

export default LPOne