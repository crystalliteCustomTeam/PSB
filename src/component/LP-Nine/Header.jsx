// Next
import Image from "next/image"
// Media
import Logo from "media/assets/images/logo.png"
// Components
import { CTA } from "./index"

export default function Header() {
  return (
    <header>
      <div className="absolute z-20 w-full py-8">
        <div className="mr-container">
          <div className="flex items-center mr-sm:justify-between justify-center">
            <a href="#" className="text-decoration-none block">
              <Image
                priority
                quality={100}
                src={Logo}
                alt="Best Selling Publisher"
                width={180}
                height={50}
              ></Image>
            </a>
            <CTA css="mr-sm:block hidden" />
          </div>
        </div>
      </div>
    </header>
  )
}
