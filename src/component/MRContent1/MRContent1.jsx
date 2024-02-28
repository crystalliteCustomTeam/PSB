import React from "react"

const MRContent1 = ({
    subTitle,
    title,
    desc,
    img1 = "/assets/images/newimg/ghostwriting_book.png",
    img2,
    listTitle,
    listTitleClasses = "",
    listClasses = "",
    classes = ""
}) => {
    return (
        <section>
            <div>
                <div className="mr-container">
                    <div>
                        <div>
                            {subTitle && (<span className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">
                                {subTitle}
                            </span>)}
                            {title && (<h2 className="text-[26px] mr-md:text-[30px] mr-lg:text-[40px] block leading-tight font-bold font-sans text-[#000000] mb-2" dangerouslySetInnerHTML={{ __html: title }} />)}
                            {desc && (<p className="text-[14px] mr-lg:text-[16px] mr-lg:w-[85%] mx-auto block leading-[26px] font-normal font-sans text-[#000000]" dangerouslySetInnerHTML={{ __html: desc }} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MRContent1