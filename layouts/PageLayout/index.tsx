import { FC, ReactNode, useState } from "react"
import { Background } from "components/Background"
import { CustomLink } from "components/CustomLink"
import { Footer } from "components/Footer"
import { Logo } from "components/Logo"
import { Wallet } from "components/Wallet"
import { HiMenu } from "react-icons/hi"
import Popup from "reactjs-popup"

type PageLayoutProps = {
  children: ReactNode
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <Background>
      <div className="flex flex-col min-h-screen xl:container xl:mx-auto">
        <header className="z-10 flex items-center min-h-[76px] justify-between px-4 py-4 xl:px-8">
          <div className="flex divide-x divide-gray-500">
            <CustomLink className="pr-5" href="/">
              <Logo />
            </CustomLink>
          </div>

          {/* Telegram Icon Link */}
          <div className="ml-auto">
            <a href="https://t.me/astralfueltoken" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/telegram.svg"
                alt="Telegram"
                className="h-10 w-10"
              />
            </a>
          </div>
        </header>
        <main className="flex flex-col grow">
          {children}
        </main>
        <footer className="flex justify-center p-4 rounded-t-md">
          <Footer />
        </footer>
      </div>
    </Background>
  )
}
