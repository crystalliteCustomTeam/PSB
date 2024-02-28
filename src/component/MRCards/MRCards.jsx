import React from 'react'

const MRCards = ({
    gridColumns,
    cardBG,
    padding,

}) => {
    return (
        <section>
            <div className="relative py-[40px] mr-lg:py-[70px]">
                <div className="mr-container">
                    <div className="text-center mb-5">
                        {subTitle && (<span className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">
                            {subTitle}
                        </span>)}
                        {title && (<h2 className="text-[26px] mr-md:text-[30px] mr-lg:text-[40px] block leading-tight font-bold font-sans text-[#000000] mb-2" dangerouslySetInnerHTML={{ __html: title }} />)}
                        {desc && (<p className="text-[14px] mr-lg:text-[16px] mr-lg:w-[85%] mx-auto block leading-[26px] font-normal font-sans text-[#000000]" dangerouslySetInnerHTML={{ __html: desc }} />)}
                    </div>
                    <div className={`grid ${gridColumns} items-center gap-x-5`}>
                        <div className={`${cardBG} ${padding}`}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MRCards;