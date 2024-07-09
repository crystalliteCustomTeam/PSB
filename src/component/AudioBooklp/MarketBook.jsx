import React from 'react'
import Image from 'next/image';
import { MRCTA } from "@/component";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";
// Images
import formParticle from "media/assets/audiobook/form-particle.png"

const MarketBook = ({
    title = "How We Market Your Book?",
    desc = "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing."
}) => {
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])

    const [score, setScore] = useState('Submit');

    const router = useRouter();
    const currentRoute = router.pathname;
    const [pagenewurl, setPagenewurl] = useState('');
    useEffect(() => {
        const pagenewurl = window.location.href;
        console.log(pagenewurl);
        setPagenewurl(pagenewurl);
    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault()
        var currentdate = new Date().toLocaleString() + ''

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comments.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');
        console.log(JSONdata);


        fetch('api/email/route', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`)
            if (res.status === 200) {
                console.log(`Response Successed ${res}`)
            }
        })

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            "Brand": "BEST SELLING PUBLISHER",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,

        });



        await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });


        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/ThankYou';
        }

    }
    return (
        <section className='py-[50px] mr-lg:py-[80px] '>
            <div className='mr-container'>
                <div className='grid grid-cols-12 items-center gap-y-5'>
                    <div className='col-span-12 mr-lg:col-span-6'>
                        <div className="txt">
                            <h2 className='text-[25px] mr-md:text-[30px] mr-lg:text-[40px] font-[600] mr-md:leading-[70px] secondary pb-2'>{title}</h2>
                            <p className='text-[14px] mr-md:text-[16px] leading-[26px] font-[300] secondary pb-4 mr-xl:mr-5 mr-xl:pr-5 mr-md:text-left text-justify'>{desc}</p>
                            <div className='pb-3'>
                                <div className="w-full mr-md:w-max">
                                    <MRCTA classes="mt-5 w-full !font-medium secondary" animation="__animatedPing" text="Book An Appointment" />
                                </div>
                            </div>
                            <div className='flex flex-wrap align-items-center gap-y-4 gap-x-5 mr-md:gap-x-0 justify-center mr-md:justify-between mt-5 pt-5'>
                                <div className="flex align-items-center gap-x-2 mr-md:gap-x-4">
                                    <div className="number">
                                        <span className='mr-md:text-[25px] mr-lg:text-[40px] mr-lg:leading-[48px] font-bold secondary'>10</span>
                                    </div>
                                    <div className="txt">
                                        <p className='text-[#A2A2A2] text-[14px] mr-md:text-[16px] leading-[25px] secondary font-[300]'>Years Of <br className='mr-lg:block hidden' />
                                            Experience</p>
                                    </div>
                                </div>
                                <div className="flex align-items-center gap-x-2 mr-md:gap-x-4 relative mr-xl:before:content-[''] mr-xl:before:absolute mr-xl:before:bg-[#6DDEFF] mr-xl:before:w-[15px] mr-xl:before:h-[15px] mr-xl:before:rounded-full mr-xl:before:border-4 mr-xl:before:border-[#40BEE2] mr-xl:before:top-[50%] mr-xl:before:translate-y-[-50%] mr-xl:before:left-[-19%] mr-2xl:before:left-[-30%]">
                                    <div className="number">
                                        <span className='mr-md:text-[25px] mr-lg:text-[40px] mr-lg:leading-[48px] font-bold secondary'>474</span>
                                    </div>
                                    <div className="txt">
                                        <p className='text-[#A2A2A2] text-[14px] mr-md:text-[16px] leading-[25px] secondary font-[300]'>Published <br className='mr-lg:block hidden' />
                                            Last 12 Months</p>
                                    </div>
                                </div>
                                <div className="flex align-items-center gap-x-2 mr-md:gap-x-4 relative mr-xl:before:content-[''] mr-xl:before:absolute mr-xl:before:bg-[#6DDEFF] mr-xl:before:w-[15px] mr-xl:before:h-[15px] mr-xl:before:rounded-full mr-xl:before:border-4 mr-xl:before:border-[#40BEE2] mr-xl:before:top-[50%] mr-xl:before:translate-y-[-50%]  mr-xl:before:left-[-25%] mr-2xl:before:left-[-40%]">
                                    <div className="number">
                                        <span className='mr-md:text-[25px] mr-lg:text-[40px] mr-lg:leading-[48px] font-bold secondary'>39</span>
                                    </div>
                                    <div className="txt">
                                        <p className='text-[#A2A2A2] text-[14px] mr-md:text-[16px] leading-[25px] secondary font-[300]'>Published <br className='mr-lg:block hidden' />
                                            Last Month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg:col-span-1"></div>
                    <div className='col-span-12 mr-lg:col-span-5'>
                        <div className="form relative overflow-hidden bg-white shadow-2xl py-[20px] mr-md:py-[40px] pl-[45px] pr-[20px] mr-md:pr-[35px] z-0">
                            <div className="image absolute top-0 left-[-32px]">
                                <Image src={formParticle} alt='PSB' />
                            </div>
                            <h3 className='text-center text-[23px] mr-md:text-[30px] leading-[40px] mr-md:leading-[70px] secondary font-[600]'>Request A <span className='text-[#40BEE2]'>Free</span> Quote</h3>
                            <p className='text-center text-[14px] mr-md:text-[16px] secondary mr-md:leading-[25px] pb-8'>Cost-effectiveness. Consumer-centric—the crudity of <br className='mr-lg:block hidden' /> book marketing, delivered!</p>
                            <form onSubmit={handleSubmit} className='relative z-[999]'>
                                <input type="text" required name="name" placeholder='Full Name *' onkeypress="return /[a-z]/i.test(event.key)" className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />
                                <input type="email" required name="email" placeholder='Email * ' className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />
                                <input type="tel" placeholder='Phone *' minLength="10" maxLength="13" pattern="[0-9]*" name="phone" required className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />
                                <textarea placeholder='Message' className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[116px] w-full rounded-[6px] px-4 py-2 resize-none mb-4 focus:outline-0'></textarea>
                                <button className='w-full h-[45px] rounded-[6px] bg-[#2E2E2E] text-white secondary font-[300] leading-[20px]'>{score}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketBook
