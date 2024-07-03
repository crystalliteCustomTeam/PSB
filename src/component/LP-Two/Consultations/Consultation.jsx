import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";
// import Banner from "media/book-marketing-company/consultationBanner.png"
// import BannerMockup from "media/book-marketing-company/bannerMockup.png"
const Consultation = ({title,desc, backgroundImage, mockup}) => {
    const [ip, setIP] = useState('');
    const getIPData = async () => {
        // const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        // setIP(res.data);
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
            <div className="relative z-10 font-sans mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                <Image src={backgroundImage} alt="consultationBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority={true}/>
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify text-white mr-xl:w-[75%] mr-md:w-[90%] w-full mx-auto">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium mb-3" dangerouslySetInnerHTML={{__html : title}} />
                        <p className="mr-md:text-base text-sm font-normal leading-normal" dangerouslySetInnerHTML={{__html : desc}}/>
                    </div>
                    <div className="grid mr-lg:grid-cols-2 items-center mr-lg:gap-x-10 gap-10 mr-md:mt-16 mt-5">
                        <div >
                            <form onSubmit={handleSubmit} className="mt-8">
                                <input type="text" required name="name" placeholder="Full Name *" onkeypress="return /[a-z]/i.test(event.key)" className="bg-[linear-gradient(180deg,_rgba(83,83,83,0.9)_0%,_rgba(43,43,43,1)_100%)] text-white block w-full border border-[#707070] rounded-2xl px-4 py-4 mb-4 placeholder:text-[#ffffff] font-medium" />
                                <input type="email" required name="email" placeholder="Email *" className="bg-[linear-gradient(180deg,_rgba(83,83,83,0.9)_0%,_rgba(43,43,43,1)_100%)] text-white block w-full border border-[#707070] rounded-2xl px-4 py-4 mb-4 placeholder:text-[#ffffff] font-medium" />
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone Number *" required className="bg-[linear-gradient(180deg,_rgba(83,83,83,0.9)_0%,_rgba(43,43,43,1)_100%)] text-white block w-full border border-[#707070] rounded-2xl px-4 py-4 mb-4 placeholder:text-[#ffffff] font-medium" />
                                <textarea className="bg-[linear-gradient(180deg,_rgba(83,83,83,0.9)_0%,_rgba(43,43,43,1)_100%)] text-white resize-none w-full border border-[#707070] rounded-2xl px-4 pt-4 pb-10 mb-4 placeholder:text-[#ffffff]" id="message" name="comments" placeholder="Message"></textarea>
                                <button type="submit" className="__animatedPing bg-[#40BEE2] text-white w-full block rounded-md py-3 hover:bg-secondary-100 transition-all duration-300 ease-in-out">{score}</button>
                            </form>
                        </div>
                        <div>
                            <Image src={mockup} alt="BannerMockup" className="block ms-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Consultation;