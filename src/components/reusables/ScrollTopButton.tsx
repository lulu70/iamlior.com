import React from "react"
import debounce from "lodash/debounce"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"
import MainContext from "../../context/MainContext"

const ScrollTopButton = () => {
  const [showScroll, setShowScroll] = React.useState(false)
  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }
    const handleScroll = debounce(() => {
      checkScrollTop()
    }, 100)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showScroll])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const { tabIsUsed } = React.useContext(MainContext)

  return showScroll ? (
    <button
      type="button"
      className={`bg-lightTheme-primary dark:bg-darkTheme-primary border border-lightTheme-text dark:border-darkTheme-text px-2 py-1 rounded-md fixed right-2 bottom-2 z-50 ${getClassNamesByTabIsUsedState(
        tabIsUsed
      )}`}
      onClick={scrollTop}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 56 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform rotate-180 fill-current"
      >
        <path d="M55.2 1.4L53.8 0L27.9 26.5L1.4 0.599998L0 2L27.9 29.3L55.2 1.4Z" />
      </svg>
    </button>
  ) : (
    <span />
  )
}

export default ScrollTopButton
