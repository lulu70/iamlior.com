import React from "react"
import NavigationMenu from "./NavigationMenu"
import { Link } from "gatsby"
import useTabIsUsed from "../../hooks/useTabIsUsed"
import DarkModeSwitch from "./DarkModeSwitch"
import SiteIcon from "./SiteIcon"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"
import ScrollProgressBar from "./ScrollProgressBar"

const Header = () => {
  const tabIsUsed = useTabIsUsed()

  return (
    <header className="z-50 sticky top-0 bg-lightTheme-bg dark:bg-darkTheme-bg flex flex-col">
      <div className="flex items-center py-2">
        <Link
          to="/"
          aria-label="brand"
          className={`flex text-3xl lg:text-4xl ${getClassNamesByTabIsUsedState(
            tabIsUsed
          )}`}
        >
          <SiteIcon className="w-20 h-full fill-current" />
        </Link>
        <NavigationMenu />
        <DarkModeSwitch tabIsUsed={tabIsUsed} />
      </div>
      <ScrollProgressBar />
    </header>
  )
}

export default Header
