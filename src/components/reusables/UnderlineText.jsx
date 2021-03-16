import React from "react"

const UnderlineText = ({ children }) => {
  return (
    <div className="relative mr-4">
      <span className="bg-yellow-400 absolute bottom-0 right-0 left-0 h-1" />
      <span className="relative">{children}</span>
    </div>
  )
}

export default UnderlineText
