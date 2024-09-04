import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// media
import Ingramspark from "media/children-book-lp/IngramSpark.png";
import Arrow from "media/children-book-lp/arrow.png";
import { MRCTA } from "@/component";

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
    title: "<span class='text-[#40BEE2] font-normal'>Ingramspark </span> Publishing",
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
  title = "Diverse Book <span class='text-[#40BEE2] font-normal'> Promo </span> Methods",
  desc = "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced",
}) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <section className="pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px]">
      <div className="mr-container">
        <div className="flex flex-col items-center justify-center gap-3 mb-5">
          <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal text-center text-black" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="mr-md:text-base text-sm font-normal leading-normal text-black text-center mr-lg:w-11/12 mr-xl:w-8/12 mx-auto pb-8 mr-2xl:pb-14" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>

        <div className="grid grid-cols-12 gap-5 items-center">
          <div className="mr-md:col-span-5 mr-lg:col-span-4 col-span-12 ">
            <div className="group flex mr-md:flex-col mr-md:gap-0 gap-3 mr-md:flex-nowrap overflow-x-scroll mr-md:py-0 py-3">
              {tabsList?.map(([text, id]) => (
                <button
                  key={id}
                  className={`mr-md:py-5 mr-md:px-4 p-1 mr-xl:w-[80%] w-full mx-auto text-[20px] text-left pl-5 cursor-pointer flex items-center justify-between border-[1px] border-[#f3f3f3] gap-3 ${activeTab == id ? "bg-[#40BEE2] text-[#fff] rounded-[10px]" : ""
                    }`}
                  onClick={() => handleTabClick(id)}
                >
                  <div className="flex items-center flex-nowrap gap-x-3 mr-md:w-full w-[200px] py-2">
                    <span
                      className={`relative  w-[15px] h-[15px] rounded-full border-2 before:content-[''] before:absolute before:top-[2.4px] mr-2xl:before:top-[2.5px] before:left-[2.4px] mr-2xl:before:left-[2.5px] before:w-[7px] before:h-[7px]  before:rounded-full ${activeTab == id ? "bg-[#40BEE2] p-1 border-black before:bg-[#000]" : " before:bg-[#D2D2D2] border-[#D2D2D2] "
                        }`}
                    ></span>
                    <h3 className="font-semibold mr-xl:text-[18px] text-[14px]"> {text}</h3>
                  </div>

                  {activeTab == id ? <Image src={Arrow} alt="Best Selling Publisher" className="mr-md:block hidden" width={30} height={30} /> : ""}
                </button>
              ))}
            </div>
          </div>
          <div className="mr-md:col-span-7 mr-lg:col-span-8 col-span-12">
            {tabData[activeTab] && (
              <div>
                <h6 className="mr-lg:text-[30px] text-[20px] font-primary font-semibold text-[#40BEE2]">
                  {tabData[activeTab].subtitle}
                </h6>
                <div className="flex mr-md:flex-row flex-col-reverse items-center justify-start gap-x-5 mr-lg:gap-x-9 relative mr-xl:w-8/12 mr-xl:mb-2">
                  <h3 className="mr-lg:text-[30px] mr-md:text-[20px] text-[25px] font-primary mr-md:leading-[40px] font-semibold mb-5" dangerouslySetInnerHTML={{ __html: tabData[activeTab].title }} />
                  <span className="w-[2px] h-[30px] bg-[#DBDBDB] mr-md:block hidden absolute left-[30px] right-0 top-[5px] mx-auto"></span>
                  <Image src={tabData[activeTab].image} quality={95} className="mr-md:w-[180px] w-[200px] h-auto mr-md:mr-auto mr-xs:mx-auto mb-3" alt={tabData[activeTab].subtitle} />
                </div>

                <p className="mr-lg:text-[16px] text-[12px] mr-lg:leading-[25px] font-normal leading-normal mr-lg:pr-10" dangerouslySetInnerHTML={{ __html: tabData[activeTab].description }} />

                <div className="grid grid-cols-1 mr-sm:flex mr-md:justify-start justify-center mr-sm:gap-x-5 gap-5 mt-5 mr-lg:mt-10">
                  <MRCTA text="Connect With Us!" handle="onclick='parent.LC_API.open_chat_window();return false;'" classes="__animatedPing !rounded-[6px] hover:bg-transparent hover:text-black hover:border-black" />
                  <MRCTA text="Call Us Now!" link="tel:800-781-9093" classes="__animatedPing !rounded-[6px] bg-transparent !border-0 hover:bg-black !bg-[#161616] !text-white hover:border-black" />
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
