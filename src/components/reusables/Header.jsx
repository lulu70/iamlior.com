import React from "react"
import NavigationMenu from "./NavigationMenu"
import { Link } from "gatsby"
import useTabIsUsed from "../../hooks/useTabIsUsed"
import DarkModeSwitch from "./DarkModeSwitch"
import SiteIcon from "./SiteIcon"

const Header = () => {
  const tabIsUsed = useTabIsUsed()

  return (
    <header className="z-50 flex lg:py-2 items-center sticky top-0 bg-lightTheme-bg dark:bg-darkTheme-bg">
      <Link
        to="/"
        className={`flex text-3xl lg:text-4xl ${
          tabIsUsed ? "focus" : "focus:outline-none"
        }`}
      >
        <SiteIcon className="w-20 fill-current" />
      </Link>
      <NavigationMenu />
      <DarkModeSwitch tabIsUsed={tabIsUsed} />
    </header>
  )
}

export default Header
