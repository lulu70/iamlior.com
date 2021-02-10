import React from "react"
import { Link } from "gatsby"

const NavigationBrandAndHamburger = ({ isOpen, setIsOpen }) => {
  return (
    <div
      id="brand-and-hamburger-container"
      className="flex items-center justify-between px-4 py-3 lg:p-0"
    >
      <div id="brand-container">
        <Link to="/">
          <img
            className="h-12 rounded-full"
            src="https://placekitten.com/250/250"
            alt="cat avatar"
          />
        </Link>
      </div>
      <div id="hamburger-container" className="lg:hidden">
        <button
          type="button"
          onClick={() => {
            setIsOpen(isOpen => !isOpen)
          }}
          className="block text-gray-500 focus:text-white hover:text-white focus:outline-none"
        >
          <svg viewBox="0 0 80 80" className="h-6 w-6 fill-current">
            {isOpen ? (
              <path d="M47.3292 40.0729L78.4797 8.92152C80.5069 6.89525 80.5069 3.61906 78.4797 1.59279C76.4534 -0.433477 73.1772 -0.433477 71.1509 1.59279L39.9996 32.7442L8.84914 1.59279C6.82192 -0.433477 3.54668 -0.433477 1.52041 1.59279C-0.506806 3.61906 -0.506806 6.89525 1.52041 8.92152L32.6708 40.0729L1.52041 71.2243C-0.506806 73.2505 -0.506806 76.5267 1.52041 78.553C2.53022 79.5638 3.85797 80.0715 5.18478 80.0715C6.51158 80.0715 7.83838 79.5638 8.84914 78.553L39.9996 47.4016L71.1509 78.553C72.1617 79.5638 73.4885 80.0715 74.8153 80.0715C76.1421 80.0715 77.4689 79.5638 78.4797 78.553C80.5069 76.5267 80.5069 73.2505 78.4797 71.2243L47.3292 40.0729Z" />
            ) : (
              <g>
                <rect width="80" height="10"></rect>
                <rect y="30" width="80" height="10"></rect>
                <rect y="60" width="80" height="10"></rect>
              </g>
            )}
          </svg>
        </button>
      </div>
    </div>
  )
}

export default NavigationBrandAndHamburger
