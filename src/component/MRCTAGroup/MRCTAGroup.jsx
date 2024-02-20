import { MRCTA } from "@/component"

const MRCTAGroup = ({
    classes = ""
}) => {
    return (
        <div className={`flex gap-3 ${classes}`}>
            <MRCTA
                text="LET'S DISCUSS"
                classes="hover:bg-secondary-100"
            />
            <MRCTA
                text="800-781-9093"
                link="tel:8007819093"
                bg="bg-transparent"
                color="text-primary-100"
                border="border-primary-100 hover:!bg-primary-100 hover:border-transparent hover:text-white"
            />
        </div>
    )
}

export default MRCTAGroup
