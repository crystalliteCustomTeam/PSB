import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from 'next/image';

const YourComponent = () => {

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
      <section className='section-container11 relative w-full overflow-hidden focus:scroll-auto'>
        <div className='w-full font-secondary bg-[#40BEE2]'>
          <div className='container max-w-7xl lg:max-w-6xl grid grid-cols-2 md:grid-cols-1 grid-rows-1 md:text-center text-left justify-center text-white sm:grid-cols-1 sm:px-5 xs:grid-cols-1 xs:px-2'>
            <div className='py-56 md:py-16 md:px-10 md:text-center sm:text-center items-center relative sm:py-16 xs:py-16 pr-15 '>
              <h3 className='text-[50px] xs:text-center font-primary font-bold xs:text-[30px] leading-normal mb-3'>
                Don’t Hesitate To <br /> Contact Us!
                We Are <br /> <span className='text-[50px] inline-block bg-black text-white xs:text-center font-primary font-bold xs:text-[30px] leading-normal mb-3'>Working Round The Clock</span></h3>
              <p className='xs:text-center w-[90%] sm:mx-auto sm:w-[80%] xs:w-[100%]'>
                If you need to contact us at any time of the day, don’t hesitate to reach out to our representatives.
              </  p>
              <div className='mx-auto py-4'>
                <div className='w-[60%] md:mx-auto gap-x-5 grid grid-cols-2 grid-rows-1 py-5 relative sm:mx-auto sm:w-[80%] xs:w-[100%]'>
                  <a href='tel:800-781-9093' className='bg-black py-1 text-white hover:bg-white hover:border-solid hover:border-[1px] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center h-[40px]'>Get Started</a>
                  <a href='javascript:$zopim.livechat.window.show()' className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[2px] hover:bg-white hover:text-[#000] hover:border-[2px] hover:border-white flex items-center justify-center h-[40px]'>Live Chat</a>
                </div>
              </div>
            </div>
            <div className='relative section z-0 w-[50%] lg:w-[40%] h-[100%] md:hidden sm:hidden xs:hidden'>
              <div className="gallery z-0 overflow-hidden absolute lg:pr-20 sm:hidden" >
                <div className="col">
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/06.png' />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/03.png' />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/02.png' />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/11.png' />
                  </div>
                </div>
                <div className="col">
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/12.png' />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/08.png' />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/07.png' />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/10.png' />
                  </div>
                </div>
                <div className="col">
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/04.png' />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/05.png' />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/09.png' />
                  </div>
                  <div className="image">
                    <Image quality={95} width={200} height={300} alt="Call of action" className='' src='/assets/images/newimg/01.png' />
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
