import React from "react"

function HtmlIcon(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 222 89 440 621"
      viewBox="222 90 440 621"
      {...props}
    >
      <filter id="a" width="150%" height="150%" x="-5%" y="-5%">
        <feFlood
          floodColor="#000"
          floodOpacity="0.5"
          result="floodFill"
        ></feFlood>
        <feComposite
          in="floodFill"
          in2="SourceAlpha"
          operator="in"
          result="coloredAlpha"
        ></feComposite>
        <feGaussianBlur
          in="coloredAlpha"
          result="blur"
          stdDeviation="8"
        ></feGaussianBlur>
        <feComposite
          in="blur"
          in2="SourceGraphic"
          operator="out"
          result="maskedOffsetBlur"
        ></feComposite>
        <feMerge>
          <feMergeNode in="maskedOffsetBlur"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
      <g filter="url(#a)">
        <path fill="#e44d26" d="M262 661l-40-449h440l-40 449-180 50z"></path>
        <path fill="#f16529" d="M442 672l145-40 35-384H442z"></path>
        <path
          fill="#ebebeb"
          d="M442 415h-73l-5-57h78v-55H304l1 15 14 152h123zm0 143l-62-17-4-44h-55l8 87 113 31z"
        ></path>
        <path d="M263 89h28v28h25V89h28v84h-28v-28h-25v28h-28V89zm118 28h-24V89h77v28h-25v56h-28v-56zm65-28h29l18 30 18-30h29v84h-28v-41l-19 29-20-29v41h-27V89zm108 0h28v57h40v27h-68V89z"></path>
        <path
          fill="#fff"
          d="M442 415v55h67l-6 71-61 17v57l113-31v-9l13-145 2-15h-15zm0-112v55h133l1-12 2-28 2-15z"
        ></path>
      </g>
    </svg>
  )
}

export default HtmlIcon
