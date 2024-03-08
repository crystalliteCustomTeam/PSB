import { useState } from "react";
import styles from "./MRHeroForm.module.css"
import Router from "next/router";
const MRHeroForm = ({classes = ""}) => {
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
        <div className={`${styles.leadforms} relative !p-5 mr-lg:!p-8 mr-xl:!py-10 w-[80%] mr-md:w-[100%] mr-lg:w-[70%] ${classes}`}>
            <h3 className="font-primary font-semibold text-[25px] mr-lg:text-[30px] mr-xl:text-[30px] leading-normal text-center mb-3 text-white">
                Fill Your  Registration
            </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* <label>Full Name<sup>*</sup></label> */}
                    <input type="text" required  name="name" placeholder="Your Name" onkeypress="return /[a-z]/i.test(event.key)" />
                </div>
                <div>
                    {/* <label>Email Address<sup>*</sup></label> */}
                    <input type="email" required name="email" placeholder="Email Address" />
                </div>
                <div>
                    {/* <label>Phone<sup>*</sup></label> */}
                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*"  name="phone" placeholder="Phone"  required/>
                </div>
                <div>
                    {/* <label>Comments</label> */}
                    <textarea className="resize-none" id="message" name="comments" placeholder="Comments.."></textarea>
                </div>
                <div>
                    <button type="submit">{score}</button>
                </div>
            </form>
        </div>
    )
}

export default MRHeroForm
