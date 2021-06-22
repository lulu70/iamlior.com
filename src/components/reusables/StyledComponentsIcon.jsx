import React from "react"

const StyledComponentsIcon = ({ className, ...props }) => {
  return (
    <span
      role="img"
      aria-label="styled components"
      className={`text-4xl ${className}`}
      {...props}
    >
      💅
    </span>
  )
}

export default StyledComponentsIcon
