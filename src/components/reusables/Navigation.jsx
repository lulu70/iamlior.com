import React from "react"
import Navbar from "react-bootstrap/Navbar"
import NavigationCollapse from "./NavigationCollapse.jsx"
import NavigationBrand from "./NavigationBrand.jsx"
import NavigationRightLinks from "./NavigationRightLinks.jsx"

const Navigation = ({ data }) => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="px-4 px-lg-divider border border-dark border-top-0 border-left-0 border-right-0"
    >
      <NavigationBrand className="col-3 col-lg-2 m-0 px-0" data={data} />
      <NavigationRightLinks className="col col-lg-2 text-right order-lg-3 position-relative" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-lg-4" />
      <NavigationCollapse className="col-12 col-lg-8 mx-auto order-4 order-lg-2 justify-content-center" />
    </Navbar>
  )
}

export default Navigation
