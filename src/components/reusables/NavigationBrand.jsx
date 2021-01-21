import React from "react"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "gatsby"

const NavigationBrand = ({ data, ...props }) => {
  return (
    <Navbar.Brand as={Link} to="/" {...props}>
      SITE BRAND
    </Navbar.Brand>
  )
}

export default NavigationBrand
