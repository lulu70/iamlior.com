import React from "react"
import { Link } from "gatsby"
import useTabIsUsed from "../../hooks/useTabIsUsed"

export const links = [
  { id: 0, text: "About Me", slug: "/#about" },
  { id: 1, text: "Tech I Use", slug: "/#tech" },
  { id: 2, text: "My Work", slug: "/#my-work" },
  { id: 3, text: "Lets Talk", slug: "/#lets-talk" },
]
const NavigationMenu = ({ className }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const tabIsUsed = useTabIsUsed()
  React.useEffect(() => {
    function handleKeydown(e) {
      if (e.key === "Esc" || e.key === "Escape") {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeydown)
    return () => {
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [])
  return (
    <>
      <div
        id="desktop-menu"
        className={`relative z-10 block ml-auto ${className}`}
      >
        <button
          className={`relative block h-10 w-10 ${
            tabIsUsed ? "focus" : "focus:outline-none"
          }`}
          aria-label="menu"
          onClick={() => {
            setIsOpen(isOpen => !isOpen)
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {isOpen && (
          <>
            <button
              className="fixed inset-0 h-full w-full bg-black opacity-50 dark:opacity-90 cursor-default"
              tabIndex="-1"
              onClick={() => setIsOpen(false)}
              aria-label="layout"
            />
            <div className="mt-2 py-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-64 shadow-xl absolute right-0 text-center">
              {links.map(({ id, text, slug }) => (
                <Link
                  key={id}
                  to={slug}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black focus text-xl"
                >
                  {text}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default NavigationMenu
