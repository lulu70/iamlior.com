import React from "react"
import { Link } from "gatsby"
import { links } from "../reusables/NavigationMenu"
const Footer = () => {
  return (
    <footer className="pb-5 mt-auto">
      <div className="w-5/6 lg:w-2/3 text-center mx-auto">
        <nav className="flex flex-col lg:flex-row items-center justify-around mx-auto text-sm border-t border-b py-3 lg:space-x-5 space-y-4 lg:space-y-0">
          {links.map(link => (
            <Link key={link.id} className="text-gray-500 focus" to={link.slug}>
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="text-gray-500 mt-3">
          © 2020 Lior Cohen All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
