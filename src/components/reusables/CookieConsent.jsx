import React from "react"
import { Link } from "gatsby"
import MainContext from "../../context/MainContext"

const CookieConsent = () => {
  const { store, setCookieConcent } = React.useContext(MainContext)
  const { cookieConcent } = store
  const handleClick = () => {
    setCookieConcent("true")
  }
  return !cookieConcent ? (
    <div
      className="bg-gray-300 w-full text-xs z-40 fixed bottom-0 small m-0 text-center py-2 "
      role="alert"
    >
      We are using cookies to ensure best experience on our website.{" "}
      <Link to="/policies/privacy-policy" className="text-blue-500">
        Learn more
      </Link>{" "}
      <button
        className="border border-black p-1 rounded-sm"
        onClick={handleClick}
      >
        Got it!
      </button>
    </div>
  ) : (
    ""
  )
}

export default CookieConsent
