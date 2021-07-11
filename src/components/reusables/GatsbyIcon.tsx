import React from "react"

function GatsbyIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 28 28"
      xmlSpace="preserve"
    >
      <g>
        <circle cx="14" cy="14" r="14" fill="#639"></circle>
        <path
          fill="#fff"
          d="M6 22c-2-2-3-5-3-8l11 11c-3 0-6-1-8-3zm10 3L3 12a11 11 0 0120-4l-2 1c-1-2-4-4-7-4-4 0-7 3-8 6l11 12c3-1 5-4 6-7h-5v-2h7c0 5-4 10-9 11z"
          className="st1"
        ></path>
      </g>
    </svg>
  )
}

export default GatsbyIcon
