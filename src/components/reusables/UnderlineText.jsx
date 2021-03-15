import React from "react"

const UnderlineText = ({ children, color = "gray" }) => {
  return (
    <div className="relative mr-4">
      <span
        className={`bg-${color}-200 absolute bottom-0 right-0 left-0 h-2`}
      />
      <span className="relative">{children}</span>
    </div>
  )
}

export default UnderlineText
