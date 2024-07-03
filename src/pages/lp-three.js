import { Header, Hero } from "@/component/LP-Three";
import Head from "next/head";

const LpThree = () => {
    return (
        <main>
             <Head>
                <meta name="robots" content="noindex" />
                <title>Book Illustrations LP | Best Book Publishing Company</title>
                <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
            </Head>
            <Header/>
            <Hero/>
        </main>
    )
}
export default LpThree;