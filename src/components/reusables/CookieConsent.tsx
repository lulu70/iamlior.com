import React from "react"
import { Link } from "gatsby"
import MainContext, { setCookieConcent } from "../../context/MainContext"
import isBrowser from "../../helpers/isBrowser"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"
declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

const CookieConsent = () => {
  const { cookieConcent, mainContextDispatch, tabIsUsed } = React.useContext(
    MainContext
  )
  //set cookie concent from local storage
  React.useEffect(() => {
    const concent = isBrowser() ? localStorage.getItem("cookie_concent") : null
    if (concent) {
      const boolCookieConcent = concent === "true"
      setCookieConcent(mainContextDispatch, boolCookieConcent)
    }
  }, [mainContextDispatch])

  function handleClick() {
    setCookieConcent(mainContextDispatch, true)
    if (isBrowser()) {
      localStorage.setItem("cookie_concent", "true")
      window.dataLayer.push({ event: "Consent Button Click" })
    }
  }
  return !cookieConcent ? (
    <div
      className="bg-darkTheme-bg text-darkTheme-text dark:bg-darkTheme-primary w-full z-40 fixed bottom-0 right-0 left-0 small m-0 text-center py-2"
      role="alert"
    >
      We are using cookies to ensure best experience on our website.{" "}
      <Link
        to="/policies/privacy-policy"
        className={`p-1 rounded-lg text-accent ${getClassNamesByTabIsUsedState(
          tabIsUsed
        )}`}
      >
        Privacy policy
      </Link>{" "}
      <button
        className={`border-2 border-darkTheme-text dark:border-darkTheme-text p-1 rounded-lg ${getClassNamesByTabIsUsedState(
          tabIsUsed
        )}`}
        onClick={handleClick}
      >
        Got it!
      </button>
    </div>
  ) : (
    <span />
  )
}

export default CookieConsent
