import React from 'react'
import styles from '@/styles/Formdata.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useRouter } from 'next/router';

const Formdata = () => {
    // const [ip, setIP] = useState('');
    // //creating function to load ip address from the API
    // const getIPData = async () => {
    //     const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
    //     setIP(res.data);
    // }
    // useEffect(() => {
    //     getIPData()
    // }, [])

    // const [score, setScore] = useState('Let`s discuss');

    // const router = useRouter();
    // const currentRoute = router.pathname;
    //  const [pagenewurl, setPagenewurl] = useState('');
    //   useEffect(() => {
    //     const pagenewurl = window.location.href;
    //     console.log(pagenewurl);
    //     setPagenewurl(pagenewurl);
    //   }, []);

    // const handleSubmit = async (e) => {

    //     e.preventDefault()
    //     var currentdate = new Date().toLocaleString() + ''

    //     const data = {
    //         name: e.target.name.value,
    //         email: e.target.email.value,
    //         phone: e.target.phone.value,
    //         comment: e.target.comments.value,
    //         pageUrl: pagenewurl,
    //         IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
    //         currentdate: currentdate,
    //     }

    //     const JSONdata = JSON.stringify(data)

    //     setScore('Sending Data');
    //     console.log(JSONdata);


    //     fetch('api/email/route', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSONdata
    //     }).then((res) => {
    //         console.log(`Response received ${res}`)
    //         if (res.status === 200) {
    //             console.log(`Response Successed ${res}`)
    //         }
    //     })

    //     let headersList = {
    //         "Accept": "*/*",
    //         "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    //         "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
    //         "Content-Type": "application/json"
    //     }

    //     let bodyContent = JSON.stringify({
    //         "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
    //         "Brand": "BEST SELLING PUBLISHER",
    //         "Page": `${currentRoute}`,
    //         "Date": currentdate,
    //         "Time": currentdate,
    //         "JSON": JSONdata,

    //     });



    //     await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
    //         method: "POST",
    //         body: bodyContent,
    //         headers: headersList
    //     });


    //     const { pathname } = router;
    //     if (pathname == pathname) {
    //         window.location.href = '/ThankYou';
    //     }

    // }

    const [ip, setIP] = useState('');
    const [score, setScore] = useState('Let`s discuss');
    const [pagenewurl, setPagenewurl] = useState('');
    const router = useRouter();
    const currentRoute = router.pathname;

    // Function to load IP address from the API
    useEffect(() => {
        const getIPData = async () => {
            try {
                const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
                setIP(res.data);
            } catch (error) {
                console.error("Failed to fetch IP data", error);
            }
        };
        getIPData();
    }, []);

    useEffect(() => {
        const pagenewurl = window.location.href;
        setPagenewurl(pagenewurl);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentdate = new Date().toLocaleString();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comments.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        };

        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');
        console.log(JSONdata);

        try {
            const res = await fetch('/api/email/route', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSONdata
            });
            console.log(`Response received ${res}`);
            if (res.status === 200) {
                console.log('Response Success');
            }

            const headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                "Content-Type": "application/json"
            };

            const bodyContent = JSON.stringify({
                IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
                Brand: 'BEST SELLING PUBLISHER',
                Page: currentRoute,
                Date: currentdate,
                Time: currentdate,
                JSON: JSONdata,
            });

            try {
                await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
                    method: "POST",
                    body: bodyContent,
                    headers: headersList
                });
            } catch (error) {
                console.error('Error sending to SheetDB:', error);
            }

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                fields: [
                    {
                        objectTypeId: "0-1",
                        name: "email",
                        value: e.target.email.value
                    },
                    {
                        objectTypeId: "0-1",
                        name: "name",
                        value: e.target.name.value
                    },
                    {
                        objectTypeId: "0-1",
                        name: "phone",
                        value: e.target.phone.value
                    },
                    {
                        objectTypeId: "0-1",
                        name: "message",
                        value: e.target.comment.value
                    }
                ],
                context: {
                    ipAddress: ip.IPv4,
                    pageUri: pagenewurl,
                    pageName: pagenewurl
                },
                legalConsentOptions: {
                    consent: {
                        consentToProcess: true,
                        text: "I agree to allow Example Company to store and process my personal data.",
                        communications: [
                            {
                                value: true,
                                subscriptionTypeId: 999,
                                text: "I agree to receive marketing communications from Example Company."
                            }
                        ]
                    }
                }
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            await fetch("https://api.hsforms.com/submissions/v3/integration/submit/46656315/524aec68-a41e-4446-87d5-416ce22cfde6", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.error(error));

            window.location.href = '/ThankYou';

        } catch (error) {
            console.error('Failed to submit data', error);
        }
    };
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