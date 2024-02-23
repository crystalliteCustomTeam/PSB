import React from 'react'
import Image from 'next/image'



const openZendeskChat = () => {
  if (window.zESettings) {
    window.zE('webWidget', 'open');
  }
};
const ghostWriting = ({
  serviceTitle,
  serviceDesc,

}) => {


  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  return (
    <>
      <section className="immaculate achieve bg-cover mb-8 py-20 bg-[url('../../public/imageAR/serviceBG.png')]">
        <div className="mr-container font-secondary">
          <div className='grid grid-cols-2 items-center sm:grid-cols-1 xs:grid-cols-1'>
            <div className='text-white'>
              <div className="text-left mb-0">
                <h6 className='text-[30px] font-primary text-[#40BEE2] font-semibold'>Our Comprehensive</h6>
                <h2 className='text-[45px] font-primary font-bold py-2 md:leading-tight xs:leading-tight'>{serviceTitle}</h2>
                <p className='sm:text-justify xs:text-justify'>{serviceDesc}</p>
                <br></br>
                <p className=''>
                  Our process is simple and aims to deliver flawless results for every project.
                </p>
              </div>
            </div>
            <div className='sm:py-10'>
              <Image quality={95} width={800} height={700} src='/assets/images/newimg/ghostwriting_book.png' alt='ghost writing' className='mx-auto xs:py-10' />
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-x-8 xl:w-[75%] lg:w-[85%] w-full xs:grid-cols-1 md:mb-10 text-[18px] font-semibold text-white list-disc pl-3 marker:text-[#40Bee2]">
            <li className='border-b-2 border-solid border-[#40BEE2] py-4'>Writing Genuine Content based on your idea</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4'>Critical Review, Editing, and Proofreading</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4'>Extensive Formatting, Typesetting, &amp; Designing</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4'>Publishing, Branding, Marketing, and Promotions</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4'>Critical Review and Analysis</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4'>Book Coaching</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4'>Copy Editing</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4'>Developmental Editing</li>
          </ul>
          <div className='mx-auto py-3'>
            <div className='w-[30%] grid grid-cols-2 grid-rows-1 gap-x-6 py-5 relative md:w-[70%] sm:w-[100%] xs:w-[100%]'>
              <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#00C0E4] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
              <a onClick={openLiveChat} href="#" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ghostWriting
