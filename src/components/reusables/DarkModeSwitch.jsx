import React from "react"
import isBrowser from "../../helpers/isBrowser"
import MainContext, { setDarkMode } from "../../context/MainContext"

const DarkModeSwitch = ({ tabIsUsed }) => {
  const { darkMode, mainContextDispatch } = React.useContext(MainContext)

  //set dark mode from local storage
  React.useEffect(() => {
    const darkModeLocalStorageValue = isBrowser()
      ? localStorage.getItem("darkMode")
      : null
    if (darkModeLocalStorageValue) {
      setDarkMode(mainContextDispatch, JSON.parse(darkModeLocalStorageValue))
    }
  }, [mainContextDispatch])

  function handleClick() {
    setDarkMode(mainContextDispatch, !darkMode)
    if (isBrowser()) {
      localStorage.setItem("darkMode", JSON.stringify(!darkMode))
    }
  }
  return (
    <button
      className={`w-8 h-8 ml-2 ${tabIsUsed ? "focus" : "focus:outline-none"}`}
      onClick={handleClick}
      aria-label="dark/light-mode"
    >
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
}

export default DarkModeSwitch
