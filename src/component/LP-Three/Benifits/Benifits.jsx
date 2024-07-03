import Image from "next/image";
import Boy from "media/book-illustrations/banifits/1.png"
import Cat from "media/book-illustrations/banifits/2.png"
import Alien from "media/book-illustrations/banifits/3.png"
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
            <div className="relative mr-md:py-[60px] py-[40px] font-sans">
                <div className="mr-container">
                    <div className="grid grid-cols-12 mr-lg:gap-x-5 gap-5 items-center">
                        <div className="mr-xl:col-span-5 mr-lg:col-span-6 col-span-12 relative z-10">
                            <div className="mr-lg:mb-0 mb-5 text-black">
                                <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-medium leading-normal mb-2">{title}</h2>
                                <p className="mr-md:text-base text-sm mr-sm:text-start text-justify font-normal leading-normal">{desc}</p>
                                <MRCTA text="Book An Appointment" classes="bg-primary-100 !rounded-full mr-md:my-8 my-5 mr-md:text-base text-sm hover:bg-black hover:border-black" handle="onclick='parent.LC_API.open_chat_window();return false;'" animation="__animatedPing" />
                                <div className="grid grid-cols-12 2xl:gap-x-4 mr-md:gap-2 gap-5 items-center">
                                    <span className="mr-sm:col-span-3 col-span-6 flex items-center mr-2xl:gap-x-2 gap-x-1">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[30px] mr-sm:text-[25px] text-lg font-bold leading-tight">10</h4>
                                        <p className="text-[12px] text-[#A2A2A2] font-normal leading-tight">YEARS OF <br />
                                            EXPERIENCE</p>
                                    </span>
                                    <span className="mr-sm:col-span-4 col-span-6 flex items-center mr-2xl:gap-x-2 gap-x-1">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[30px] mr-sm:text-[25px] text-lg font-bold leading-tight">474</h4>
                                        <p className="text-[12px] text-[#A2A2A2] font-normal leading-tight">PUBLISHED <br />
                                            LAST 12 MONTHS</p>
                                    </span>
                                    <span className="mr-sm:col-span-4 col-span-6 flex items-center mr-2xl:gap-x-2 gap-x-1">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[30px] mr-sm:text-[25px] text-lg font-bold leading-tight">39</h4>
                                        <p className="text-[12px] text-[#A2A2A2] font-normal leading-tight">PUBLISHED <br />
                                            LAST MONTH</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mr-xl:col-span-7 mr-lg:col-span-6 col-span-12 relative z-10">
                            <Image src={Boy} alt="icon" className="absolute bottom-0 left-0 -z-20 mr-2xl:w-[170px] mr-lg:w-[110px] w-[120px] mr-sm:block hidden h-auto object-contain" priority={true} />
                            <Image src={Cat} alt="icon" className="absolute bottom-0 right-0 -z-20 mr-2xl:w-[170px] mr-lg:w-[110px] w-[120px] mr-sm:block hidden h-auto object-contain" priority={true} />
                            <div className="relative z-20 text-center mr-2xl:w-[60%] mr-sm:w-[70%] w-full px-5 py-[40px] rounded-3xl bg-white mx-auto border border-[#DCDCDC]">
                                <Image src={Alien} alt="icon" width={70} height={70} className="absolute -top-6 mr-sm:-left-6 -left-4 z-30 w-[18%] h-[16%] object-contain" priority={true} />
                                <h3 className="mr-md:text-[30px] text-[25px] font-medium leading-tight text-black mb-3">Request A <span className="text-[#40BEE2]">Free</span> Quote</h3>
                                <p className="mr-md:text-base text-sm font-normal text-black leading-normal">Cost-effectiveness. Consumer-centric—the crudity
                                    of book marketing, delivered!</p>
                                <form onSubmit={handleSubmit} className="mt-8">
                                    <div className="flex justify-between gap-x-5">
                                        <input type="text" required name="name" placeholder="Full Name *" onkeypress="return /[a-z]/i.test(event.key)" className="block bg-[#000] bg-opacity-30 focus-visible:outline-primary-100 w-full rounded-xl px-4 py-4 mb-4 placeholder:text-white font-medium" />
                                        <input type="email" required name="email" placeholder="Email *" className="block bg-[#000] bg-opacity-30 focus-visible:outline-primary-100 w-full rounded-xl px-4 py-4 mb-4 placeholder:text-white font-medium" />
                                    </div>
                                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone" required className="block bg-[#000] bg-opacity-30 focus-visible:outline-primary-100 w-full rounded-xl px-4 py-4 mb-4 placeholder:text-white font-medium" />
                                    <textarea className="resize-none bg-[#000] bg-opacity-30 focus-visible:outline-primary-100 w-full rounded-xl px-4 pt-4 pb-10 mb-4 placeholder:text-white" id="message" name="comments" placeholder="Message"></textarea>
                                    <button type="submit" className="__animatedPing bg-[#000] text-white w-max px-16 mx-auto block rounded-full py-3 hover:bg-black transition-all duration-300 ease-in-out">{score}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Benifits;