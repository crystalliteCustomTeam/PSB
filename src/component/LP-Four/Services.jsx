import { AutoPlaySlider } from ".";
import { MRCTA } from "..";

const Services = () => {
    return (
        <section>
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-xl:w-[65%] mr-lg:w-[75%] mr-md:w-[90%] w-full mx-auto">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-tight mb-3">Types Of Publishing Services We Offer</h2>
                        <p className="mr-md:text-base text-sm leading-normal font-normal">Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective</p>
                    </div>
                    <AutoPlaySlider wrapperClasses="mr-md:mt-[50px] mt-[00px] __publishingService">
                        {
                            [
                                ["Standard Publishing", "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book"],
                                ["Standard Publishing", "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book"],
                                ["Standard Publishing", "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book"],
                                ["Standard Publishing", "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book"],
                                ["Standard Publishing", "Take Your Readers On A Thrilling Journey With Our Action And Adventure Book Marketing Services. Our Team Will Create A Custom Marketing Plan That Reaches Your Target Audience And Keeps Them Engaged From Start To Finish. Take Your Readers On A Thrilling Journey With Our Action And Adventure Book"],
                            ].map(([title, desc], i) => (
                                <div key={i} className={`grow-0 shrink-0 basis-[85%] mr-xl:basis-[30%] mr-2xl:basis-[30%] min-w-0 pl-4 `}>
                                    <div className="__card relative mt-24 mb-5 text-center shadow-[0_0_15px_rgba(0,_0,_0,_0.2)] bg-white rounded-xl mr-md:px-[25px] px-[20px] py-[40px] inline-flex flex-col items-center justify-center">
                                        <h4 className="text-[20px] leading-tight font-medium mr-md:mt-8 mb-4" dangerouslySetInnerHTML={{ __html: title }} />
                                        <p className="text-base font-normal leading-normal">{desc}</p>
                                        <MRCTA text="Let's Talk" classes="mt-5 hover:bg-black" handle="onclick='parent.LC_API.open_chat_window();return false;'" animation="__animatedPing" />
                                    </div>
                                </div>
                            ))
                        }
                    </AutoPlaySlider>
                </div>
            </div>
        </section>
    )
}
export default Services;