import React from "react"

function SiteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="260 110 210 160" {...props}>
      <path
        id="laptop-surface"
        d="M467.446 255.284L384.976 208.736L388.518 261.861L467.446 255.284Z"
        className="fill-current text-lightTheme-primary"
      />
      <path
        id="laptop-side"
        d="M388.518 261.861L467.446 255.284L467.091 257.06C467.002 257.504 466.627 257.833 466.174 257.862C421.781 260.688 374.272 267.339 388.518 261.861Z"
        className="fill-current text-lightTheme-secondary"
      />
      <path
        id="laptop-back"
        d="M267.881 115.404C266.525 115.031 265.218 116.135 265.36 117.534L275.569 218.16C275.644 218.899 276.122 219.535 276.81 219.813L385.57 263.707C386.936 264.258 388.409 263.194 388.315 261.725L381.02 147.926C380.965 147.075 380.377 146.352 379.554 146.126L267.881 115.404Z"
        className="fill-current text-lightTheme-primary"
      />
      <ellipse
        id="laptop-logo"
        cx="321.534"
        cy="187.06"
        rx="7.24087"
        ry="9.99645"
        transform="rotate(-17.5727 321.534 187.06)"
        className="fill-current text-lightTheme-secondary"
      />
      <path
        id="laptop-keyboard"
        d="M386.494 239.599L419.381 251.742L387.506 254.778L386.494 239.599Z"
        className="fill-current text-lightTheme-text"
      />
    </svg>
  )
}

export default SiteIcon
