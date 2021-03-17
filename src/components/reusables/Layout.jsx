import React from "react"
import Header from "./Header.jsx"
import ScrollTopButton from "./ScrollTopButton.jsx"
import Footer from "./Footer.jsx"
import CookieConsent from "./CookieConsent"
const Layout = ({ children }) => {
  return (
    <div
      id="layout-wrapper"
      className="relative flex flex-col min-h-screen font-spaceMono max-w-4xl mx-5 lg:mx-auto"
    >
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
      <ScrollTopButton />
    </div>
  )
}

export default Layout
