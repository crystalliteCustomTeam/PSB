import { MRCTA } from "@/component"

const MRCTAGroup = ({
    classes = ""
}) => {
    return (
        <div className={`grid grid-cols-1 mr-sm:flex gap-3 ${classes}`}>
            <MRCTA
                text="Connect with Us!"
                classes="hover:bg-secondary-100"
                handle="onclick='parent.LC_API.open_chat_window();return false;'"
            />
            <MRCTA
                text="Call us NOW!"
                link="tel:8007819093"
                bg="bg-transparent"
                color="text-primary-100"
                border="border-primary-100 hover:!bg-primary-100 hover:border-transparent hover:text-white"
            />
        </div>
    )
}

export default MRCTAGroup
