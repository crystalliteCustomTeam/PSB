
import Image from 'next/image';
import React from 'react';



const openZendeskChat = () => {
  if (window.zESettings) {
    window.zE('webWidget', 'open');
  }
};


const GhostwritingBanner = (props) => {



  return (
    <>
      <section className='w-full bg-white text-[#1d1d1f] py-4 font-secondary xs:py-0'>
        <div className='relative'>
          <div
            className="absolute -z-0 md:hidden sm:hidden xs:hidden top-0 right-0 w-[1000px] h-[705px] lg:w-[900px] bg-no-repeat md:bg-right bg-cover"
            style={{ backgroundImage: "url('/assets/images/newimg/seo-featured-banner1.png')" }}
          ></div>
        </div>
        <div className=' text-left justify-center py-20  md:py-10 sm:px-10 sm:py-5 xs:py-10 xs:bg-left xs:bg-cover' >
          <div className=' z-10 relative lg:max-w-6xl grid grid-cols-1 sm:px-5 md:container 2xl:px-14 xl:px-14 lg:px-14 md:px-14' >
            <div className='w-[85%] pt-8 pb-20 sm:w-[100%] sm:mx-auto sm:pb-0 xs:py-0 xs:px-5 xs:w-[100%] md:w-[100%] md:py-0'>
              <h1 className='w-[75%] font-primary md:w-[100%] sm:w-[90%] font-bold leading-[70px] text-[60px] md:text-[50px] md:leading-[50px] mt-12 sm:mt-0 sm:text-4xl sm:mx-auto xs:text-4xl xs:w-[100%] '>
                {props.title}
              </h1>
              <p className='w-[60%] md:w-[100%] mt-3 sm:mx-auto sm:w-[90%] xs:w-[90%]'>
                {props.dec}
              </p>
              <div className='w-[30%] md:w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-4 sm:mx-auto sm:w-[80%] xs:w-[100%]'>
                <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
              </div>
            </div>
            <div className='mx-auto w-[100%] xl:hidden 2xl:hidden lg:hidden justify-center items-center text-center pb-20 sm:pb-0 xs:w-[90%] xs:pb-10 ' >
              <Image quality={95} src={'/assets/images/newimg/seo-featured-banner1.png'} width={800} height={600} alt='seo-featured-banner' />
            </div>
            <div className='mx-auto w-[100%] md:hidden sm:hidden xs:hidden justify-center items-center text-center pb-20 xs:w-[90%] xs:pb-10 ' >

            </div>
          </div>
        </div>




      </section>




    </>
  )
}

export default GhostwritingBanner
