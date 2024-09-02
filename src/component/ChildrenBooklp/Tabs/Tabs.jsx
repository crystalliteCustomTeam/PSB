import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

// media
import Ingramspark from "media/children-book-lp/IngramSpark.png";
import Arrow from "media/children-book-lp/arrow.png";
import {MRCTA} from "@/component";

const tabsList = [
  ["Ingramspark Publishing", 1],
  ["Lulu Book Publishing", 2],
  ["Walmart", 3],
  ["Amazon KDP", 4],
  ["Apple Books", 5],
  ["Google Books", 6],
];
const tabData = {
  1: {
    title: "<span class='text-[#40BEE2] font-medium'>Ingramspark </span> Publishing",
    description:
      "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish.",
    image: Ingramspark,
  },
  2: {
    title: "<span class='text-[#40BEE2] font-medium'>Lulu Book </span> Publishing",

    description:
      "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish.",
    image: Ingramspark,
  },
  3: {
    title: "Walmart",

    description:
      "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish.",
    image: Ingramspark,
  },
  4: {
    title: "<span class='text-[#40BEE2] font-medium'>Amazon</span> KDP",

    description:
      "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish.",
    image: Ingramspark,
  },
  5: {
    title: "<span class='text-[#40BEE2] font-medium'>Apple</span> Books",

    description:
      "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish.",
    image: Ingramspark,
  },
  6: {
    title: "<span class='text-[#40BEE2] font-medium'>Google</span> Books",

    description:
      "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. <br/> <br/> Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish.",
    image: Ingramspark,
  },
};

export default function Tabs({
  title = "Diverse Book <span class='text-[#40BEE2] font-medium'> Promo </span> Methods",
  desc = "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced",
}) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <section>
      <div className="mr-lg:py-[70px] py-[50px]">
        <div className="mr-container">
          <div className="flex flex-col items-center justify-center gap-3 mb-5">
            <h3 className="mr-lg:text-[40px] text-[30px] font-semibold leading-normal text-center" dangerouslySetInnerHTML={{__html: title}} />
            <p className="mr-xl:w-[60%] mr-lg:w-[80%] w-full mx-auto text-center mr-lg:text-[16px] text-[14px]" dangerouslySetInnerHTML={{__html: desc}} />
          </div>

          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="mr-md:col-span-4 col-span-12 ">
              <div className="group flex mr-md:flex-col mr-md:gap-0 gap-3 mr-md:flex-nowrap overflow-x-scroll mr-md:py-0 py-3">
                {tabsList?.map(([text, id]) => (
                  <button
                    key={id}
                    className={`mr-md:py-5 mr-md:px-4 p-1 mr-md:w-[80%] w-full mx-auto text-[20px] text-left pl-5 cursor-pointer flex items-center justify-between border-[1px] border-[#f3f3f3] gap-3 ${
                      activeTab == id ? "bg-[#40BEE2] text-[#fff] rounded-[10px]" : ""
                    }`}
                    onClick={() => handleTabClick(id)}
                  >
                    <div className="flex items-center flex-nowrap gap-x-2 mr-md:w-full w-[200px] py-2">
                      <span
                        className={`relative  w-[15px] h-[15px] rounded-full border-2 before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:w-[7px] before:h-[7px]  before:rounded-full ${
                          activeTab == id ? "bg-[#40BEE2] p-1 border-black before:bg-[#000]" : " before:bg-[#D2D2D2] border-[#D2D2D2] "
                        }`}
                      ></span>
                      <h3 className="font-medium mr-xl:text-[18px] text-[14px]"> {text}</h3>
                    </div>

                    {activeTab == id ? <Image src={Arrow} alt="Best Selling Publisher" className="mr-md:block hidden" width={30} height={30} /> : ""}
                  </button>
                ))}
              </div>
            </div>
            <div className="mr-md:col-span-8 col-span-12">
              {tabData[activeTab] && (
                <div>
                  <h6 className="mr-lg:text-[30px] text-[20px] font-primary font-semibold text-[#40BEE2]">
                    {/* <Image src={tabData[activeTab].image} quality={95} className="img-fluid mr-auto mb-3" alt={tabData[activeTab].subtitle} /> */}
                    {tabData[activeTab].subtitle}
                  </h6>
                  <div className="flex mr-md:flex-row flex-col-reverse items-center justify-start gap-x-5">
                    <h3 className="mr-lg:text-[30px] mr-md:text-[20px] text-[25px] font-primary mr-md:leading-[40px] font-semibold mb-5" dangerouslySetInnerHTML={{__html: tabData[activeTab].title}} />{" "}
                    <span className="w-[1px] h-[40px] bg-[#000] mr-md:block hidden"></span>{" "}
                    <Image src={tabData[activeTab].image} quality={95} className="mr-md:w-[180px] w-[200px] h-auto mr-md:mr-auto mr-xs:mx-auto mb-3" alt={tabData[activeTab].subtitle} />
                  </div>

                  <p className="mr-lg:text-[16px] text-[12px] mr-lg:leading-[22px] leading-normal" dangerouslySetInnerHTML={{__html: tabData[activeTab].description}} />

                  <div className="grid grid-cols-1 mr-sm:flex mr-md:justify-start justify-center mr-sm:gap-x-5 gap-5 mt-5 mr-lg:mt-10">
                    <MRCTA text="Connect With Us!" handle="onclick='parent.LC_API.open_chat_window();return false;'" classes="__animatedPing !rounded-[6px] hover:bg-transparent hover:border-white" />
                    <MRCTA text="Call Us Now!" link="tel:800-781-9093" classes="__animatedPing !rounded-[6px] bg-transparent !border-0 hover:bg-black !bg-[#161616] !text-white hover:border-black" />
                  </div>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
