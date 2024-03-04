import { Contact, Header, Hero, Reviews } from "@/component/LP-One"
import Head from "next/head"

const LPOne = () => {
    return (
        <main>
            <Head>
                <title>LP One | Best Book Publishing Company</title>
                <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
            </Head>
            <Header />
            <Hero />
            <Reviews />
            <Contact />
        </main>
    )
}

export default LPOne