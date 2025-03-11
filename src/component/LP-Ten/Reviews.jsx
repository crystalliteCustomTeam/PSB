export default function Reviews() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden mr-md:py-[80px] py-[50px]">
        <div className="mr-container">
          <div>
            <div className="relative z-10 text-center pb-[40px]">
              <h2 className="text-[#232323] mr-md:text-[41px] mr-sm:text-[35px] text-[25px] font-medium leading-tight mb-3">
              Our statured client list is a testament to our dedication.
              </h2>
              <p className="text-[#8a8a8a] text-lg leading-normal font-normal">This is what we have been doing for decades and that is why we are considered the best in business.</p>
            </div>
            <div className="grid mr-lg:grid-cols-2 grid-cols-1 gap-y-8 gap-x-5 items-center">
              <div className="h-full mr-md:p-[44px_64px] p-[44px_24px] text-center text-[#828282] bg-[linear-gradient(to_bottom,#d9eff7_0,rgba(255,255,255,1)_100%)]">
                <p>
                  <em>
                    Best Selling Publisher made my dream of becoming an author
                    come true. They are some crazy creative people with a lot of
                    ideas and took care of everything from outlining the plot to
                    designing and publishing. They revised the draft times and
                    again to my satisfaction.
                  </em>
                </p>
                <h4 className="text-[#db2807] mt-[30px] mr-sm:text-[18px] text-[16px] font-semibold">
                  Martha Doyle
                </h4>
                <span className="text-[#7b7b7b] font-normal text-[14px] block mt-[6px]">
                  Educationist and Author
                </span>
              </div>
              <div className="h-full mr-md:p-[44px_64px] p-[44px_24px] text-center text-[#828282] bg-[linear-gradient(to_bottom,#d9eff7_0,rgba(255,255,255,1)_100%)]">
                <p>
                  <em>
                    I was referred to Best Selling Publisher by a friend – and I
                    couldn't thank him enough for this. The professionals at
                    Best Selling Publisher took time to understand my
                    requirements and took it to their heart to convert my book
                    idea into a published reality.
                  </em>
                </p>
                <h4 className="text-[#db2807] mt-[30px] mr-sm:text-[18px] text-[16px] font-semibold">
                  Evan Bruce
                </h4>
                <span className="text-[#7b7b7b] font-normal text-[14px] block mt-[6px]">
                  Author
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
