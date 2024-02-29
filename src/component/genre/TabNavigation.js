import React, { useState } from 'react';
import Image from 'next/image';
import { MRCTAGroup } from '..';
const TabNavigation = ({ activeTab, setActiveTab }) => {

  return (
    <div className='tab-pillss'>
      <ul className="flex max-w-7xl lg:max-w-6xl gap-x-6 lg:gap-x-3 lg:pt-5 md:gap-2 sm:py-5 sm:gap-x-1 xs:gap-x-1 mx-auto justify-center sm:justify-start sm:mx-0 sm:overflow-x-scroll xs:justify-start xs:mx-0 xs:overflow-x-scroll xs:py-5" role="tablist">
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's1' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a] focus:text-white'
              }`}
            onClick={() => setActiveTab('s1')}
            role="tab"
            aria-controls="s1"
            aria-selected={activeTab === 's1' ? 'true' : 'false'}
          >
            Fiction
          </a>
        </li>
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's2' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#707070] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s2')}
            role="tab"
            aria-controls="s2"
            aria-selected={activeTab === 's2' ? 'true' : 'false'}
          >
            Non&nbsp;Fiction
          </a>
        </li>
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's3' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s3')}
            role="tab"
            aria-controls="s3"
            aria-selected={activeTab === 's3' ? 'true' : 'false'}
          >
            Biography
          </a>
        </li>
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's4' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s4')}
            role="tab"
            aria-controls="s4"
            aria-selected={activeTab === 's4' ? 'true' : 'false'}
          >
            Informative
          </a>
        </li>
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's5' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s5')}
            role="tab"
            aria-controls="s5"
            aria-selected={activeTab === 's5' ? 'true' : 'false'}
          >
            Autobiography
          </a>
        </li>
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's6' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s6')}
            role="tab"
            aria-controls="s6"
            aria-selected={activeTab === 's6' ? 'true' : 'false'}
          >
            Memoir
          </a>
        </li>
        <li>
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's7' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s7')}
            role="tab"
            aria-controls="s7"
            aria-selected={activeTab === 's7' ? 'true' : 'false'}
          >
            Children&nbsp;Book
          </a>
        </li>
      </ul>
    </div>

  );
};

const ParentComponent = () => {
  const [activeTab, setActiveTab] = useState('s1');


  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };


  return (
    <div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />



      {/* Content for each tab */}
      {activeTab === 's1' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>
          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#40BEE2] font-primary'>Fiction</h6>
              <h3 className='font-bold font-primary text-[40px] md:text-4xl sm:text-3xl leading-tight xs:text-3xl'>Top-Ranked Fiction Writing Services</h3>
              <p>For this genre of compelling stories, engaging character dialogue, and emotional story beats, getting a professional story writer becomes a necessity. Our writers excel at bringing your story to life through expert storytelling elements, including careful word-building, persuasive character motivations, and intense and unpredictable plot development. This proficiency frequently results in our clients achieving best-selling author status.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/shalf-book.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's2' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#40BEE2] font-primary'> Content for Non Fiction</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Top-ranked Non fiction writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a Non fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/bearded-author-glasses-reading-book.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's3' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#40BEE2] font-primary'> Content for Biography</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Top-ranked Biography writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a Biography ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/article-banner.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's4' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 md:gap-x-5 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#40BEE2] font-primary'>Content for Informative</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Top-ranked Informative writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a Informative ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/blog-banner.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's5' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#40BEE2] font-primary'>Content for Autobiography</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Top-ranked Autobiography writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a Autobiography ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/book-cover-table-banner.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's6' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#40BEE2] font-primary'>Content for Memoir</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Top-ranked Memoir writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a Memoir ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/bring-book.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's7' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#40BEE2] font-primary'>Content for Children Book</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Top-ranked Children Book writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a Children Book ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/contactformbg1.png' width={600} height={600} alt='Tablist Images' className='' />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
