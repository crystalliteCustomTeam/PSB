// Next
import Image from "next/image"
// Media
import Logos from "media/new-lp/lp1/logo-img-all.jpg"

export default function Authors() {
  return (
    <section>
      <div className="bg-[#f4ede7] py-[31px]">
        <div className="mr-container">
          <Image src={Logos} alt="logos" className="mx-auto" />
        </div>
      </div>
    </section>
  )
}
