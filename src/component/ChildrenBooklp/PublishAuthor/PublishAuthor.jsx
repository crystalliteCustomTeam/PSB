import Image from "next/image";
import React from "react";

// Media
import backgroundImg from "media/children-book-lp/background_img1.png";
import ctaImg from "media/children-book-lp/cta1.png";

import Link from "next/link";
export default function PublishAuthor() {
  return (
    <section className="">
      <div className="mr-lg:py-[70px] py-[50px] ">
        <div className="container ">
          <div className="relative w-[90%] mx-auto h-[380px] items-center py-[70px]">
            <Image src={backgroundImg} alt="Best Selling Publisher" width={1000} height={500}  quality={100} className="absolute object-cover rounded-[20px] -z-10 w-full h-full top-0 right-0 left-0 bottom-0 shadow-lg" />
            <div className="flex flex-col gap-4 items-center justify-center w-[90%] mx-auto text-white mb-8">
              <h3 className="mr-lg:text-[40px] mr-sm:text-[30px] text-[25px] leading-normal font-semibold text-center">Become A Published Author Now</h3>
              <p className="w-[70%] mx-auto text-[16px] leading-normal text-center">
                Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced,
                effective techniques
              </p>
            </div>
            <div className="mx-auto w-max flex items-center justify-center gap-5">
              <Link href="/" className="bg-black text-white h-[45px] items-center py-2 px-8 rounded-md flex justify-center">
                Connect With Us!
              </Link>
              <Link href="/" className="bg-white text-black h-[45px] items-center py-2 px-8 rounded-md flex justify-center">
                Call Us! Now
              </Link>
            </div>
            <Image src={ctaImg} alt="Best Selling Publisher" width={1000} height={500}  quality={100} className="absolute z-50 w-[230px] h-[220px] top-[6%] left-[-5%] bottom-0" />
            <Image src={ctaImg} alt="Best Selling Publisher" width={1000} height={500}  quality={100} className="absolute z-50 w-[230px] h-[220px] right-[-5%] bottom-[0%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
