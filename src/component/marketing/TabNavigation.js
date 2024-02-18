import { useState } from 'react';

function VerticalNavTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tab-vertical md:max-w-2xl md:mx-auto flex xs:flex-wrap font-secondary max-h-[490px] " >
      <div className="w-1/4 xs:basis-[40%] text-[#1d1d1f] items-stretch  h-[500px] overflow-y-scroll xs:h-[500px] " id='style-2'>
        <div className="bg-[#f2f2f2] p-0 text-left active:text-white text-[#707070] ">
          <button
            className={`block py-2 px-4 w-full text-left flex-1 cursor-pointer ${activeTab === 1 ? 'bg-[#00c0e4] text-white' : 'hover:bg-blue-100 '
              }`}
            onClick={() => handleTabClick(1)}
          >
            Personal Marketing Assistants
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 2 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(2)}
          >
            Social Media Set-Up
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 3 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(3)}
          >
            Creative and Appealing Bookmarks
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 4 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(4)}
          >
            Digital Postcards
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 5 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(5)}
          >
            Business Cards
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 6 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(6)}
          >
            Small and Attractive Posters
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 7 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(7)}
          >
            Book Video Trailers
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 8 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(8)}
          >
            Press Release
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 9 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(9)}
          >
            Marketing on Social Media Platforms
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 10 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(10)}
          >
            Marketing Consultation
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 11 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(11)}
          >
            Amazon Kindle
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 12 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(12)}
          >
            Apple Books
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 13 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(13)}
          >
            Barnes and Noble Nook Edition
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 14 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(14)}
          >
            Audio Book
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 15 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(15)}
          >
            Author Website
          </button>
          <button
            className={`block py-2 px-4 w-full text-left cursor-pointer ${activeTab === 16 ? 'bg-[#00c0e4] text-white ' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleTabClick(16)}
          >
            Article Writing
          </button>
        </div>
      </div>
      <div className="w-3/4 xs:basis-[60%] bg-transparent items-center pl-32 py-24 lg:pl-16 xs:pl-5 sm:pl-5 xs:py-3 md:pl-10 md:py-14 text-[#1d1d1f]">
        {activeTab === 1 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Personal Marketing Assistants:</h3>
          <p>We offer dedicated marketing assistants to facilitate the promotion, management, and execution of comprehensive promotional campaigns for your book launch across diverse online and offline channels. Tailoring their services to meet your specific requirements they ensure optimal support for your success.</p>
          <div className='w-[40%] text-center grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 2 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Social Media Set-Up:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 3 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Creative and Appealing Bookmarks:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 4 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Digital Postcards:</h3>
          <p>We will provide Digital Postcards who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 5 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'> Business Cards:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 6 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Small and Attractive Posters:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 7 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Personal marketing assistants:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%]  xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 8 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Personal marketing assistants:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 9 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Personal marketing assistants:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 10 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Personal marketing assistants:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 11 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Marketing Consultation</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 12 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Amazon Kindle</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 13 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Apple Books</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 14 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Barnes and Noble Nook Edition</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 15 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Audio Book</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 16 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#40BEE2]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Author Website</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="javascript:$zopim.livechat.window.show()" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default VerticalNavTabs;
