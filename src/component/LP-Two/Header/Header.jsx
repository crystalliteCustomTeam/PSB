import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "media/assets/images/logo.png"
import TelIcon from "media/assets/sikander/telicon.png"
import SeoWriting from "media/assets/images/newimg/SEO-Writing.png"
import ArticleWriting from "media/assets/images/newimg/Article-Writing.png"
import MagazineWriting from "media/assets/images/newimg/magazine-writing.png"
import WebCopyWriting from "media/assets/images/newimg/Web-Copy-Writing.png"
import PressRelease from "media/assets/images/newimg/Press-Release.png"
import ScriptWriting from "media/assets/images/newimg/Script-Writing.png"
const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true); // Set to false initially
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
                  <Image quality={95} src={Logo} alt=" Best Selling Publisher Ghostwriting logo" width={180} height={50} priority />
                </Link>
              </div>
              <nav className="flex space-x-4 text-[16px] text-[#1d1d1f] font-medium">
                <ul id="menu" className={`${menuOpen ? 'transform translate-x-0 mr-2xl:!flex mr-xl:!flex mr-lg:!hidden md:hidden xs:hidden sm:hidden' : 'flex items-center transition-transform duration-500  ease-in-out translate-x-0 md:translate-x-0 right-0 xs:text-white sm:text-white md:text-white mr-lg:bg-[#2d2d2d] md:bg-[#2d2d2d] sm:bg-[#2d2d2d] mr-lg:!z-50 md:z-50 sm:z-50 md:text-[18px] xs:text-[18px] sm:text-[18px] mr-2xl:!hidden mr-xl:!hidden mr-lg:!block md:block xs:block sm:block xs:fixed sm:fixed md:fixed mr-lg:!fixed xs:top-0 sm:top-0 md:top-0 mr-lg:top-0 sm:py-16 md:py-16 mr-lg:!py-16 mr-lg:!px-10 md:px-10 sm:px-10 mr-2xl:!w-full mr-xl:!w-full mr-lg:!w-[70%] md:w-[70%] mr-lg:!h-full md:h-full xs:w-[320px] xs:h-full sm:w-[300px] sm:h-full xs:right-0 md:right-0 mr-lg:right-0 xs:px-10 leading-9 xs:!p-5 xs:bg-[#2d2d2d] xs:z-50 text-[#1d1d1f] '} flex items-center 2xl:gap-x-5 xl:gap-x-5 lg:gap-x-4 gap-x-3 text-[#1d1d1f] cursor-default overflow-visible sm:!overflow-hidden xs:!overflow-hidden sm:!overflow-y-scroll xs:!overflow-y-scroll `}>
                  <li className="xl:hidden lg:hidden mr-2xl:!hidden mr-xl:!hidden mr-lg:!block sm:z-90 xs:z-90 fixed top-4 right-6">
                    <Link href="javascript:void(0)" className="text-right mr-2xl:!text-black mr-xl:!text-black  mr-lg:!text-white text-white text-4xl" onClick={toggleMenu}>
                      &times;
                    </Link>
                  </li>
                  {[
                    ['Home', '/'],
                    ['About', '/about-us'],
                    ['Writing Services', '/'],
                  ].map(([title, url]) => (
                    <li className='mr-lg:!mb-4 md:mb-3 sm:mb-3 xs:mb-3'>
                      <Link href={url} className={`list mr-2xl:!text-black mr-xl:!text-black  mr-lg:!text-white md:!text-white sm:!text-white text-black xs:!text-white mr-2xl:text-[15px] mr-xl:text-[15px] mr-lg:text-xl mr-md:text-xl mr-sm:text-xl xs:text-[20px] font-[400]`}>{title}</Link>
                    </li>
                  ))}
                  {[
                    ['Genre', '/genre'],
                    ['Marketing', '/book-marketing'],
                    ['Publication', '/publication'],
                    ['Printing', '/book-printing'],
                    ['Cover Design', '/book-cover-design']
                  ].map(([title, url]) => (
                    <li className='mr-lg:!mb-4 md:mb-3 sm:mb-3 xs:mb-3'>
                      <Link href={url} className={`list mr-2xl:!text-black mr-xl:!text-black  mr-lg:!text-white md:!text-white sm:!text-white text-black xs:!text-white mr-2xl:text-[15px] mr-xl:text-[15px] mr-lg:text-xl mr-md:text-xl mr-sm:text-xl xs:text-[20px] font-[400]`}>{title}</Link>
                    </li>
                  ))}
                  <li className='mr-lg:!mb-4 md:mb-3 sm:mb-3 xs:mb-3 block sm:hidden xs:hidden'>
                    <Link href="tel:800-781-9093" className={`text-[15px] transition-all ease-in-out duration-300 group xs:text-[20px] font-secondary border-2 border-[#40BEE2] bg-[#40BEE2] py-1 px-2 text-[#40BEE2] flex items-center gap-x-3 font-[500] hover:bg-transparent `}>
                      <Image src={TelIcon} width={15} height={15} alt='Amazon Book Publishing' className='transition-all ease-in-out duration-300 brightness-0 invert group-hover:brightness-100 group-hover:invert-0' priority />
                      <span className=' text-white group-hover:!text-black'>800-781-9093</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center mr-2xl:hidden mr-xl:hidden mr-lg:block md:block xs:block sm:block z:-1">
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

export default Header;