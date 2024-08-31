import Image from "next/image";
import React from "react";

// Media
import backgroundImg from "media/children-book-lp/background_img1.png";
import ctaImg from "media/children-book-lp/cta1.png";

import Link from "next/link";
export default function PublishAuthor({
  title= "Become A Published Author Now",
  desc= " Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective techniques"
}) {
  return (
    <section className="">
      <div className="mr-lg:py-[70px] mr-md:py-[50px] py-[20px] ">
        <div className="container ">
          <div className="relative mr-lg:w-[90%] w-full mx-auto mr-xl:h-[350px] mr-md:h-[360px] items-center mr-md:py-[70px] py-[30px]">
            <Image src={backgroundImg} alt="Best Selling Publisher" width={1000} height={500}  quality={100} className="absolute object-cover rounded-[20px] -z-10 w-full h-full top-0 right-0 left-0 bottom-0 shadow-lg" />
            <div className="flex flex-col gap-4 items-center justify-center w-[90%] mx-auto text-white mb-8">
              <h3 className="mr-lg:text-[40px] mr-sm:text-[30px] text-[25px] leading-normal font-semibold text-center" dangerouslySetInnerHTML={{__html: title}}/>
              <p className="mr-lg:w-[70%] w-full mx-auto text-[16px] leading-normal text-center" dangerouslySetInnerHTML={{__html: desc}}/>
            </div>
            <div className="mx-auto w-max flex mr-md:flex-row flex-col items-center justify-center gap-5">
              <Link href="/" className="bg-black text-white h-[45px] items-center py-2 px-8 rounded-md flex justify-center">
                Connect With Us!
              </Link>
              <Link href="/" className="bg-white text-black h-[45px] items-center py-2 px-8 rounded-md flex justify-center">
                Call Us! Now
              </Link>
            </div>
            <div className="mr-lg:block hidden">
            <Image src={ctaImg} alt="Best Selling Publisher" width={1000} height={500}  quality={100} className=" absolute z-50 mr-xl:w-[230px] mr-lg:w-[180px] mr-md:w-[150px] mr-xl:h-[220px] h-[200px] top-[6%] left-[-5%] bottom-0 " />
            <Image src={ctaImg} alt="Best Selling Publisher" width={1000} height={500}  quality={100} className=" mr-md:absolute z-50 mr-xl:w-[230px] mr-lg:w-[180px] mr-md:w-[150px] mr-xl:h-[220px] h-[200px] right-[-5%] bottom-[0%] " />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
