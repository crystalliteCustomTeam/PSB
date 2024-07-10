import Image from "next/image";
import Link from "next/link";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import { useState, useId, useEffect } from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";
import Arrow from "media/blog-new/arrowBlack.png"
import Banner1 from "media/blog-new/1.png"
import Banner2 from "media/blog-new/2.png"
import Banner3 from "media/blog-new/3.png"
import Avater from "media/blog-new/avater.png"
import Check from "media/blog-new/check.png"
import { MRCTA } from "@/component";
const Cards = ({ tabs }) => {
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])

    const [score, setScore] = useState('Subscribe');

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
            email: e.target.email.value,
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
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (i) => {
        setOpenIndex(prevIndex => (prevIndex === i ? null : i));
    };
    const [filter, setFilter] = useState('All');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const handleFilterSubmit = (selectedOption) => {
        setFilter(selectedOption);
    };

    useEffect(() => {
        const initialData = [
            [Banner1, "Blockchain", "Conquer Tech With Best Selling Publisher: Your Path To Unstoppable Progress!",
                "Best Selling Publisher' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner2, "Mobile Application", "Conquer Tech With Best Selling Publisher: Your Path To Unstoppable Progress!",
                "Best Selling Publisher' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner3, "General", "Conquer Tech With Best Selling Publisher: Your Path To Unstoppable Progress!",
                "Best Selling Publisher' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner2, "Mobile Application", "Conquer Tech With Best Selling Publisher: Your Path To Unstoppable Progress!",
                "Best Selling Publisher' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner3, "General", "Conquer Tech With Best Selling Publisher: Your Path To Unstoppable Progress!",
                "Best Selling Publisher' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner1, "Blockchain", "Conquer Tech With Best Selling Publisher: Your Path To Unstoppable Progress!",
                "Best Selling Publisher' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"]
        ];

        setData(initialData);
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(item => item[1] === filter));
        }
    }, [filter, data]);

    const options = ['All', 'Blockchain', 'Mobile Application', 'General'];

    return (
        <section>
            <div className="pt-[100px] pb-[80px]">
                <div className="mr-container">
                    <FilterDropdown options={options} onFilterSubmit={handleFilterSubmit} />
                    <div className="grid mr-md:grid-cols-6 mr-sm:grid-cols-3 grid-cols-2 mr-md:gap-0 gap-y-7 mr-md:mt-16 mt-12 w-full mx-auto">
                        {tabs && tabs?.map(({ name }, i) => (
                            <div key={useId()} className="text-center w-full">
                                <h4 className={`${openIndex === i ? "border-b-4 font-bold border-[#40BEE2] rounded text-[#000000]" : "border-b-2 border-white w-full text-[#ACACAC]"} pb-2`}>
                                    <button onClick={() => toggleAccordion(i)}>{name}</button>
                                </h4>
                            </div>
                        ))}
                    </div>
                    <div key={useId()}>
                        <div className="grid grid-cols-3 gap-5 mb-5">
                            <div className={`bg-[#F3F3F3] rounded-xl`}>
                                <div className="border-b border-[#D4D4D4]">
                                    <Link href="#">
                                        <Image src={Banner3} alt="books" width={440} height={200} className="block mx-auto w-full" />
                                    </Link>
                                    <div className="px-4 py-6">
                                        <span className="block text-[#F32F53] font-semibold text-base leading-normal">Mobile Application</span>
                                        <h4 className="text-[20px] leading-normal font-semibold text-[#000] mb-4"><Link href="#">General", "Conquer Tech With Best Selling Publisher: Your Path To Unstoppable Progress!</Link></h4>
                                        <p className="text-sm leading-normal font-normal">Best Selling Publisher' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                        <Link href="#" className="flex items-center ms-auto mt-5 gap-x-2 border-b-2 border-black w-max">
                                            <span className="block">Read More</span>
                                            <span><Image src={Arrow} alt="arrow" className="block" /></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="px-4 py-8">
                                    <div className="flex items-start gap-x-2">
                                        <Image src={Avater} alt="avater" className="block w-[15%] rounded-full" />
                                        <div>
                                            <div className="flex items-center gap-x-2">
                                                <h5 className="text-sm font-medium text-black">Nick Willford</h5>
                                                <Image src={Check} alt="check" className="block" />
                                            </div>
                                            <p className="text-[#5c5b5b] text-xs leading-normal font-medium">Best Selling Publisher' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`bg-[#F3F3F3] rounded-xl`}>
                                <div className="border-b border-[#D4D4D4]">
                                    <Link href="#">
                                        <Image src={Banner3} alt="books" width={440} height={200} className="block mx-auto w-full" />
                                    </Link>
                                    <div className="px-4 py-6">
                                        <span className="block text-[#F32F53] font-semibold text-base leading-normal">Mobile Application</span>
                                        <h4 className="text-[20px] leading-normal font-semibold text-[#000] mb-4"><Link href="#">General", "Conquer Tech With Best Selling Publisher: Your Path To Unstoppable Progress!</Link></h4>
                                        <p className="text-sm leading-normal font-normal">Best Selling Publisher' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                        <Link href="#" className="flex items-center ms-auto mt-5 gap-x-2 border-b-2 border-black w-max">
                                            <span className="block">Read More</span>
                                            <span><Image src={Arrow} alt="arrow" className="block" /></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="px-4 py-8">
                                    <div className="flex items-start gap-x-2">
                                        <Image src={Avater} alt="avater" className="block w-[15%] rounded-full" />
                                        <div>
                                            <div className="flex items-center gap-x-2">
                                                <h5 className="text-sm font-medium text-black">Nick Willford</h5>
                                                <Image src={Check} alt="check" className="block" />
                                            </div>
                                            <p className="text-[#5c5b5b] text-xs leading-normal font-medium">Best Selling Publisher' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`bg-primary-100 rounded-xl flex items-center flex-col justify-center `}>
                                <div className="px-8 py-6 text-center text-white">
                                    <h4 className="text-[40px] leading-normal font-semibold mb-4">Top-Quality Articles, Delivered Weekly.</h4>
                                    <p className="text-base leading-normal font-normal">Best Selling Publisher' Development Of The Proeye <br /> Project, A Wallet Analytics And Search Engine</p>
                                    <form onSubmit={handleSubmit} className="mt-8">
                                        <div className="bg-[#ffffff] bg-opacity-90 border-2 border-white flex mr-md:w-[100%] mx-auto mb-[50px] p-[6px] rounded-[10px]">
                                            <input type="email" placeholder="Enter Your Email Address" name="email" id="email" required={true} className="block w-full bg-transparent ps-4 placeholder:text-[#BFBFBF] focus-visible:outline-none text-white font-normal text-sm leading-normal" />
                                            <button className="bg-black text-white text-lg block mr-sm:w-[50%] w-[55%] rounded-[10px] py-[10px]">{score}</button>
                                        </div>
                                    </form>
                                    <span className="block text-sm">By Entering Your Email, You Are Agreeing To Our <Link href="/privacy-policy" target="_blank">Privacy <span className="inline-block border-b-2 border-white">Policy.</span></Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-5 mb-5">
                        {filteredData.map(([img, subtitle, title, desc], i) => (
                            <div key={i} className="bg-[#F3F3F3] rounded-xl">
                                <div className="border-b border-[#D4D4D4]">
                                    <Link href="#">
                                        <Image src={img} alt="books" width={440} height={200} className="block mx-auto w-full" />
                                    </Link>
                                    <div className="px-4 py-6">
                                        <span className="block text-[#F32F53] font-semibold text-base leading-normal">{subtitle}</span>
                                        <h4 className="text-[20px] leading-normal font-semibold text-[#000] mb-4">
                                            <Link href="#">{title}</Link>
                                        </h4>
                                        <p className="text-sm leading-normal font-normal">{desc}</p>
                                        <Link href="#" className="flex items-center ms-auto mt-5 gap-x-2 border-b-2 border-black w-max">
                                            <span className="block">Read More</span>
                                            <span><Image src={Arrow} alt="arrow" className="block" /></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="px-4 py-8">
                                    <div className="flex items-start gap-x-2">
                                        <Image src={Avater} alt="avater" className="block w-[15%] rounded-full" />
                                        <div>
                                            <div className="flex items-center gap-x-2">
                                                <h5 className="text-sm font-medium text-black">Nick Willford</h5>
                                                <Image src={Check} alt="check" className="block" />
                                            </div>
                                            <p className="text-[#5c5b5b] text-xs leading-normal font-medium">
                                                Best Selling Publisher' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                    <MRCTA text="Load More" classes="mx-auto !bg-[#000000] !mt-12 !text-lg !font-bold !px-16 shadow-[0px_5px_20px_rgba(0,0,0,.4)] hover:!bg-primary-100" />
                </div>
            </div>
        </section>
    )
}
export default Cards;