import React from "react"
import Navigation from "./Navigation.jsx"
import ScrollTopButton from "./ScrollTopButton.jsx"
import Footer from "./Footer.jsx"
import CookieConsent from "./CookieConsent"

const Layout = ({ children }) => {
  return (
    <div
      id="layout-wrapper"
      className="relative overflow-hidden flex flex-col min-h-screen hd:max-w-screen-hd hd:m-auto"
    >
      <Navigation />
      <ScrollTopButton />
      <CookieConsent />
      <main className="container-fluid">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
