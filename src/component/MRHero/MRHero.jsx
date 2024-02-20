import { MRCTAGroup, MRHeroCounter, MRHeroForm } from "@/component"
import { Image } from "react-bootstrap"

const MRHero = ({
    subTitle,
    title,
    desc,
    form = true,
    containImg,
    fullImg,
    logos,
    counter = false,
    classes
}) => {
    return (
        <section>
            <div className={`relative py-[80px] ${fullImg} bg-no-repeat ${classes}`}>
                <div className="mr-container">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-6">
                            {subTitle && <h1 className="text-[18px] uppercase leading-none font-sans font-semibold border-[3px] border-primary-100 text-secondary-100 w-max p-2 mb-4">{subTitle}</h1>}
                            {title && subTitle ? <h2 className="text-[45px] font-sans font-bold leading-tight text-secondary-200 mb-4" dangerouslySetInnerHTML={{ __html: title }} /> : <h1 className="text-[45px] font-sans font-bold leading-tight text-secondary-200 mb-4" dangerouslySetInnerHTML={{ __html: title }} />}
                            {desc && <p className="text-[16px] font-sans font-normal leading-normal mb-4">{desc}</p>}
                            <MRCTAGroup />
                            {counter && <MRHeroCounter />}
                            {logos && <Image src={logos} className="mt-4" alt="bestsellingpublisher" />}
                        </div>
                        {containImg && <div className="col-span-6">
                            <Image src={containImg} className="block m-auto" alt="bestsellingpublisher" />
                        </div>}
                        {form && <div className="col-span-6">
                            <MRHeroForm />
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MRHero