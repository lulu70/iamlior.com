import React from "react"

function BootstrapIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 408" {...props}>
      <defs>
        <linearGradient
          id="bs-logo-a"
          x1="76.1"
          x2="523.5"
          y1="10.8"
          y2="365.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9013fe"></stop>
          <stop offset="1" stopColor="#6610f2"></stop>
        </linearGradient>
        <linearGradient
          id="bs-logo-b"
          x1="193.5"
          x2="293.5"
          y1="109.7"
          y2="278.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#f1e5fc"></stop>
        </linearGradient>
        <filter
          xmlns="http://www.w3.org/2000/svg"
          id="bs-logo-c"
          width="197"
          height="249"
          x="162"
          y="84"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="8"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
      <path
        fill="url(#bs-logo-a)"
        d="M56 53c0-27 21-53 50-53h300c29 0 51 26 50 53s0 61 9 90c8 28 23 46 47 48v26c-24 2-39 20-47 48-9 29-10 63-9 90s-21 53-50 53H106c-29 0-50-26-50-53 1-27 0-61-8-90-9-28-24-46-48-48v-26c24-2 39-20 48-48 8-29 9-63 8-90z"
      ></path>
      <path
        fill="url(#bs-logo-b)"
        stroke="#fff"
        d="M267 312c47 0 76-23 76-61 0-29-20-50-51-53v-1c23-4 40-24 40-47 0-33-26-55-65-55h-89v217h89zm-55-189h46c25 0 39 11 39 31 0 22-16 34-46 34h-39v-65zm0 162v-71h46c33 0 50 12 50 35s-17 36-48 36h-48z"
        filter="url(#bs-logo-c)"
      ></path>
    </svg>
  )
}

export default BootstrapIcon
