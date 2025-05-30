// React
import { useState } from "react"
// Next
import Image from "next/image"
// Media
import Banner from "media/new-lp/lp1/men-vector.jpg"
import data from "media/new-lp/lp1/portfolioData/data.json"
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section>
      <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] relative z-10 bg-[#e6eff7]">
        <Image
          src={Banner}
          alt="side_image"
          className="absolute -z-10 object-contain object-right w-full h-full inset-0"
        />
        <div className="mr-container">
          <div className="max-w-[1100px] mr-md:pb-[50px] pb-[40px]">
            <h2 className="mr-md:text-[35px] mr-sm:text-[30px] text-[20px] leading-tight font-extrabold text-[##333] capitalize mb-4">
              We have helped thousands of writers get their work published
            </h2>
            <p className="mr-xl:text-[20px] mr-lg:text-[18px] mr-md:text-[16px] text-sm leading-normal font-normal text-[#676767]">
              Our diversified talent pool with multiple unique skillsets has
              enabled us to specialize in various genres and cater to the
              ghostwriting needs of clients from varying industries and
              professional spheres.
            </p>
          </div>
          <div>
            <div className="flex flex-nowrap whitespace-nowrap overflow-x-auto gap-y-5 justify-start items-center gap-x-5">
              {data.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`mr-lg:p-[8px_26px] p-[8px_10px] font-medium transition-all ease-in-out duration-300 text-sm uppercase border border-[#e4573d] hover:bg-[#e4573d] hover:text-white ${
                    activeTab === index
                      ? "bg-[#e4573d] text-white"
                      : "text-[#e4573d] bg-transparent "
                  } focus:outline-none`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="mt-[23px] grid mr-lg:grid-cols-6 mr-sm:grid-cols-3 grid-cols-2 gap-y-5 items-center gap-x-5">
              {data[activeTab].image?.map((e, i) => (
                <div
                  key={i}
                  className="bg-white p-[10px] shadow-[#c7c7c7_0_0_7px]"
                >
                  <Image
                    src={e}
                    width={194}
                    height={297}
                    alt={`book ${++i}`}
                    className="mx-auto w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
