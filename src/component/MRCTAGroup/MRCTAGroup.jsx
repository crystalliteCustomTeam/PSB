// React
import { useContext } from "react"
// Components
import { PopupContext } from "../LP-Eight/Popup/PopupContext"
import { MRCTA } from "@/component"

const MRCTAGroup = ({
  isPopup = false,
  classes = "",
  animation = "",
  text1 = "Connect with Us!",
  text2 = "Call us NOW!",
}) => {
  const { openPopup } = useContext(PopupContext)

  return (
    <div className={`grid grid-cols-1 mr-sm:flex gap-3 ${classes}`}>
      {isPopup ? (
        <div className="relative z-10">
          <button
            onClick={openPopup}
            className="w-full mr-md:w-max h-[50px] bg-primary-100 text-white rounded-md flex items-center !px-10 font-sans font-semibold justify-center transition-all  hover:bg-secondary-100"
          >
            {text1}
          </button>
        </div>
      ) : (
        <MRCTA
          text={text1}
          classes="hover:bg-secondary-100"
          link="javascript:;"
          handle="parent.LC_API.open_chat_window();return false;"
          animation={animation}
        />
      )}
      <MRCTA
        text={text2}
        link="tel:8556666675"
        bg="bg-transparent"
        color="text-primary-100"
        border="border-primary-100 hover:!bg-primary-100 hover:border-transparent hover:text-white"
        animation={animation}
      />
    </div>
  )
}

export default MRCTAGroup
