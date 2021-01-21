import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "gatsby"

const NavigationCollapse = props => {
  const activeStyle = { color: "red" }
  const pages = [
    {
      id: 0,
      name: "Home",
      to: "/",
    },
  ]

  return (
    <Navbar.Collapse id="basic-navbar-nav" {...props}>
      <Nav className="flex-wrap justify-content-center">
        {pages.map(({ id, name, to }) => (
          <Nav.Link key={id} as={Link} to={to} activeStyle={activeStyle}>
            {name}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  )
}

export default NavigationCollapse
