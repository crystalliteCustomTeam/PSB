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
  title = "Our <span class='text-[#40BEE2] font-normal'>Genre</span> Portfolio",
  desc = "Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced",
}) {
  return (
    <section className="pt-[20px] pb-[90px] mr-lg:pt-[30px] mr-lg:pb-[110px] mr-2xl:pb-[140px] relative ">
      <div className="mr-container">
        <div className="flex flex-col items-center justify-center gap-3 mb-10">
          <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal text-center text-black" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="mr-md:text-base text-sm font-normal leading-normal text-black text-center mr-lg:w-11/12 mr-xl:w-8/12 mx-auto mr-2xl:pb-8" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      </div>
      <div className="relative before:content-[''] before:absolute before:left-0 before:h-full mr-lg:before:w-[100px] mr-xl:before:w-[150px] mr-2xl:before:w-[170px] mr-3xl:before:w-[230px] before:top-[-10px] mr-xl:before:top-[-15px] before:bg-[#ffffff74] before:z-10 before:rounded-r-[10px] after:content-[''] after:absolute after:right-0 after:h-full mr-lg:after:w-[100px] mr-xl:after:w-[150px] mr-2xl:after:w-[170px] mr-3xl:after:w-[230px] after:top-[-10px] mr-xl:after:top-[-15px] after:bg-[#ffffff74] after:z-10 after:rounded-r-[10px]">
        <AutoPlaySlider arrows={true} options={{ align: "center" }} wrapperClasses="mt-3" direction="forward">
          {[Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6].map((imgPortfolio, i) => (
            <div key={i} className="group shrink-0 mr-xl:basis-[25%] mr-lg:basis-[25%] mr-md:basis-[25%] mr-sm:basis-[40%] basis-[50%] min-w-0 pl-4  items-center flex">
              <div className="flex items-center">
                <div className={``}>
                  <Image src={imgPortfolio} alt="Book Marketing" className="img-fluid" width={480} height={300} />
                </div>
              </div>
            </div>
          ))}
        </AutoPlaySlider>
      </div>
    </section>
  );
}
