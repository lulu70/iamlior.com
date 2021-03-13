import React from "react"
import { Link } from "gatsby"
import FocusedButton from "./FocusedButton"

const NavigationMenu = ({ className }) => {
  const links = [
    { id: 0, text: "About Me", slug: "#about" },
    { id: 1, text: "Tech", slug: "#tech" },
    { id: 2, text: "My Work", slug: "#my-work" },
    { id: 2, text: "Lets Talk", slug: "#lets-talk" },
  ]
  const [isOpen, setIsOpen] = React.useState(false)
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
        className={`relative hidden z-10 lg:block lg:ml-6 ${className} lg:ml-auto`}
      >
        <FocusedButton
          className="relative block h-10 w-10"
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
        </FocusedButton>
        {isOpen && (
          <>
            <button
              className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
              tabIndex="-1"
              onClick={() => setIsOpen(false)}
              aria-label="layout"
            />
            <div
              id="links-on-desktop"
              className="mt-2 py-2 bg-white rounded-lg w-48 shadow-xl absolute right-0"
            >
              {links.map(({ id, text, slug }) => (
                <Link
                  key={id}
                  to={slug}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-900 hover:text-white"
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
