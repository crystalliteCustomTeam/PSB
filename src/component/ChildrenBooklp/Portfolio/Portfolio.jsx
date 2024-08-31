import React from "react";

// Media
import Portfolio1 from "media/children-book-lp/portfolio/img1.png";
import Portfolio2 from "media/children-book-lp/portfolio/img2.png";
import Portfolio3 from "media/children-book-lp/portfolio/img3.png";
import Portfolio4 from "media/children-book-lp/portfolio/img4.png";
import Portfolio5 from "media/children-book-lp/portfolio/img5.png";
import Portfolio6 from "media/children-book-lp/portfolio/img6.png";
import AutoPlaySlider from "../AutoPlaySlider";
import Image from "next/image";

export default function Portfolio({
  title = "Our <span class='text-[#40BEE2] font-medium'>Genre</span> Portfolio",
  desc = "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced",
}) {
  return (
    <section>
      <div className="mr-lg:py-[70px] py-[50px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-3 mb-5">
            <h3 className="mr-lg:text-[40px] text-[30px] font-semibold leading-normal text-center" dangerouslySetInnerHTML={{__html: title}} />
            <p className="mr-xl:w-[60%] mr-lg:w-[80%] w-full mx-auto text-center mr-lg:text-[16px] text-[14px]" dangerouslySetInnerHTML={{__html: desc}} />
          </div>
        </div>
        <div className="">
          <AutoPlaySlider arrows={true} options={{align: "center"}} wrapperClasses="mt-3" direction="forward">
            {[Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6].map((imgPortfolio, i) => (
              <div key={i} className="group shrink-0 mr-xl:basis-[22%] mr-lg:basis-[25%] mr-md:basis-[25%] mr-sm:basis-[40%] basis-[80%] min-w-0 pl-4  items-center flex">
                <div className="flex items-center">
                  <div className={``}>
                    <Image src={imgPortfolio} alt="Book Marketing" className="img-fluid" width={480} height={300} />
                  </div>
                </div>
              </div>
            ))}
          </AutoPlaySlider>
        </div>
      </div>
    </section>
  );
}
