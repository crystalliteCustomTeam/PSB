import React, { useState } from 'react';
import Image from 'next/image';
import { MRCTAGroup } from '..';

const Tablist = [
  ["Dust jacket cover", 's1'],
  ["Hardboard Cover", 's2'],
  ["Paperback Cover", 's3'],
]

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <ul className="flex sm:flex-wrap xs:overflow-x-scroll xs:space-x-5 xs:m-0 mx-auto justify-center items-center xs:justify-start xs:mx-0 mr-md:mb-10" role="tablist">
      {Tablist?.map(([text, id]) => (
        <li className="mr-2">
          <a
            key={id}
            className={`py-2 px-10 cursor-pointer ${activeTab === id ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[1px] border-[#777777] text-gray-700 focus:text-white'
              }`}
            onClick={() => setActiveTab(id)}
            role="tab"
            aria-controls={id}
            aria-selected={activeTab === id ? 'true' : 'false'}
          >
            {text}
          </a>
        </li>
      ))}
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


  const [activeTab, setActiveTab] = React.useState('s1');

  return (
    <div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 's1' && (
        <div className='mr-container text-[#1d1d1f] pt-20 sm:px-5'>
          <div className='grid mr-md:grid-cols-2 grid-rows-1 grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h3 className='font-semibold text-[40px] md:text-4xl font-primary sm:text-4xl'>Dust Jacket Cover</h3>
              <p>True to its name, a dust jacket, thoughtfully provided by a professional book writing agency, serves as a protective barrier, safeguarding the book’s cover from dust, spills, scuffs, and dirt. To enhance durability and stain resistance, a gloss or matte laminate is commonly applied to the dust jacket. This protective cover not only contributes to the sleek appearance of your book but also acts as an attractive feature, drawing in your readers. Furthermore, we ensure prompt delivery of your work.</p>
              <MRCTAGroup />
            </div>
            <div>
              <Image quality={95} src='/imageAR/cover-design3.png' className='img-fluid block m-auto' width={400} height={400} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's2' && (
        <div className='mr-container text-[#1d1d1f] pt-20 sm:px-5'>
          <div className='grid mr-md:grid-cols-2 grid-rows-1 grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>

              <h3 className='font-semibold text-[40px] md:text-4xl font-primary'>Hardboard Cover</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <MRCTAGroup />
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/hardboard-cover.png' className='mx-auto' width={400} height={400} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's3' && (
        <div className='mr-container text-[#1d1d1f] pt-20 sm:px-5'>

          <div className='grid mr-md:grid-cols-2 grid-rows-1 grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>

              <h3 className='font-semibold text-[40px] md:text-4xl font-primary'>Paperback Cover</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <MRCTAGroup />
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
