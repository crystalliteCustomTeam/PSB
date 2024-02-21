import { useState } from "react";
import styles from "./MRHeroForm.module.css"
import Router from "next/router";
const MRHeroForm = () => {
    const [score, setScore] = useState("Submit Form");
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
        <div className={`${styles.leadforms} !p-5 mr-lg:!p-8`}>
            <h3 className="font-primary font-bold text-[30px] xl:text-[40px] leading-normal text-center mb-3 text-secondary-100">
                Get A Free Quote
            </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name<sup>*</sup></label>
                    <input type="text" name="name" placeholder="Your name..." onkeypress="return /[a-z]/i.test(event.key)" />
                </div>
                <div>
                    <label>Email Address<sup>*</sup></label>
                    <input type="email" name="email" placeholder="Type Email Address" />
                </div>
                <div>
                    <label>Phone<sup>*</sup></label>
                    <input type="phone" name="phone" placeholder="(123)-456-789" onkeypress="return /[0-9]/i.test(event.key)" />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea id="message" name="comments" placeholder="Message.."></textarea>
                </div>
                <div>
                    <button type="submit">{score}</button>
                </div>
            </form>
        </div>
    )
}

export default MRHeroForm
