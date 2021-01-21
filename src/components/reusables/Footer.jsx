import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  const links = [{ name: "Home", to: "/", id: 0 }]
  return (
    <footer className="mt-auto mx-lg-divider pb-5">
      <div className="row">
        <div className="col-10 col-xl-8 text-center mx-auto">
          <nav className="row flex-column flex-lg-row justify-content-between align-items-center mx-auto mb-3 small border-top border-bottom pt-3">
            {links.map(link => (
              <Link key={link.id} className="text-secondary mb-3" to={link.to}>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="text-secondary">
            © 2020 Lior Cohen All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
