import { MRCTA } from "@/component"

const MRCTAGroup = ({
    classes = "",
    animation = "",
    text1 = "Connect with Us!",
    text2 = "Call us NOW!",
}) => {
    return (
        <div className={`grid grid-cols-1 mr-sm:flex gap-3 ${classes}`}>
            <MRCTA
                text={text1}
                classes="hover:bg-secondary-100"
                link="javascript:void(Tawk_API.toggle())"
                animation={animation}
            />
            <MRCTA
                text={text2}
                link="tel:8007819093"
                bg="bg-transparent"
                color="text-primary-100"
                border="border-primary-100 hover:!bg-primary-100 hover:border-transparent hover:text-white"
                animation={animation}
            />
        </div>
    )
}

export default MRCTAGroup