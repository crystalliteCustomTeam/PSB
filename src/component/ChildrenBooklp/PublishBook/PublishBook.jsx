import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { MRCTA, MRCTAGroup } from "@/component";

export default function PublishBook({
  title = "How We <span class='text-[#40BEE2] font-medium'> Publish </span> Your Book?",
  desc = "Our publishing process begins with a thorough review of your manuscript, ensuring it meets the highest standards. We then work closely with you on editing, design, and illustrations to bring your vision to life. Finally, we handle all aspects of printing and distribution, making your book available to readers worldwide.",
}) {
  const [ip, setIP] = useState("");
  const [score, setScore] = useState("Submit");
  const [pagenewurl, setPagenewurl] = useState("");
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    const getIPData = async () => {
      try {
        const res = await Axios.get("https://ipwho.is/");
        setIP(res.data);
      } catch (error) {
        console.error("Error fetching IP data:", error);
      }
    };
    getIPData();
  }, []);

  useEffect(() => {
    const currentUrl = window.location.href;
    console.log(currentUrl);
    setPagenewurl(currentUrl);
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
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      currentdate: currentdate,
    };

    const JSONdata = JSON.stringify(data);

    setScore("Sending Data");
    console.log(JSONdata);

    try {
      const res = await fetch("api/email/route", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });

      if (res.status === 200) {
        console.log("Response Successed", res);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }

    const headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
      "Content-Type": "application/json",
    };

    const bodyContent = JSON.stringify({
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      Brand: "BEST SELLING PUBLISHER",
      Page: currentRoute,
      Date: currentdate,
      Time: currentdate,
      JSON: JSONdata,
    });

    try {
      await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });
    } catch (error) {
      console.error("Error sending to SheetDB:", error);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/46656315/524aec68-a41e-4446-87d5-416ce22cfde6", requestOptions);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error("Error submitting to HubSpot:", error);
    }

    router.push("/ThankYou");
  };

  return (
    <section>
      <div className="mr-lg:py-[70px] py-[50px]">
        <div className="mr-container">
          <div className="flex flex-col gap-3 items-center justify-center mr-xl:w-[90%] w-full mx-auto mb-10">
            <h3 className="mr-lg:text-[40px] mr-sm:text-[30px] text-[25px] leading-normal font-semibold text-center" dangerouslySetInnerHTML={{ __html: title }} />
            <p className="text-center mr-2xl:text-[16px] text-sm leading-normal" dangerouslySetInnerHTML={{ __html: desc }} />
          </div>
          <div className="bg-[#40BEE2] mr-xl:p-[50px] py-[30px] px-[20px] mr-sm:p-[30px] rounded-xl mr-lg:w-[90%] w-full mx-auto">
            <form className="" autoComplete="off">
              <div className="grid mr-md:grid-cols-2 grid-cols-1 mr-xl:gap-5 gap-3 mb-5 items-center">
                <div>
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Full Name *"
                    onkeypress="return /[a-z]/i.test(event.key)"
                    className="placeholder:text-[#fff] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[60px] pl-5 border-[#fff] rounded-lg bg-[#27A4C9] shadow-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Email *"
                    className="placeholder:text-[#fff] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[60px] pl-5 border-[#fff] rounded-lg bg-[#27A4C9] shadow-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    minLength="10"
                    maxLength="13"
                    pattern="[0-9]*"
                    name="phone"
                    placeholder="Phone *"
                    className="placeholder:text-[#fff] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[60px] pl-5 border-[#fff] rounded-lg bg-[#27A4C9] shadow-sm"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="comments"
                    placeholder="Message"
                    className="placeholder:text-[#fff] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[60px] pl-5 pt-4 border-[#fff] rounded-lg bg-[#27A4C9] shadow-sm resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="w-full flex items-center justify-center">
                  <button className="w-full mr-lg:w-max h-[50px]  text-white flex items-center font-sans font-semibold justify-center border-2 transition-all border-transparent __animatedPing !rounded-[6px] hover:bg-white hover:border-white hover:text-black !bg-[#161616] mr-lg:!px-36">Request A Free Quote</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
