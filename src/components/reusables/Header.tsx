import React from "react"
import NavigationMenu from "./NavigationMenu"
import { Link } from "gatsby"
import DarkModeSwitch from "./DarkModeSwitch"
import SiteIcon from "./SiteIcon"
import ScrollProgressBar from "./ScrollProgressBar"
import MainContext from "../../context/MainContext"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"

const Header = () => {
  const { tabIsUsed } = React.useContext(MainContext)
  return (
    <header className="z-50 sticky top-0 bg-lightTheme-bg dark:bg-darkTheme-bg flex flex-col">
      <div className="flex items-center py-2 px-5 lg:px-0">
        <Link
          to="/"
          aria-label="brand"
          className={`flex text-3xl lg:text-4xl ${getClassNamesByTabIsUsedState(
            tabIsUsed
          )}`}
        >
          <SiteIcon className="w-20 h-full fill-current" />
        </Link>
        <NavigationMenu tabIsUsed={tabIsUsed} />
        <DarkModeSwitch tabIsUsed={tabIsUsed} />
      </div>
      <ScrollProgressBar />
    </header>
  )
}

export default Header
