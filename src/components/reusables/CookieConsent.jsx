import React from "react"
import { Link } from "gatsby"
import MainContext, { setCookieConcent } from "../../context/MainContext"
import isBrowser from "../../helpers/isBrowser"
import useTabIsUsed from "../../hooks/useTabIsUsed"

const CookieConsent = () => {
  const { cookieConcent, mainContextDispatch } = React.useContext(MainContext)

  //set cookie concent from local storage
  React.useEffect(() => {
    const cookieConcent = isBrowser()
      ? localStorage.getItem("cookie_concent")
      : null
    if (cookieConcent) {
      setCookieConcent(mainContextDispatch, cookieConcent)
    }
  }, [mainContextDispatch])

  function handleClick() {
    setCookieConcent(mainContextDispatch, "true")
    if (isBrowser()) {
      localStorage.setItem("cookie_concent", "true")
    }
  }
  const tabIsUsed = useTabIsUsed()
  return !cookieConcent ? (
    <div
      className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-black w-full z-40 fixed bottom-0 right-0 left-0 small m-0 text-center py-2"
      role="alert"
    >
      We are using cookies to ensure best experience on our website.{" "}
      <Link
        to="/policies/privacy-policy"
        className="p-1 rounded-lg text-yellow-400 dark:text-yellow-700 focus"
      >
        Privacy policy
      </Link>{" "}
      <button
        className={`border-2 border-gray-100 dark:border-black p-1 rounded-lg ${
          tabIsUsed ? "focus" : "focus:outline-none"
        }`}
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
