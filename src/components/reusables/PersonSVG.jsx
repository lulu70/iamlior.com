import React from "react"
import useRefsContext from "../../hooks/useRefsContext"
import useTypingAnimation from "../../hooks/useTypingAnimation"

const PersonSVG = props => {
  const {
    personRef,
    personLeftHandRef,
    laptopLogoRef,
    laptopScreenLightRef,
  } = useRefsContext()
  const { startTypingAnimation, stopTypingAnimation } = useTypingAnimation()
  return (
    <svg
      ref={personRef}
      {...props}
      width="100%"
      height="100%"
      viewBox="0 0 641 306"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onPointerEnter={startTypingAnimation}
      onPointerLeave={stopTypingAnimation}
    >
      <g id="person-composition">
        <g id="table" filter="url(#filter0_d)">
          <path
            d="M374.351 195.076L569.143 284.123L479.083 298.29L47 212.784L374.351 195.076Z"
            fill="black"
          />
        </g>
        <path
          id="chair"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M567.119 200.641L631.375 216.831L599.5 295.254H579.262L536.762 279.064L567.119 200.641ZM633.399 211.772L601.853 297.108C601.112 297.019 600.331 296.906 599.5 296.772L550.423 298.796L515.006 303.349L520.426 306.879L598.557 306.023L593.935 318.528L603.042 321.564L608.727 305.911L611.643 305.879L615.185 295.254C614.125 295.681 613.144 296.038 612.206 296.331L642 214.302L633.399 211.772Z"
          fill="black"
        />
        <g id="laptop">
          <path
            id="laptop-surface"
            d="M467.446 255.284L384.976 208.736L388.518 261.861L467.446 255.284Z"
            fill="#BDBDBD"
          />
          <path
            id="laptop-side"
            d="M388.518 261.861L467.446 255.284L467.091 257.06C467.002 257.504 466.627 257.833 466.174 257.862C421.781 260.688 374.272 267.339 388.518 261.861Z"
            fill="#5F5F5F"
          />
          <path
            id="laptop-back"
            d="M267.881 115.404C266.525 115.031 265.218 116.135 265.36 117.534L275.569 218.16C275.644 218.899 276.122 219.535 276.81 219.813L385.57 263.707C386.936 264.258 388.409 263.194 388.315 261.725L381.02 147.926C380.965 147.075 380.377 146.352 379.554 146.126L267.881 115.404Z"
            fill="#BDBDBD"
          />
          <ellipse
            ref={laptopLogoRef}
            id="laptop-logo"
            cx="321.534"
            cy="187.06"
            rx="7.24087"
            ry="9.99645"
            transform="rotate(-17.5727 321.534 187.06)"
            fill="#5F5F5F"
          />
          <path
            id="laptop-keyboard"
            d="M386.494 239.599L419.381 251.742L387.506 254.778L386.494 239.599Z"
            fill="black"
          />
          <path
            ref={laptopScreenLightRef}
            id="screen-light"
            d="M380 147L388.5 262L519 94L463.5 26.5L267 115C311.325 127.887 380 147 380 147Z"
            fill="url(#paint0_linear)"
            opacity="0"
          />
        </g>
        <g id="person">
          <path
            id="right-hand"
            d="M414.827 166.742C403.268 181.087 397.241 186.477 384 192L386.5 227C412.715 215.715 428.209 206.429 449.738 183.945L414.827 166.742Z"
            fill="#c17e58"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            id="shirt"
            d="M414.827 166.742L449.738 184.451L453.786 215.314C485.155 219.361 502.863 234.034 532.208 227.457L533.726 221.891L581.286 225.433L591.405 161.683C588.837 133.313 582.947 121.034 546.881 103.498L467.446 101.98C444.173 106.534 439.113 131.326 414.827 166.742Z"
            fill="#FBBF24"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            id="hat"
            d="M496.286 1.80173C470.517 3.68319 461.633 10.8568 456.315 35.1946C450.823 35.191 446.494 35.4023 443.161 35.8626C438.488 36.5077 435.396 37.6421 434.062 39.3596C433.715 39.8067 433.992 40.4117 434.528 40.5945C442.547 43.3311 447.599 43.8739 457.327 45.8196L531.196 49.3612C533.885 20.3666 526.821 10.5838 503.875 3.31958L503.833 3.26221C501.92 0.668151 500.835 -0.80392 496.286 1.80173Z"
            fill="black"
          />
          <path
            id="neck"
            d="M526.137 72.6352C526.259 90.5758 530.506 97.3878 545.869 103.498C516.856 127.273 501.326 138.622 485.155 112.099L511.97 100.463L515.006 75.165L526.137 72.6352Z"
            fill="#c17e58"
            stroke="black"
            strokeWidth="0.5"
          />
          <g id="ear">
            <path
              d="M515.006 75.6709C528.872 77.3007 536.684 62.9905 530.691 49.3613L517.536 58.9744L515.006 75.6709Z"
              fill="#c17e58"
            />
            <path
              d="M515.006 75.6709C528.872 77.3007 536.684 62.9905 530.691 49.3613L517.536 58.9744M515.006 75.6709C501.141 74.041 517.536 58.9744 517.536 58.9744M515.006 75.6709L517.536 58.9744"
              stroke="black"
              strokeWidth="0.5"
            />
          </g>
          <path
            id="face"
            d="M458.339 39.2423L456.315 57.9625C458.421 61.1254 459.038 64.2763 457.827 67.5756C460.34 81.648 463.674 91.6198 469.976 107.04C473.374 115.371 477.581 116.372 489.202 111.593L511.97 100.463L517.536 58.9745L530.69 49.3614L458.339 39.2423Z"
            fill="#c17e58"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            ref={personLeftHandRef}
            id="left-hand"
            d="M386.494 228.468C393.945 218.931 400.888 215.825 416.345 212.784L462.893 216.832C490.72 223.915 506.405 232.516 532.208 228.468L533.726 222.397L576.226 225.433C568.392 248.355 562.579 258.63 548.905 270.968C507.339 269.598 493.052 250.654 454.292 240.611C445.776 245.672 441.02 243.711 425.958 241.623L412.298 246.177C407.384 245.265 406.806 245.039 407.744 241.623L418.369 235.552C404.839 232.88 398.156 234.382 387 239.599L386.494 228.468Z"
            fill="#c17e58"
            stroke="black"
            strokeWidth="0.5"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="385"
            y="208"
            width="83"
            height="54"
          >
            <path
              id="laptop-surface_2"
              d="M467.952 255.284L385.482 208.736L389.024 261.861L467.952 255.284Z"
              fill="#C4C4C4"
            />
          </mask>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="166.076"
          width="582.143"
          height="163.214"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-17" dy="1" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="380.24"
          y="211.532"
          width="204.328"
          height="72.6898"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" dy="6" />
          <feGaussianBlur stdDeviation="3.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.77 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="540.5"
          y1="46"
          x2="228.5"
          y2="43"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#333333" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.19" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default PersonSVG
