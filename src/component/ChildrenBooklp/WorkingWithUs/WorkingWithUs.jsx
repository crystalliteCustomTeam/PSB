import React from "react";
import AutoScrollSlider from "../AutoScrollSlider";
import Image from "next/image";

// Media
import Client1 from "media/children-book-lp/clients/inc-ar21.png";
import Client2 from "media/children-book-lp/clients/leadsrx.png";
import Client3 from "media/children-book-lp/clients/marketwatch-logo.png";
import Client4 from "media/children-book-lp/clients/mrketers-media.png";
import Client5 from "media/children-book-lp/clients/thenextweb-ar21.png";
import Client6 from "media/children-book-lp/clients/yahoo-finance.png";
import Client7 from "media/children-book-lp/clients/business-insider-1.png";
import Client8 from "media/children-book-lp/clients/digital-journal-logo.png";
import Client9 from "media/children-book-lp/clients/elite-daily.png";
import Client10 from "media/children-book-lp/clients/entrepreneur.png";
import Client11 from "media/children-book-lp/clients/forbes.png";
import Client12 from "media/children-book-lp/clients/huffpost.png";
import Link from "next/link";
import {MRCTA} from "@/component";

export default function WorkingWithUs({
  title = "Just By <span class='text-[#40BEE2] font-medium'> Working </span> With Us.",
  desc = "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced",
}) {
  return (
    <section>
      <div className="mr-lg:py-[40px] py-[30px]">
        <div className="mr-container">
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <h3 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal text-center" dangerouslySetInnerHTML={{__html: title}} />
            <p className="mr-xl:w-[60%] mr-lg:w-[80%] w-full mx-auto text-center mr-lg:text-[16px] text-[12px]" dangerouslySetInnerHTML={{__html: desc}} />
          </div>
          <div>
            <AutoScrollSlider options={{align: "center"}} wrapperClasses="mt-10 mb-10" direction="forward">
              {[Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10, Client11, Client12].map((imgPortfolio, i) => (
                <div key={i} className="group shrink-0 mr-xl:basis-[16%] mr-lg:basis-[16%] mr-md:basis-[20%] mr-sm:basis-[25%] basis-[30%] min-w-0 pl-5  items-center flex">
                  <div className="flex items-center">
                    <div className={``}>
                      <Image src={imgPortfolio} alt="Book Marketing" className="w-[130px] h-[25px]" width={150} height={80} />
                    </div>
                  </div>
                </div>
              ))}
            </AutoScrollSlider>
            <div className="grid grid-cols-1 mr-sm:flex  justify-center mr-sm:gap-x-5 gap-3 mt-5 mr-lg:mt-10">
              <MRCTA text="Connect With Us!" handle="onclick='parent.LC_API.open_chat_window();return false;'" classes="__animatedPing !rounded-[6px] hover:bg-transparent hover:border-white" />
              <MRCTA text="Call Us Now!" link="tel:800-781-9093" classes="__animatedPing !rounded-[6px] bg-transparent !border-0 hover:bg-black !bg-[#161616] !text-white hover:border-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
