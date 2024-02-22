import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import Mockup1 from '../../public/images/book-mockup/1.jpg'
import Mockup2 from '../../public/images/book-mockup/2.jpg'
import Mockup3 from '../../public/images/book-mockup/3.jpg'
import Mockup4 from '../../public/images/book-mockup/4.jpg'
import Mockup5 from '../../public/images/book-mockup/5.jpg'
import Mockup6 from '../../public/images/book-mockup/6.jpg'
import Mockup7 from '../../public/images/book-mockup/7.jpg'
import Mockup8 from '../../public/images/book-mockup/8.jpg'
import Mockup9 from '../../public/images/book-mockup/9.jpg'
import Mockup10 from '../../public/images/book-mockup/10.jpg'
import Mockup11 from '../../public/images/book-mockup/11.jpg'
import Mockup12 from '../../public/images/book-mockup/12.jpg'
import Logoss from '../../public/ahsan/logoss.png'
const YourComponent = () => {

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const additionalY = { val: 0 };
    let additionalYAnim;
    let offset = 0;

    const cols = gsap.utils.toArray(".col");

    cols.forEach((col, i) => {
      const images = col.childNodes;

      // DUPLICATE IMAGES FOR LOOP
      images.forEach((image) => {
        var clone = image.cloneNode(true);
        col.appendChild(clone);
      });

      // SET ANIMATION
      images.forEach((item) => {
        let columnHeight = item.parentElement.clientHeight;
        let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

        gsap.to(item, {
          y: direction + Number(columnHeight / 2),
          duration: 20,
          repeat: -1,
          ease: "none",
          modifiers: {
            y: gsap.utils.unitize((y) => {
              if (direction === "+=") {
                offset += additionalY.val;
                y = (parseFloat(y) - offset) % (columnHeight * 0.5);
              } else {
                offset += additionalY.val;
                y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
              }

              return y;
            },
            )
          },
        });
      });
    });

    const imagesScrollerTrigger = ScrollTrigger.create({
      trigger: ".section",
      start: "top 50%",
      end: "bottom 50%",
      onUpdate: function (self) {
        const velocity = self.getVelocity();
        if (velocity > 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 2000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
        if (velocity < 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 3000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
      },
    });
  }, []);
  return (
    <>
      <section className='section-container11 relative w-full overflow-hidden focus:scroll-auto '>
        <div className='w-full font-secondary bg-[#40BEE2]'>
          <div className='mr-container grid mr-xl:grid-cols-2 mr-lg:grid-cols-2 mr-lg:text-left text-center justify-center text-white md:py-[50px] xs:py-[30px] sm:py-[30px]'>
            <div className='items-center relative mr-xl:py-[150px] mr-lg:py-[150px]'>
              <span className='mr-lg:text-[45px] px-2 py-1 bg-black text-white mr-xs:text-center font-primary font-bold mr-md:text-[35px] mr-sm:text-[35px] mr-xs:text-[35px] leading-normal mb-3'>Don’t Hesitate To Contact Us!</span>
              <h3 className='text-[40px] xs:text-center font-primary font-bold xs:text-[30px] leading-normal mb-3'>Start Your Bestseller <br /> Journey—Publish with Us Today!"</h3>
              <p className='xs:!text-center m-auto md:px-10 mr-xl:px-0'>
                For personalized support or inquiries, our dedicated team is available to assist you during business hours. We warmly invite you to connect with us; your questions and needs are always our priority. Don't hesitate to reach out.
              </  p>
              <div className='mx-auto py-4'>
                <div className='flex gap-5 mr-xl:!justify-start md:!justify-center sm:!justify-center xs:!justify-center'>
                  <a href='tel:800-781-9093' className='bg-black text-white hover:bg-white hover:border-solid hover:border-[1px] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center py-2 px-6'>Get Started</a>
                  <a onClick={openLiveChat} href='#' className='bg-[#1d1d1f] text-white border-solid border-[#1d1d1f] border-[2px] hover:bg-white hover:text-[#000] hover:border-[2px] hover:border-white flex items-center justify-center py-2 px-6'>Live Chat</a>
                </div>
              </div>
            </div>
            <div className='relative section z-0 w-[50%] mr-xl:!block mr-lg:!block h-[100%] !hidden'>
              <div className="gallery z-0 overflow-hidden absolute lg:pr-20 sm:hidden" >
                <div className="col">
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup1} />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup2} />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup4} />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup4} />
                  </div>
                </div>
                <div className="col">
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup5} />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup6} />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup7} />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup8} />
                  </div>
                </div>
                <div className="col">
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup9} />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup10} />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup11} />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  );
};

export default YourComponent;
