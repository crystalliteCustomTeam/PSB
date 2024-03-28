import { useState, useEffect } from 'react';
import Axios from "axios";
import { useRouter } from 'next/router';
import styles from "./MRHeroForm.module.css"
const MRHeroForm = ({classes = ""}) => {
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])

    const [score, setScore] = useState('Apply For It');

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
                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*"  name="phone" placeholder="Phone" required/>
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
