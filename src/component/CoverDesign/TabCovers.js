import React, { useState } from 'react';
import Image from 'next/image';
const TabNavigation = ({ activeTab, setActiveTab }) => {



  return (
    <ul className="flex sm:flex-wrap xs:overflow-x-scroll xs:space-x-5 xs:m-0 max-w-7xl mx-auto justify-center items-center xs:justify-start xs:mx-0 " role="tablist">
      <li className="mr-2">
        <a
          className={`py-2 px-10 cursor-pointer ${activeTab === 's1' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[1px] border-[#777777] text-gray-700 focus:text-white'
            }`}
          onClick={() => setActiveTab('s1')}
          role="tab"
          aria-controls="s1"
          aria-selected={activeTab === 's1' ? 'true' : 'false'}
        >
          Dust&nbsp;jacket&nbsp;cover
        </a>
      </li>
      <li className="mr-2">
        <a
          className={`py-2 px-10 cursor-pointer ${activeTab === 's2' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[1px] border-[#777777] text-gray-700'
            }`}
          onClick={() => setActiveTab('s2')}
          role="tab"
          aria-controls="s2"
          aria-selected={activeTab === 's2' ? 'true' : 'false'}
        >
          Hardboard&nbsp;Cover
        </a>
      </li>
      <li className="mr-2">
        <a
          className={`py-2 px-10 cursor-pointer ${activeTab === 's3' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[1px] border-[#777777] text-gray-700'
            }`}
          onClick={() => setActiveTab('s3')}
          role="tab"
          aria-controls="s3"
          aria-selected={activeTab === 's3' ? 'true' : 'false'}
        >
          Paperback&nbsp;Cover
        </a>
      </li>
    </ul>

  );
};

const ParentComponent = () => {

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };


  const [activeTab, setActiveTab] = useState('s1');

  return (
    <div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />



      {/* Content for each tab */}
      {activeTab === 's1' && (
        <div className='container max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-14 sm:px-5'>
          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h3 className='font-semibold text-[40px] md:text-4xl font-primary sm:text-4xl'>Dust Jacket Cover</h3>
              <p>True to its name, a dust jacket, thoughtfully provided by a professional book writing agency, serves as a protective barrier, safeguarding the book’s cover from dust, spills, scuffs, and dirt. To enhance durability and stain resistance, a gloss or matte laminate is commonly applied to the dust jacket. This protective cover not only contributes to the sleek appearance of your book but also acts as an attractive feature, drawing in your readers. Furthermore, we ensure prompt delivery of your work.</p>
              <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <button className='bg-[#00C0E4] py-1 text-white hover:bg-[#fff] hover:text-[#00c0e4] hover:border-[1px] hover:border-solid hover:border-[#00c0e4]'>Get Started</button>
                <button onClick={openLiveChat} className='bg-transparent py-1 border-solid border-[1px] border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white'>Live Chat</button>
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/dust-cover.png' className='mx-auto' width={500} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's2' && (
        <div className='container max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-14 sm:px-5'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>

              <h3 className='font-semibold text-[40px] md:text-4xl font-primary'>Hardboard Cover</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <button className='bg-[#00C0E4] py-1 text-white hover:bg-[#fff] hover:text-[#00c0e4] hover:border-[1px] hover:border-solid hover:border-[#00c0e4]'>Get Started</button>
                <button onClick={openLiveChat} className='bg-transparent py-1 border-solid border-[1px] border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white'>Live Chat</button>
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/hardboard-cover.png' className='mx-auto' width={300} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's3' && (
        <div className='container max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-14 sm:px-5'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>

              <h3 className='font-semibold text-[40px] md:text-4xl font-primary'>Paperback Cover</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <button className='bg-[#00C0E4] py-1 text-white hover:bg-[#fff] hover:text-[#00c0e4] hover:border-[1px] hover:border-solid hover:border-[#00c0e4]'>Get Started</button>
                <button onClick={openLiveChat} className='bg-transparent py-1 border-solid border-[1px] border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white'>Live Chat</button>
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/paper-book-cover.png' className='mx-auto' width={400} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ParentComponent;
