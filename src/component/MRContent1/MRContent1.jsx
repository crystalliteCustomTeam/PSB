import { MRCTA } from "@/component"
import Image from "next/image"

const MRContent1 = ({
    subTitle,
    title,
    desc,
    img1,
    img2,
    listTitle,
    listTitleClasses = " ",
    listClasses = "grid grid-cols-2 gap-3",
    classes = " ",
    list,
    theme = "light",
    cta = true,
    textTheme = "text-[#000000]",
    direction = " ",
    listing = true,
    listBorder = " ",
    ctaText
}) => {
    return (
        <section>
            <div className={` ${classes} py-[50px] mr-lg:py-[70px] bg-cover bg-center`}>
                <div className="mr-container">
                    <div className={`${img1 ? "" : "flex gap-5 items-center"} ${direction}`}>
                        <div className={`${img1 ? "" : "basis-1/2"}`}>
                            <div className={`${img1 ? "flex items-center gap-5" : ""} ${direction}`}>
                                <div className="basis-1/2">
                                    {subTitle && (<span className="text-[18px] mr-lg:text-[25px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">
                                        {subTitle}
                                    </span>)}
                                    {title && (<h2 className={`text-[26px] mr-md:text-[30px] mr-lg:text-[35px] mr-2xl:text-[40px] block leading-tight font-bold font-sans ${textTheme}  mb-3`} dangerouslySetInnerHTML={{ __html: title }} />)}
                                    {desc && (<p className={`text-[14px] mr-lg:text-[16px] block leading-[26px] font-normal font-sans ${textTheme}`} dangerouslySetInnerHTML={{ __html: desc }} />)}
                                    {(!img1 || listing) && (
                                        listTitle &&
                                        (<h3 className={`text-[16px] mr-lg:text-[20px] block leading-tight font-semibold font-sans ${textTheme} mt-3 ${listTitleClasses}`} dangerouslySetInnerHTML={{ __html: listTitle }} />)
                                    )}
                                    {(!img1 || listing) && (
                                        list &&
                                        (<ul className={`mt-3 ${listClasses} list-image-[url(../../public/listIcon.png)] list-inside `}>
                                            {
                                                list?.map((e, i) => (
                                                    <li key={i} className={`text-[14px] leading-[26px] font-semibold font-sans ${textTheme} ${listBorder}`} dangerouslySetInnerHTML={{ __html: e }} />
                                                ))
                                            }
                                        </ul>)
                                    )}
                                    {(!img1 || cta) && (
                                        cta &&
                                        (<div className={`grid grid-cols-1 mr-sm:flex gap-3 mt-5`}>
                                            {theme == "light" ?
                                                <>
                                                    <MRCTA
                                                        text="Connect with Us!"
                                                        classes="hover:bg-secondary-100 rounded-sm"
                                                        handle="onclick='parent.LC_API.open_chat_window();return false;'"
                                                    />
                                                    <MRCTA
                                                        text="Call us NOW!"
                                                        link="tel:8007819093"
                                                        bg="bg-transparent"
                                                        color="text-primary-100"
                                                        border="border-primary-100 hover:!bg-primary-100 hover:border-transparent hover:text-white rounded-sm"
                                                    />
                                                </> :
                                                <>
                                                    <MRCTA
                                                        text="Connect with Us!"
                                                        classes="hover:bg-white hover:text-black rounded-sm"
                                                        handle="onclick='parent.LC_API.open_chat_window();return false;'"
                                                    />
                                                    <MRCTA
                                                        text="Call us NOW!"
                                                        link="tel:8007819093"
                                                        bg="bg-transparent"
                                                        color="!text-white"
                                                        border="border-white hover:!bg-primary-100 hover:border-transparent rounded-sm"
                                                    />
                                                </>
                                            }
                                        </div>)
                                    )}
                                    {ctaText && (
                                        ctaText &&
                                        (

                                            <MRCTA
                                                text={ctaText}
                                                classes="hover:bg-white hover:text-black rounded-sm mt-5"
                                                handle="onclick='parent.LC_API.open_chat_window();return false;'"
                                            />
                                        )
                                    )}
                                </div>
                                <div className="basis-1/2">
                                    {img1 && <Image src={img1} alt="img" width={900} height={100} className="!w-auto mx-auto" />}
                                </div>
                            </div>
                        </div>
                        <div className={`${img1 ? "" : "basis-1/2"}`}>
                            {img2 && <Image src={img2} alt="img" width={900} height={100} className="!w-auto mx-auto" />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MRContent1