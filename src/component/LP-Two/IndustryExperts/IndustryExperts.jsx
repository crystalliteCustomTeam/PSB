import Image from "next/image";
import Avater from "media/lp-two-images/avater.png"
import IndustryExpertsBanner from "media/lp-two-images/IndustryExpertsBanner.png"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";
const IndustryExperts = ({ title, desc, descTwo }) => {
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
        <section id="contact">
            <div className="font-sans relative z-10 mr-lg:my-16 mr-lg:py-0 mr-md:py-[60px] py-[40px]">
                <Image src={IndustryExpertsBanner} alt="IndustryExpertsBanner" className="absolute mr-xl:top-[10%] mr-lg:top-[5%] left-0 right-0 bottom-0 -z-10 w-full mr-xl:h-[80%] mr-lg:h-[90%] h-full object-cover" priority={true} />
                <div className="mr-container">
                    <div className="grid mr-lg:grid-cols-12 grid-cols-1 mr-lg:gap-x-5 gap-10 items-center">
                        <div className="mr-2xl:col-span-6 mr-lg:col-span-7 text-white mr-sm:text-start text-justify">
                            <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                            <p className="mr-md:text-base text-sm leading-normal font-normal pb-5" dangerouslySetInnerHTML={{ __html: desc }} />
                            <p className="mr-md:text-base text-sm leading-normal font-normal pb-10" dangerouslySetInnerHTML={{ __html: descTwo }} />
                            <div className="flex mr-sm:flex-nowrap flex-wrap mr-sm:gap-x-5 gap-5 items-center pt-10 border-t border-white">
                                <Image src={Avater} alt="avater" className="block" />
                                <div>
                                    <h5 className="text-[#40BEE2] mr-md:text-[20px] text-lg leading-normal font-bold mb-3">Your Book Deserves To Be Written!</h5>
                                    <p className="text-base leading-normal font-normal">Now that you have an expert book writing, editing, <br className="mr-sm:block hidden" />
                                        and publishing agency. What are you waiting for?</p>
                                </div>
                            </div>
                        </div>
                        <div className="mr-lg:col-span-5 text-center mr-md:w-[90%] w-full px-5 py-[40px] rounded-2xl bg-white ms-auto shadow-[0_0_20px_rgba(0,_0,_0,_0.1)]">
                            <h3 className="mr-md:text-[30px] text-[25px] font-medium leading-tight text-black mb-3">Request A <span className="text-[#40BEE2]">Free</span> Quote</h3>
                            <p className="mr-md:text-base text-sm font-normal text-black leading-normal">Cost-effectiveness. Consumer-centric—the crudity of <br className="mr-xl:block hidden" /> book marketing, delivered!</p>
                            <form onSubmit={handleSubmit} className="mt-8">
                                <input type="text" required name="name" placeholder="Full Name *" onkeypress="return /[a-z]/i.test(event.key)" className="block focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <input type="email" required name="email" placeholder="Email *" className="block focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone" required className="block focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <textarea className="resize-none focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-md px-4 pt-4 pb-10 mb-4 placeholder:text-[#B4B4B4]" id="message" name="comments" placeholder="Comments.."></textarea>
                                <button type="submit" className="__animatedPing bg-[#40BEE2] text-white w-full block rounded-md py-3 hover:bg-black transition-all duration-300 ease-in-out">{score}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default IndustryExperts;