import React from "react"
import NavigationMenu from "./NavigationMenu"
import { Link } from "gatsby"
import useTabIsUsed from "../../hooks/useTabIsUsed"
import DarkModeSwitch from "./DarkModeSwitch"

const Header = () => {
  const tabIsUsed = useTabIsUsed()

  return (
    <header className="z-50 flex mt-10 items-center">
      <Link
        to="/"
        className={`flex text-3xl lg:text-4xl ${
          tabIsUsed ? "focus" : "focus:outline-none"
        }`}
      >
        Lior Cohen
      </Link>
      <NavigationMenu />
      <DarkModeSwitch tabIsUsed={tabIsUsed} />
    </header>
  )
}

export default Header
