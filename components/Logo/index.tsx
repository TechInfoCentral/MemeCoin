import { FC } from "react"
import Image from "next/image"

type LogoProps = {
  size?: string
}

export const Logo: FC<LogoProps> = ({ size = "text-lg" }) => {
  return (
    <div className={`flex items-center ${size} gap-1 font-audiowide tracking-wide`}>
      <Image src="/images/wordmark-white.png" alt="logo" width='250' height='45' />
      {/* <span className="font-semibold text-orange-600 ">FOX COIN</span> */}
    </div>
  )
}
