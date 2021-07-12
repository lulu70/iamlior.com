import React from "react"
import { Link } from "gatsby"
import { links } from "../reusables/NavigationMenu"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"
import MainContext from "../../context/MainContext"

const Footer = () => {
  const { tabIsUsed } = React.useContext(MainContext)

  return (
    <footer className="pb-5 mt-auto">
      <div className="w-full text-center mx-auto">
        <nav className="flex flex-col lg:flex-row items-center justify-around mx-auto text-sm  bg-lightTheme-primary dark:bg-darkTheme-primary py-3 lg:space-x-5 space-y-4 lg:space-y-0">
          {links.map(link => (
            <Link
              key={link.id}
              className={getClassNamesByTabIsUsedState(tabIsUsed)}
              to={link.slug}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="mt-3">© 2020 Lior Cohen All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
