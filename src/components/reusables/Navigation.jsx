import React from "react"
import NavigationMenu from "./NavigationMenu"
import { Link } from "gatsby"
import useTabIsUsed from "../../hooks/useTabIsUsed"
import DarkModeSwitch from "./DarkModeSwitch"

const Navigation = () => {
  const tabIsUsed = useTabIsUsed()

  return (
    <header className="z-50 flex mt-10 items-center">
      <Link
        to="/"
        className={`flex text-4xl font-semibold ${
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

export default Navigation
