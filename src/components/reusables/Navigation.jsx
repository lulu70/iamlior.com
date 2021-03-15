import React from "react"
import NavigationMenu from "./NavigationMenu"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <header className="z-50 flex mt-10">
      <Link to="/" className="flex text-4xl font-semibold focus">
        Lior Cohen
      </Link>
      <NavigationMenu />
    </header>
  )
}

export default Navigation
