import React from "react"
import styles from "./MRHeroForm.module.css"

const MRHeroForm = () => {
    return (
        <div className={`${styles.leadforms}`}>
            <h3 className="font-primary font-bold text-[40px] leading-normal text-center mb-3">Get A Free Quote</h3>
            <form>
                <div>
                    <label>Full Name<sup>*</sup></label>
                    <input type="text" placeholder="Your name..." onkeypress="return /[a-z]/i.test(event.key)" />
                </div>
                <div>
                    <label>Email Address<sup>*</sup></label>
                    <input type="email" placeholder="Type Email Address" />
                </div>
                <div>
                    <label>Phone<sup>*</sup></label>
                    <input type="phone" placeholder="(123)-456-789" onkeypress="return /[0-9]/i.test(event.key)" />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea id="message" placeholder="Message.."></textarea>
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default MRHeroForm
