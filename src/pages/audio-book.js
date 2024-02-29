import Head from 'next/head'
import React from 'react'
import { MRContact, MRHero, MRLibarySphere } from '@/component'
import Enlistedlogo from '@/fa-component/Enlistedlogo'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'

import Profitable from 'media/ahsan/profit.png'
import Affordable from 'media/ahsan/affordable.png'
import Professional from 'media/ahsan/professional.png'
import Qualified from 'media/ahsan/qualified.png'

const MRLibarySphereData=[
    {
        title:'Profitable <br/> Content',
        imagePath: Profitable,
        alt:'Profitable Content'
    },
    {
        title:'Affordable <br/> Pricing',
        imagePath: Affordable,
        alt:'Affordable Pricing'
    },
    {
        title:'Professional <br/> Excellence',
        imagePath: Professional,
        alt:'Professional Excellence'
    },
    {
        title:'Qualified <br/> Experts',
        imagePath:Qualified,
        alt:'Qualified Experts'
    },
    {
        title:'Secure <br/> Ownership',
        imagePath:Profitable,
        alt:'Secure Ownership'
    },
    {
        title:'Editing & <br/> Proofreading',
        imagePath:Affordable,
        alt:'Editing & Proofreading'
    },
    {
        title:'Secure <br/> Ownership',
        imagePath:Qualified,
        alt:'Secure Ownership'
    },
    {
        title:'Editing & <br/> Proofreading',
        imagePath:Qualified,
        alt:'Editing & Proofreading'
    }
]

const AudioBook = () => {
    return (
        <>
            <Head>
                <title>Audio Book Services | Best Selling Publisher</title>
                <meta name="description" content="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
            </Head>
            <main>
                {/* Hero Section */}
                <MRHero
                    title="Exceptional Book Marketing Services"
                    desc="Lead the industry by publishing books that generate sales and client acquisition. We are a one-of-a-kind marketing tool."
                    logos="images/banner/img2.png"
                    counter={true}
                    classes='!py-[80px] bg-[#fefefe]'
                    beforeImg="mr-md:before:bg-[url('../../public/ahsan/medium-shot-woman-with-headphones.png')]"
                />
                {/*  Logo Section */}
                <Enlistedlogo />

                {/*  Library Section */}
                <MRLibarySphere
                    title="Here Writers Come To Get Their Books <br class'hidden mr-lg:block'/> Published Be A Part Of The Literary Sphere!"
                    desc="Embark on your literary journey with us, where writers find the gateway to publish their books and become integral contributors to the vibrant literary sphere. Join our community and witness your literary dreams come to life."
                    background="bg-[url('../../public/ahsan/bgBlack2.png')]"
                    BGclasses="bg-no-repeat bg-cover text-white !py-[80px]"
                    CardClasses="text-black"
                    // GridClasses="mr-md:grid-cols-3 mr-lg:grid-cols-4", Default Classes
                    data={MRLibarySphereData}
                />

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

export default AudioBook
