import Image from "next/image";
// Images
import Call from "media/book-illustrations/callIconBlue.svg"
import Email from "media/book-illustrations/email.svg"
import Location from "media/book-illustrations/location.svg"
import Avater from "media/book-illustrations/avater.png"
import formParticle from "media/assets/audiobook/form-particle.png"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";
const ContactUs = () => {
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
        <section>
            <div className="relative z-10 mr-md:py-[60px] py-[40px] bg-[#282828]">
                <div className="mr-container">
                    <div className="grid grid-cols-12 mr-lg:gap-x-5 gap-5 items-center">
                        <div className="mr-xl:col-span-7 mr-lg:col-span-6 col-span-12 text-white">
                            <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-semibold mb-3">Published 10,000+ Great Books
                            <br /> Out There! Yours Is Next!</h2>
                            <p className="mr-md:text-base text-sm leading-normal font-normal">Best Selling Publisher stands as the pinnacle of excellence in the world of publishing services, <br /> renowned for its unparalleled commitment to author success. With a dedicated team of industry <br /> experts and innovative resources at their disposal, Best Selling Publisher goes above and beyond.</p>
                            <p className="mr-md:text-base text-sm leading-normal font-normal mt-4">Best Selling Publisher stands as the pinnacle of excellence in the world of publishing services, <br /> renowned for its unparalleled commitment to author success. With a dedicated team of industry <br /> experts and innovative resources at their disposal, Best Selling Publisher goes above and beyond.</p>
                            <div className="my-8">
                                <a href="mailto:info@bestsellingpublisher.com" className="flex items-center gap-x-3 mb-3">
                                    <span className="block"><Image src={Email} alt="icons" width={20} height={20}/></span>
                                    <span className="block">info@bestsellingpublisher.com</span>
                                </a>
                                <a href="tel:8007819093" className="flex items-center gap-x-3 mb-3">
                                    <span className="block"><Image src={Call} alt="icons" width={20} height={20}/></span>
                                    <span className="block">(800) 781-9093 (Toll Free)</span>
                                </a>
                                <a href="https://maps.app.goo.gl/DxyYMqYqyHg31jo39" target="_blank" className="flex items-center gap-x-3 mb-3">
                                    <span className="block"><Image src={Location} alt="icons" width={20} height={20}/></span>
                                    <span className="block">1001 Wilshire Boulevard #1176 Los Angeles, CA 90017</span>
                                </a>
                            </div>
                            <div className="flex mr-sm:flex-nowrap flex-wrap mr-sm:w-max mr-sm:gap-x-5 gap-5 items-center pt-6 border-t border-[#8A8A8A]">
                                <Image src={Avater} alt="avater" className="block" />
                                <div>
                                    <h5 className="text-[#40BEE2] mr-md:text-[20px] text-lg leading-normal font-bold mb-3">Your Book Deserves To Be Written!</h5>
                                    <p className="text-base leading-normal font-normal">Now that you have an expert book writing, editing, <br className="mr-sm:block hidden" />
                                        and publishing agency. What are you waiting for?</p>
                                </div>
                            </div>
                        </div> 
                        <div className="mr-xl:col-span-5 mr-lg:col-span-6 col-span-12 before:top-0 before:shadow-[-30px_0px_5px_-4px_rgba(0,0,0,0.3)] before:absolute before:w-full before:h-full before:right-0 before:bg-[#242424] before:-z-10">
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
            </div>
        </section>
    )
}
export default ContactUs;