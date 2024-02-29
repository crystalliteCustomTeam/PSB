import { MRContact, MRHero } from '@/component'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import Head from 'next/head'
import React from 'react'

const authorWebsites = () => {
    return (
        <>
            <Head>
                <title>Author Websites Services | Best Selling Publisher</title>
                <meta name="description" content="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
            </Head>
            <main>
                {/* Hero Section */}
                <MRHero
                    title="Featured Authors"
                    desc="For over a decade, we have been helping thousands of authors turn their publishing dreams into reality!"
                    logos="images/banner/img2.png"
                    counter={true}
                    classes='!py-[80px] bg-[#fefefe]'
                    beforeImg="mr-md:before:bg-[url('../../public/ahsan/smiling-woman-with-laptop.png')]"
                />
                {/*  Logo Section */}
                <Enlistedlogo />

                {/* Bottom Logo Section */}
                <BTM />

                {/*  CTA Section */}
                <CTA />

                {/*  Swiper Component Section */}
                <SwiperComponents />

                {/*  Contact Section */}
                <MRContact />
            </main>
        </>
    )
}

export default authorWebsites
