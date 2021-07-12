import React from "react"

function ShopifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 125">
      <path
        fill="#95bf47"
        d="M96 24l-1-1h-9l-9-8-2-1-4 2-2-5c-2-5-6-8-11-8l-1 1V3c-2-2-5-3-8-3-6 0-12 4-17 12-3 6-6 12-7 18l-11 3c-4 1-4 2-4 5L0 111l77 13 33-8-14-92zm-29-7l-6 2-1-11c4 1 6 6 7 9zm-10 3l-13 4c2-5 4-10 7-13l4-3c2 4 2 9 2 12zM49 4l4 1-5 4c-4 4-7 10-8 16l-10 3c2-9 10-24 19-24z"
      ></path>
      <path fill="#5e8e3e" d="M95 23H85l-8-8-1-1v110l34-8-14-92-1-1z"></path>
      <path
        fill="#fff"
        d="M58 40l-4 14s-4-2-9-1c-8 0-8 5-8 6 1 6 18 8 19 23 0 12-7 20-17 21-12 0-19-7-19-7l3-11s7 5 12 5c4 0 5-3 5-5-1-9-15-8-15-22-1-12 6-23 23-24 7-1 10 1 10 1z"
      ></path>
    </svg>
  )
}

export default ShopifyIcon
