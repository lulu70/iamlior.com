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
      className="alert alert-dark fixed-bottom small m-0 text-center p-1"
      role="alert"
    >
      We are using cookies to ensure best experience on our website.{" "}
      <Link to="/policies/privacy-policy">Learn more</Link>{" "}
      <button className="btn btn-sm btn-outline-dark" onClick={handleClick}>
        Got it!
      </button>
    </div>
  ) : (
    ""
  )
}

export default CookieConsent
