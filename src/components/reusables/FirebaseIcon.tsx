import React from "react"

function FirebaseIcon(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 351"
      {...props}
    >
      <defs>
        <filter
          id="b"
          width="200%"
          height="200%"
          x="-50%"
          y="-50%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation="17.5"
          ></feGaussianBlur>
          <feOffset
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          ></feColorMatrix>
        </filter>
        <filter
          id="d"
          width="200%"
          height="200%"
          x="-50%"
          y="-50%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation="3.5"
          ></feGaussianBlur>
          <feOffset
            dx="1"
            dy="-9"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          ></feColorMatrix>
        </filter>
        <path id="a" d="M1 281l2-3 99-189L58 6c-4-7-13-6-14 2L1 281z"></path>
        <path
          id="c"
          d="M134 149l32-33-32-61c-3-6-10-6-13 0l-18 34v1l31 59z"
        ></path>
      </defs>
      <path
        fill="#FFC24A"
        d="M0 283l2-3L103 90v-3L58 4c-3-7-14-5-15 3L0 283z"
      ></path>
      <use fill="#FFA712" fillRule="evenodd" xlinkHref="#a"></use>
      <use filter="url(#b)" xlinkHref="#a"></use>
      <path
        fill="#F4BD62"
        d="M135 150l33-33-33-63c-3-6-12-6-15 0l-18 33v3l33 60z"
      ></path>
      <use fill="#FFA50E" fillRule="evenodd" xlinkHref="#c"></use>
      <use filter="url(#d)" xlinkHref="#c"></use>
      <path fill="#F6820C" d="M0 283l1-1 3-1 129-128 2-5-32-61z"></path>
      <path
        fill="#FDE068"
        d="M139 348l116-65-33-205c-1-6-9-9-13-4L0 283l116 65a24 24 0 0023 0"
      ></path>
      <path
        fill="#FCCA3F"
        d="M254 282L221 79c-1-6-7-9-12-4L1 283l115 64a24 24 0 0023 0l115-65z"
      ></path>
      <path
        fill="#EEAB37"
        d="M139 346a24 24 0 01-23 0L1 282l-1 1 116 65a24 24 0 0023 0l116-65v-2l-116 65z"
      ></path>
    </svg>
  )
}

export default FirebaseIcon
