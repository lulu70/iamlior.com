import React from "react"
import Header from "./Header.jsx"
import ScrollTopButton from "./ScrollTopButton.jsx"
import Footer from "./Footer.jsx"
import CookieConsent from "./CookieConsent"
const Layout = ({ children }) => {
  return (
    <div
      id="layout-wrapper"
      className="relative flex flex-col min-h-screen max-w-4xl mx-auto font-light"
    >
      <Header />
      <main className="mb-16 lg:mb-40 mx-5 lg:mx-0">{children}</main>
      <Footer />
      <CookieConsent />
      <ScrollTopButton />
    </div>
  )
}

export default Layout
