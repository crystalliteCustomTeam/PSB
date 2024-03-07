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
      name: "Tami Pierce",
      title: "CTO, Cybertech Solutions",
      quote:
        "“I hired Best Selling Publisher for ghostwriting services, and I couldn't be happier with the results! They perfectly captured my voice and brought my ideas to life in a way I never could have on my own. Highly recommend their talented team!”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Lamar Wright",
      title: "CTO, Cybertech Solutions",
      quote:
        "“Best Selling Publisher’s SEO writing service has significantly boosted our online visibility. Their expertise in keyword optimization and engaging content creation has helped us climb the search engine rankings. We’ve seen a noticeable increase in traffic and leads since partnering with them!”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Lucas Garcia",
      title: "CTO, Cybertech Solutions",
      quote:
        "“I’ve used Best Selling Publisher for article writing multiple times, and each time they’ve delivered top-notch content that exceeds my expectations. Their writers are skilled at researching diverse topics and presenting information clearly and engagingly. A fantastic choice for anyone in need of quality articles!”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Darnell Patterson",
      title: "CTO, Cybertech Solutions",
      quote:
        "“Best Selling Publisher is my go-to for magazine writing projects. Their writers have a knack for crafting captivating stories and articles that resonate with our readers. Their attention to detail and commitment to meeting deadlines make them a pleasure to work with. Highly recommend!”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Ernest Cortez",
      title: "CTO, Cybertech Solutions",
      quote:
        "“When it comes to web copywriting, Best Selling Publisher is second to none. They understand the importance of compelling copy in driving conversions, and their expertise shines through in every project they undertake. Our website has never looked better thanks to their exceptional work!”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Justin Nunez",
      title: "CTO, Cybertech Solutions",
      quote:
        "“Best Selling Publisher helped us craft a compelling press release that generated significant media attention for our latest product launch. Their writers have a talent for crafting attention-grabbing headlines and persuasive copy that gets results. We’re thrilled with the exposure their press release garnered for our brand!”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Doug Weaver",
      title: "CTO, Cybertech Solutions",
      quote:
        "“I recently engaged Best Selling Publisher for script writing services, and I couldn’t be happier with the outcome. Their writers have a gift for storytelling and dialogue that brings scripts to life on screen. Working with them was a seamless and enjoyable experience from start to finish. Highly recommend their services for anyone in need of professional scriptwriting!”",
    },
  ];

  return (
    <section className="mr-xl:py-[100px] mr-lg:!py-[80px] mr-md:!py-[60px] !py-[40px]">
      <div className="mr-container">
        <div>
          <div className="text-center">
            <h6 className="font-semibold text-[#40BEE2] font-primary text-[30px] mb-3">
            Enough from Us
            </h6>
            <h2 className="mr-xl:text-[45px] font-bold mb-5 font-primary">
            See What Our Clients Have to Say
            </h2>
            <p className="text-lg mb-3 mx-auto text-[16px] xs:text-[15px]">
            We can go on and on about our services, but if you seek further credibility, then see what our clients have to say about us:
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
                        loading="lazy"
                        priority
                      />
                      <Image quality={95}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                      priority/>
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
