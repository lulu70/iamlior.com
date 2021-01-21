import React from "react"
import Navigation from "./Navigation.jsx"
import styled from "styled-components"
import ScrollTopButton from "./ScrollTopButton.jsx"
import Footer from "./Footer.jsx"
import CookieConsent from "./CookieConsent"

const LayoutWrapper = styled.div`
  min-height: 100vh;
  @media (min-width: 1920px) {
    max-width: 1920px;
    margin: auto;
  }
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper
      id="layout-wrapper"
      className="position-relative overflow-hidden d-flex flex-column"
    >
      <Navigation />
      <ScrollTopButton />
      <CookieConsent />
      <main className="container-fluid">{children}</main>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
