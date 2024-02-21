import React from 'react'
import styles from '@/styles/Formdata.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useRouter } from 'next/router';

const Formdata = () => {


    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])

    const [score, setScore] = useState('Let`s discuss');

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
            "Brand": "Bitswits",
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
        <>
            <div className={styles.bookshelfForm}>
                <Form className='mx-auto p-5' onSubmit={handleSubmit}>
                    <h3 className='font-30 fw-700 font-primary txt-secondary text-center mb-5'>
                        Get A <span className='txt-primary'>Free</span> Quote
                    </h3>
                    <Form.Group className="mb-4" controlId="name">
                        <Form.Label className='font-13 font-secondary' name="name">Full Name *</Form.Label>
                        <Form.Control type="text" required placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="email">
                        <Form.Label className='font-13 font-secondary' name="email">Email Address *</Form.Label>
                        <Form.Control type="email" required placeholder="Type Email Address" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="phone">
                        <Form.Label className='font-13 font-secondary' name="phone">Phone *</Form.Label>
                        <Form.Control type="tel" minLength="10" maxLength="13" pattern="[0-9]*" placeholder="(123)-456-789" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="comments">
                        <Form.Label className='font-13 font-secondary' name="comments">Comments</Form.Label>
                        <Form.Control type="text" required placeholder="Message" />
                    </Form.Group>

                    <Button className='btns quoteBtns mt-3' type="submit"> {score} </Button>
                </Form>
            </div>

        </>

    )
}

export default Formdata