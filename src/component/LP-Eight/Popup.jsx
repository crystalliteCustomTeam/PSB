"use client"
// React
import { useEffect, useRef, useState } from "react"
// Next
import { useRouter } from "next/navigation"
import Image from "next/image"
// GSAP
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
// Axios
import Axios from "axios"
// Media
import BooksImage from "media/book-promotion-marketing/popup_book.png"
// CSS
import styles from "./styles/cta.module.css"

export default function Popup({ css = "", ctaText = "Get A Free Quote" }) {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef(null)
  const [ip, setIP] = useState("")
  const [score, setScore] = useState("Get Free Consultation")
  const [pagenewurl, setPagenewurl] = useState("")

  const router = useRouter()
  const currentRoute = router.pathname

  const { contextSafe } = useGSAP()

  //   Popup Open Function
  const openPopup = contextSafe(() => {
    setIsOpen(true)
    gsap.from(popupRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
  })

  //   Popup Close Function
  const closePopup = contextSafe(async () => {
    await gsap.to(popupRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
    })
    setIsOpen(false)
  })

  // Effect to handle body overflow
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  //   Form Handler
  useEffect(() => {
    const getIPData = async () => {
      try {
        const res = await Axios.get("https://ipwho.is/")
        setIP(res.data)
      } catch (error) {
        console.error("Error fetching IP data:", error)
      }
    }
    getIPData()
  }, [])

  useEffect(() => {
    const currentUrl = window.location.href
    console.log(currentUrl)
    setPagenewurl(currentUrl)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const currentdate = new Date().toLocaleString()

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      comment: e.target.comments.value,
      pageUrl: pagenewurl,
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      currentdate: currentdate,
    }

    const JSONdata = JSON.stringify(data)

    setScore("Sending Data")
    console.log(JSONdata)

    try {
      const res = await fetch("/api/email/route", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSONdata,
      })

      if (res.status === 200) {
        console.log("Response Successed", res)
      }
    } catch (error) {
      console.error("Error sending data:", error)
    }

    const headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
      "Content-Type": "application/json",
    }

    const bodyContent = JSON.stringify({
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      Brand: "BEST SELLING PUBLISHER",
      Page: currentRoute,
      Date: currentdate,
      Time: currentdate,
      JSON: JSONdata,
    })

    try {
      await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      })
    } catch (error) {
      console.error("Error sending to SheetDB:", error)
    }

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      fields: [
        {
          objectTypeId: "0-1",
          name: "email",
          value: e.target.email.value,
        },
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: e.target.name.value,
        },
        {
          objectTypeId: "0-1",
          name: "phone",
          value: e.target.phone.value,
        },
        {
          objectTypeId: "0-1",
          name: "message",
          value: e.target.comments.value,
        },
      ],
      context: {
        ipAddress: ip.IPv4,
        pageUri: pagenewurl,
        pageName: pagenewurl,
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "I agree to allow Example Company to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from Example Company.",
            },
          ],
        },
      },
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    try {
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/46656315/524aec68-a41e-4446-87d5-416ce22cfde6",
        requestOptions
      )
      const result = await response.text()
      console.log(result)
    } catch (error) {
      console.error("Error submitting to HubSpot:", error)
    }

    router.push("/ThankYou")
  }
  //   Form Handler

  return (
    <div className="relative !z-50">
      <button onClick={openPopup} className={`${styles.cta} ${css}`}>
        {ctaText}
      </button>

      {isOpen && (
        <div className="mr-container">
          <div className="fixed h-screen !z-50 inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div
              ref={popupRef}
              className="relative !z-50 bg-white grid mr-xl:grid-cols-2 grid-cols-1 gap-x-5 mx-5 p-6 rounded-lg shadow-xl w-full max-w-[1000px]"
            >
              <button
                onClick={closePopup}
                className="absolute -right-4 border-4 shadow-md border-white -top-8 w-max h-max bg-red-500 text-xl font-semibold text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
              >
                X
              </button>
              <div>
                <h2 className="text-[30px] !text-black leading-tight !font-semibold !mb-2">
                  Let’s Get Started
                </h2>
                <p className="text-gray-400 text-[15px] leading-normal font-normal max-w-[400px]">
                  Call us on:{" "}
                  <a
                    href="tel:+18556666675"
                    className="text-primary-100 underline"
                  >
                    (855) 666 6675
                  </a>{" "}
                  or use the form below to start a conversation and show you how
                  we can help!
                </p>
                <form onSubmit={handleSubmit} className="mt-5">
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Full Name *"
                    className="block focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-lg px-4 py-3 mb-4 placeholder:text-[#B4B4B4] font-medium"
                  />
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Email *"
                    className="block focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-lg px-4 py-3 mb-4 placeholder:text-[#B4B4B4] font-medium"
                  />
                  <input
                    type="tel"
                    minLength="10"
                    maxLength="13"
                    pattern="[0-9]*"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="block focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-lg px-4 py-3 mb-4 placeholder:text-[#B4B4B4] font-medium"
                  />
                  <textarea
                    className="resize-none focus-visible:outline-[#40BEE2] w-full border-2 border-[#E1E1E1] rounded-lg px-4 pt-4 pb-10 mb-4 placeholder:text-[#B4B4B4]"
                    id="message"
                    name="comments"
                    placeholder="Comments.."
                  ></textarea>
                  <button
                    type="submit"
                    className="__animatedPing bg-[#40BEE2] hover:bg-primary-100 text-white w-full block rounded-lg py-3 transition-all duration-300 ease-in-out"
                  >
                    {score}
                  </button>
                </form>
              </div>
              <div>
                <Image
                  src={BooksImage}
                  alt="books"
                  className="mr-xl:absolute mr-xl:bottom-0 mr-xl:-right-20 mr-xl:block hidden"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
