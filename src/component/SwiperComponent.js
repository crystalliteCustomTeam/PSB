// import function to register Swiper custom elements
import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
// register Swiper custom elements

const TestimonialsSlider = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();
    const params = {
      slidesPerView: 3,
      injectStyles: [
        `.swiper-pagination-bullet {
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #00c0e4;
        }
        .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
          bottom: var(--swiper-pagination-bottom, -6px);
      }
      `,
      ],
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1340: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperElRef.current, params);

    swiperElRef.current.initialize();
  }, []);
  const slides = [
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/trust.png",
      name: "- Isaac Freeman",
      title: "CTO, Cybertech Solutions",
      quote:
        "I was amazed by the swift and efficient process at Best Selling Publisher. Their team’s expertise in Amazon book publishing services made a significant difference in my book's online presence. A five-star service all around",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Matthew Feller",
      title: "CTO, Cybertech Solutions",
      quote:
        "From manuscript to masterpiece, the journey was seamless with Book Selling Publisher. Their attention to detail and commitment to quality is unmatched. My book’s success speaks volumes of their dedication.",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "- Casey F.",
      title: "CTO, Cybertech Solutions",
      quote:
        "The professionalism and personalized support I received from Book Selling Publisher were exceptional. They turned the daunting task of publishing into a rewarding experience. My book is now a bestseller, thanks to their expert marketing strategies",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Noah Howard",
      title: "CTO, Cybertech Solutions",
      quote:
        "As a first-time author, the process of book publishing felt like a daunting maze with no clear path. That's when I reached out to The Book Selling Publishers company, and I must say they have offered me the right solution. They answered my questions swiftly, took care of every problem, and kept me informed all along the publishing process.",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Gabriel M.",
      title: "CTO, Cybertech Solutions",
      quote:
        "Working with this book writing company was a game-changer for me. Their expertise is unmatched!",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Cormac M.",
      title: "CTO, Cybertech Solutions",
      quote:
        "I can't believe the incredible quality of the book they wrote for me. It exceeded all my expectations!",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "J.D.Salinger.",
      title: "CTO, Cybertech Solutions",
      quote:
        "I can't believe the incredible quality of the book they wrote for me. It exceeded all my expectations!",
    },
  ];

  return (
    <section className="mr-xl:py-[100px] mr-lg:!py-[80px] mr-md:!py-[60px] !py-[40px]">
      <div className="mr-container">
        <div>
          <div className="text-center">
            <h6 className="font-semibold text-[#40BEE2] font-primary text-[30px] mb-3">
              Hear The Words Of
            </h6>
            <h2 className="mr-xl:text-[45px] font-bold mb-5 font-primary">
              Appreciation from Our Clients
            </h2>
            <p className="text-lg mb-3 mx-auto text-[16px] xs:text-[15px]">
              The appreciation from our clients is what keeps us going. Have a
              sneak peek of <br className="mr-lg:block hidden" /> what our satisfied clients have to say about
              our work.
            </p>

          </div>
        </div>
        <swiper-container
          init={false}
          ref={swiperElRef}
          centered-slides="true"
          autoplay-delay="3000"
          loop="true"
          pagination="true"
          pagination-clickable="true"
          autoHeight="true"
        >
          {slides &&
            slides.map((testimonial, index) => (
              <swiper-slide key={index}>
                <div>
                  <div className="w-[90%] m-auto pt-10">
                    <div className="card testimonialscard">
                      <Image quality={95}
                        src="../../images/newimg/trust.png"
                        width={80}
                        height={80}
                        className="mb-2"
                      />
                      <Image quality={95}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                      />
                      <div className="header">
                        <h1 className="name">{testimonial.name}</h1>
                      </div>
                      <div className="quote-container">
                        <p className="quote text-[9px]">{testimonial.quote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
