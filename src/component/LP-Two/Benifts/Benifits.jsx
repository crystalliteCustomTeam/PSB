import Image from "next/image";
import benifitsBanner from "media/lp-two-images/benifitsBanner.png"
import benifitsBg from "media/lp-two-images/benifitsBg.png"
import { MRCTA } from "@/component";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";
const Benifits = ({ title, desc }) => {
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
            <div className="relative z-10 mr-md:py-[60px] py-[40px] font-sans">
                <Image src={benifitsBanner} alt="benifitsBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority />
                <div className="mr-container">
                    <div className="grid grid-cols-12 mr-lg:gap-x-5 gap-5 items-center">
                        <div className="mr-lg:col-span-7 col-span-12 relative z-10">
                            <Image src={benifitsBg} alt="benifitsBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-auto" priority />
                            <div className="py-16 w-[85%] mx-auto text-white">
                                <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-medium leading-normal mb-2">{title}</h2>
                                <p className="mr-md:text-base text-sm mr-sm:text-start text-justify font-normal leading-normal">{desc}</p>
                                <MRCTA text="Book An Appointment" classes="bg-black mt-4 mr-md:mb-14 mb-10 mr-md:text-base text-sm" />
                                <div className="grid grid-cols-12 2xl:gap-x-4 mr-md:gap-2 gap-5 items-center">
                                    <span className="mr-sm:col-span-3 col-span-6 flex items-center mr-2xl:gap-x-2 gap-x-1 border-e">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[30px] mr-sm:text-[25px] text-lg font-bold leading-tight">10</h4>
                                        <p className="mr-2xl:text-[12px] text-[12px] font-normal leading-tight">YEARS OF <br />
                                            EXPERIENCE</p>
                                    </span>
                                    <span className="mr-sm:col-span-4 col-span-6 flex items-center mr-2xl:gap-x-2 gap-x-1 border-e">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[30px] mr-sm:text-[25px] text-lg font-bold leading-tight">474</h4>
                                        <p className="mr-2xl:text-[12px] text-[12px] font-normal leading-tight">PUBLISHED <br />
                                            LAST 12 MONTHS</p>
                                    </span>
                                    <span className="mr-sm:col-span-4 col-span-6 flex items-center mr-2xl:gap-x-2 gap-x-1">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[30px] mr-sm:text-[25px] text-lg font-bold leading-tight">39</h4>
                                        <p className="mr-2xl:text-[12px] text-[12px] font-normal leading-tight">PUBLISHED <br />
                                            LAST MONTH</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mr-lg:col-span-5 col-span-12 text-center mr-md:w-[90%] w-full px-5 py-[40px] rounded-2xl bg-white ms-auto shadow-[0_0_20px_rgba(0,_0,_0,_0.1)]">
                            <h3 className="mr-md:text-[30px] text-[25px] font-medium leading-tight text-black mb-3">Request A <span className="text-[#40BEE2]">Free</span> Quote</h3>
                            <p className="mr-md:text-base text-sm font-normal text-black leading-normal">Cost-effectiveness. Consumer-centric—the crudity of <br className="mr-xl:block hidden" /> book marketing, delivered!</p>
                            <form onSubmit={handleSubmit} className="mt-8">
                                <input type="text" required name="name" placeholder="Full Name *" onkeypress="return /[a-z]/i.test(event.key)" className="block focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <input type="email" required name="email" placeholder="Email *" className="block focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone" required className="block focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <textarea className="resize-none focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-md px-4 pt-4 pb-10 mb-4 placeholder:text-[#B4B4B4]" id="message" name="comments" placeholder="Comments.."></textarea>
                                <button type="submit" className="bg-[#40BEE2] text-white w-full block rounded-md py-3">{score}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Benifits;