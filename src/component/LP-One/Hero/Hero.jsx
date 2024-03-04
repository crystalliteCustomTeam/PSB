import { useState } from "react"
import Router from "next/router"
import { MRCTA } from "@/component"
import Image from "next/image"

const Hero = () => {
    const [score, setScore] = useState("Get A Free Quote");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comments.value,
        }

        const JSONdata = JSON.stringify(data);
        console.log(JSONdata);
        setScore('Sending Data');
        fetch('/api/email/route', {
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
        const { pathname } = Router
        if (pathname == pathname) {
            window.location.href = '/ThankYou';
        }

    }
    return (
        <section>
            <div className="bg-[url('../../public/lp-one-hero-bg.png')] relative py-[50px] bg-no-repeat bg-cover">
                <div className="mr-container">
                    <div className="grid grid-cols-1 mr-md:grid-cols-12 items-center gap-y-5 mr-md:gap-y-0 mr-md:gap-x-4">
                        <div className="mr-md:col-span-7">
                            <h1 className="text-[20px] mr-lg:text-[28px] mr-xl:text-[33px] mr-2xl:text-[40px] font-sans font-extrabold leading-tight text-white mb-4">Kickstart your book project with just a <br />  <span className="inline-block relative z-10 bg-[url(../../public/lp-one-hero-circle-text.png)] bg-contain bg-center bg-no-repeat p-3">50%</span> down payment – no need to pay <br />  the full amount upfront!</h1>
                            <h2 className="text-[22px] leading-none font-sans font-bold text-primary-100 w-max mb-4">Here's what you get:</h2>
                            {
                                ["Personalized Support", "Quality Publishing", "Wide Distribution", "Affordable Pricing", "Satisfaction Guaranteed"].map((e, i) => (
                                    <p key={i} className="text-[16px] font-sans font-normal leading-[30px] mb-4 text-justify lg:text-left flex gap-x-3 items-center text-white">
                                        <Image src="/lp-one-check-hero-icon.png" width={16} height={16} alt="icon" />
                                        {e}
                                    </p>
                                ))
                            }
                            <div className="grid grid-cols-1 mr-sm:flex gap-3 mt-4">
                                <MRCTA
                                    text="Connect with Us!"
                                    color="text-primary-100"
                                    classes="hover:bg-white hover:text-black rounded-sm bg-transparent"
                                    border="border-primary-100 hover:border-white"
                                    handle="onclick='parent.LC_API.open_chat_window();return false;'"
                                />
                                <MRCTA
                                    text="Call us NOW!"
                                    link="tel:8007819093"
                                    bg="bg-transparent"
                                    color="text-white"
                                    border="border-white hover:!bg-primary-100 hover:border-transparent hover:text-white rounded-sm"
                                />
                            </div>
                            <Image src="/lp-one-hero-1.png" width={610} height={100} className="block mt-6 max-w-[80%]" />
                            <Image src="/lp-one-hero-2.png" width={812} height={100} className="block mt-6" />
                            <Image src="/lp-one-hero-3.png" width={812} height={100} className="block mt-6" />
                        </div>
                        <div className="mr-md:col-span-5">
                            <div className="backdrop-blur-md bg-white/30 w-[85%] m-auto px-3 mr-md:px-5 py-10 rounded-md relative mt-10 mr-lg:mt-0">
                                <Image src="/lp-one-hero-form-badge.png" width={100} height={132} className="absolute top-[-50px] right-[-20px]" />
                                <h2 className="text-[20px] mr-lg:text-[30px] font-sans font-bold text-white leading-tight mb-5">
                                    Request A Free Quote
                                </h2>
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-5" autoComplete="off">
                                    <div>
                                        <input type="text" required name="name" placeholder="Your Name" onkeypress="return /[a-z]/i.test(event.key)" className="placeholder:text-white rounded-md outline-none text-[#9E9E9E] bg-transparent font-normal text-[15px] leading-[25px] block w-full  h-[40px] px-2 border-2 border-white" />
                                    </div>
                                    <div>
                                        <input type="email" required name="email" placeholder="Email Address" className="placeholder:text-white rounded-md outline-none text-[#9E9E9E] bg-transparent font-normal text-[15px] leading-[25px] block w-full  h-[40px] px-2 border-2 border-white" />
                                    </div>
                                    <div>
                                        <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone" className="placeholder:text-white rounded-md outline-none text-[#9E9E9E] bg-transparent font-normal text-[15px] leading-[25px] block w-full  h-[40px] px-2 border-2 border-white" />
                                    </div>
                                    <div>
                                        <textarea id="message" name="comments" placeholder="Details..." className="placeholder:text-white rounded-md outline-none text-[#9E9E9E] bg-transparent font-normal text-[15px] leading-[25px] block w-full  h-[80px] p-2 border-2 border-white resize-none" ></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full rounded-md block h-[40px] text-center text-[16px] text-white bg-primary-100 font-semibold">{score}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero