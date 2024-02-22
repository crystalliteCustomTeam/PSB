import React from 'react'
import { MRCTAGroup } from '..'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PublishWithUs = [
    {
        steps: "Step 01",
        heading: "Professionalism",
        desc: "We uphold the highest standards of professionalism, ensuring that your book is bound with quality. Our commitment to excellence is non-negotiable."
    },
    {
        steps: "Step 02",
        heading: "Experience",
        desc: "With years of experience in the publishing industry, we possess a profound understanding of what it takes to make a book successful. We’ve worked with authors from diverse genres, and our portfolio speaks for itself."
    },
    {
        steps: "Step 03",
        heading: "Customization",
        desc: "We understand that every author and book is unique. That’s why our services are fully customizable and tailored to your specific needs and goals. Your vision is at the forefront of everything we do, from book writing to book design services."
    },
    {
        steps: "Step 04",
        heading: "Affordability",
        desc: "We believe that publishing should be accessible to all. Our book services pricing is competitive, and we offer flexible payment options to accommodate your budget."
    },
    {
        steps: "Step 05",
        heading: "Confidentiality",
        desc: "We take your privacy seriously and maintain strict confidentiality throughout the entire process. Your work is safe in our hands."
    },
    {
        steps: "Step 06",
        heading: "Submitting it for review",
        desc: "This is the final stage of the process, ensuring that all tasks are completed and your design is perfected. Our team affirms your success."
    },
]

const ProcessWorkMode = () => {
    var settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3, // Display 2 columns at this breakpoint
                    slidesToScroll: 3, // Scroll 2 columns at this breakpoint
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Display 1 column at this breakpoint
                    slidesToScroll: 2, // Scroll 1 column at this breakpoint
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1, // Display 1 column at this breakpoint
                    slidesToScroll: 1, // Scroll 1 column at this breakpoint
                }
            }
        ]
    };

    // Initialize state for screen size
    const [isLargeScreen, setIsLargeScreen] = React.useState(true); // Default to true for larger screens

    // Function to update the screen size state
    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 767); // Customize the breakpoint as needed
    };

    // Add an event listener to update the screen size state on resize
    React.useEffect(() => {
        updateScreenSize(); // Initial call

        const handleResize = () => {
            updateScreenSize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            // Clean up the event listener
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <section className="our-process">
                <div className="mr-container !py-[80px] mr-sm:py-10 mr-xs:py-10 text-[#1d1d1f]">
                    <div className="text-center mb-10 justify-center">

                        <h2 className='text-[45px] font-primary font-bold leading-normal mb-5 mr-sm:text-4xl mr-xs:text-3xl mr-xs:my-2 '>
                            Why Publish With Us?
                        </h2>
                        <p className='w-[70%] mx-auto md:w-[90%] sm:w-[95%] xs:w-[100%]'>
                            Choosing us for your publishing needs means partnering with a team deeply committed to bringing your literary vision to life. Our dedicated approach ensures your book not only reaches but captivates a global audience. Here's why you should publish with us:
                        </p>
                    </div>
                    <div className=''>
                        <div className=' grid mr-xl:grid-cols-3 gap-4  mr-md:grid-cols-2 mr-sm:grid-cols-2 mr-xs:grid-cols-1 mb-5 '>
                            
                                {PublishWithUs?.map((e, i) => (
                                    <div key={i} className="hover:-translate-y-1 hover:scale-105 duration-300 h-[250px]">
                                        <div className="box rounded-2xl bg-[#f2f2f2] text-left text-[#1d1d1f] hover:text-white h-[100%] p-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                            <h5 className='text-[#40bee2] hover:text-[#00C0E4] text-xl font-semibold mt-5'>{e.steps}</h5>
                                            <p className='text-[20px] text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                                {e.heading}
                                                <span className='block font-normal text-[13px] leading-5 mt-2'>
                                                    {e.desc}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                ))}

                        </div>
                        <MRCTAGroup
                            classes='justify-center'
                        />
                    </div>
                </div>
            </section>
            <section>

            </section>
        </>


    )
}

export default ProcessWorkMode
