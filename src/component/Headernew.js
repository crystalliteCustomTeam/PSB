import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import TOPHEADER1 from './topHeader1'


import Logo from "media/assets/images/logo.png"
import TelIcon from "media/assets/sikander/telicon.png"

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true); // Set to false initially

  // Function to toggle submenu visibility
  const toggleSubMenu = () => {
    setShowSubMenu((prevShowSubMenu) => !prevShowSubMenu);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };
  return (

    <>
      {/* <TOPHEADER1 /> */}
      <div className='font-secondary px-0 sm:!px-2 xs:!px-2 pt-4'>
        <header className="bg-white relative z-30">
          <div className="mr-container">
            <div className="items-center justify-between gap-x-4 flex grid-cols-2 grid-rows-1">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold text-indigo-500">
                  <Image quality={95} src={Logo} alt=" Best Selling Publisher Ghostwriting logo" width={180} height={50} />
                </Link>
              </div>
              <nav className="flex space-x-4 text-[16px]   text-[#1d1d1f] font-medium">
                <ul id="menu" className={`${menuOpen ? 'transform translate-x-0 md:hidden xs:hidden sm:hidden' : 'flex transition-transform duration-500  ease-in-out translate-x-0 md:translate-x-0 right-0 xs:text-white sm:text-white md:text-white md:bg-[#00c0e4] sm:bg-[#00c0e4] md:z-50 sm:z-50 md:text-[18px] xs:text-[18px] sm:text-[18px] md:block xs:block sm:block xs:fixed sm:fixed md:fixed xs:top-0 sm:top-0 md:top-0 sm:py-16 md:py-16 md:w-[70%] md:h-full xs:w-[320px] xs:h-full sm:w-[300px] sm:h-full xs:right-0 md:right-0 xs:px-10 leading-9 xs:!p-5 xs:bg-[#2d2d2d] xs:z-50 text-[#1d1d1f] '} flex 2xl:gap-x-5 xl:gap-x-5 lg:gap-x-3 gap-x-3 text-[#1d1d1f] cursor-default overflow-x-hidden overflow-y-scroll `}>
                  <li className="xl:hidden lg:hidden sm:z-90 xs:z-90 fixed top-4 right-6">
                    <Link href="javascript:void(0)" className="text-right text-white text-4xl" onClick={toggleMenu}>
                      &times;
                    </Link>
                  </li>
                  {[
                    ['Home', '/'],
                    ['About', '/about-us'],
                  ].map(([title, url]) => (
                    <li className='xs:mb-3'>
                      <Link href={url} className={`list text-black xs:!text-white text-[15px] xs:text-[20px] font-[300]`}>{title}</Link>
                    </li>
                  ))}
                  <li className="relative xs:mb-3 group py-0 hover:text-[#00C0E4] text-[15px] xs:text-[20px] z-50">
                    <button className="hover:opacity-50 cursor-default text-black  xs:text-white font-[300]" aria-haspopup="true">Writing Services
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 -mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" ></path>
                      </svg>
                    </button>
                    <div className="absolute lg:-left-48 top-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 group-hover:transform z-50 min-w-[560px] xs:min-w-[350px] sm:min-w-[350px]">
                      <div className="relative left-[-30px] md:left-[20px] top-4 p-6 bg-white rounded-xl shadow-xl w-full md:max-w-[400px] xs:max-w-[300px] sm:max-w-[300px] transform xs:mb-10" >
                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out xs:left-[-180px] rounded-sm"></div>
                        <div className="relative z-50">
                          <div className="grid grid-cols-2 gap-6 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
                            <div>
                              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]" >
                                The Suite
                              </p>
                              <ul className="mt-3 text-[15px] xs:text-[20px]">

                                <li>
                                  <Link href="/ghostwriting" className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">

                                    <span>
                                      <Image quality={95} className='filter brightness-50 mr-2' src="/assets/images/newimg/ghostwriting.png" width={40} height={40} alt='ghost writing' />
                                    </span>
                                    <span>
                                      Ghostwriting
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/seo-content-writing-services"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">                   <span>
                                      <Image quality={95} className='filter brightness-50 mr-2' src="/assets/images/newimg/SEO-Writing.png" width={40} height={40} alt='SEO writing' />
                                    </span>
                                    <span>
                                      SEO Writing
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/article-writing-services"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                    <span>
                                      <Image quality={95} className='filter brightness-50 mr-2' src="/assets/images/newimg/Article-Writing.png" width={40} height={40} alt='Article writing' />
                                    </span>
                                    <span>
                                      Article Writing
                                    </span>

                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/magazine-writing"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                    <span>
                                      <Image quality={95} className='filter brightness-50 mr-2' src="/assets/images/newimg/magazine-writing.png" width={40} height={40} alt='magazine writing' />
                                    </span>
                                    <span>
                                      Magazine Writing
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                Extensions
                              </p>
                              <ul className="mt-4 text-[15px] xs:text-[20px]">
                                <li>
                                  <Link
                                    href="/web-copywriting-services"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                    <span>
                                      <Image quality={95} className='filter brightness-50 mr-2' src="/assets/images/newimg/Web-Copy-Writing.png" width={40} height={40} alt='Web copy writing' />
                                    </span>
                                    <span>
                                      Web Copy Writing

                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/press-release-writing-services"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                    <span>
                                      <Image quality={95} className='filter brightness-50 mr-2' src="/assets/images/newimg/Press-Release.png" width={40} height={40} alt='press release' />
                                    </span>
                                    <span>
                                      Press Release

                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/script-writing-services"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                    <span>
                                      <Image quality={95} className='filter brightness-50 mr-2' src="/assets/images/newimg/Script-Writing.png" width={40} height={40} alt='script writing' />
                                    </span>
                                    <span>
                                      Script Writing
                                      {/* <p className="text-gray-500 font-normal">
                                      Generate content for socials
                                    </p> */}
                                    </span>
                                  </Link>
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {[
                    ['Genre', '/genre'],
                    ['Marketing', '/book-marketing'],
                    ['Publication', '/book-publishing'],
                    ['Printing', '/book-printing'],
                    ['Cover Design', '/book-cover-design'],
                    ['Editing', '/book-editing'],
                    ['Contact Us', '/contact-us'],
                  ].map(([title, url]) => (
                    <li className='xs:mb-3'>
                      <Link href={url} className={`list text-black xs:!text-white text-[15px] xs:text-[20px] font-[300]`}>{title}</Link>
                    </li>
                  ))}
                  <li className='xs:mb-3'>
                    <Link href="tel:800-781-9093" className={`text-[15px] xs:text-[20px] font-secondary text-[#40BEE2] flex items-center gap-x-3 font-[500]`}>
                      <Image src={TelIcon} width={15} height={15} alt='Amazon Book Publishing' />
                      <span className='border-l border-[#40BEE2] pl-[10px]'>800-781-9093</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center 2xl:hidden xl:hidden lg:hidden md:block xs:block sm:block z:-1">
                <button
                  className={`text-black text-4xl font-bold opacity-70 hover:opacity-100 duration-300 ${menuOpen ? '&times;' : ''
                    }`}
                  onClick={toggleMenu}
                >
                  &#9776;
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
