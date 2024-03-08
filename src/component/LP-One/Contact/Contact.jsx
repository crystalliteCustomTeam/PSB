import { useState } from "react"
import Router from "next/router"

let list = [
    "Our sales manager reaches you out within a few days after analyzing your business requirements",
    "Meanwhile, we sign an NDA to ensure the highest privacy level",
    "Our pre-sale manager presents project estimates and approximate timeline"
]
const Contact = () => {
    const [score, setScore] = useState("APPLY FOR IT");
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
        <section className="relative z-10">
            <div className="py-[30px] mr-lg:py-[50px] before:bg-no-repeat before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:-z-10 before:bg-cover before:h-[70%] before:bg-center before:bg-[url('../../public/lp-one-conatct-bg.png')]">
                <div className="mr-container">
                    <div className="grid grid-cols-2 mr-xs:grid-cols-1 mr-md:flex w-[100%] mr-lg:w-[80%] mr-xl:w-[65%] mx-auto items-center">
                        <div className="mr-md:basis-[60%] bg-white shadow-lg shadow-gray-300 p-3 mr-md:p-5">
                            <h2 className="text-[25px] mr-md:text-[40px] font-sans font-bold text-black text-center leading-tight mb-5">
                                Don’t Be Shy, Say Hi!
                            </h2>
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-5" autoComplete="off">
                                <div>
                                    <label className="block mb-3 font-bold text-[15px] text-black leading-none">Full Name<sup>*</sup></label>
                                    <input type="text" required name="name" placeholder="Your Name" onkeypress="return /[a-z]/i.test(event.key)" className="placeholder:text-[#9E9E9E] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[40px] px-2 border-b-[1px] border-[#9E9E9E]" />
                                </div>
                                <div>
                                    <label className="block mb-3 font-bold text-[15px] text-black leading-none">Email Address<sup>*</sup></label>
                                    <input type="email" required name="email" placeholder="Email Address" className="placeholder:text-[#9E9E9E] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[40px] px-2 border-b-[1px] border-[#9E9E9E]" />
                                </div>
                                <div>
                                    <label className="block mb-3 font-bold text-[15px] text-black leading-none">Phone<sup>*</sup></label>
                                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone" className="placeholder:text-[#9E9E9E] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[40px] px-2 border-b-[1px] border-[#9E9E9E]" required/>
                                </div>
                                <div>
                                    <label className="block mb-3 font-bold text-[15px] text-black leading-none">Comments</label>
                                    <textarea id="message" name="comments" placeholder="Comments.." className="placeholder:text-[#9E9E9E] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[80px] p-2 border-b-[1px] border-[#9E9E9E] resize-none" ></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full block h-[40px] text-center text-[16px] text-white bg-primary-100 font-semibold">{score}</button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-primary-100 mr-md:basis-[45%] px-2 mr-md:px-5 py-[20px] mr-md:py-[50px] mr-xs:rounded-b-[30px] mr-sm:rounded-r-[30px]">
                            <h3 className="text-[24px] mr-lg:text-[30px] font-sans font-bold text-white leading-tight mb-5">
                                What Happens Next?
                            </h3>
                            <ul className="grid grid-cols-1 gap-y-5">
                                {
                                    list?.map((e, i) => (
                                        <li key={i} className="text-[13px] mr-lg:text-[15px] leading-normal text-white font-normal inline-flex gap-3">
                                            <span className="bg-white w-[30px] h-[30px] flex text-black font-semibold shadow-lg items-center justify-center rounded-full">{i + 1}</span>
                                            <span className="block [width:calc(100%_-_30px)]">{e}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact