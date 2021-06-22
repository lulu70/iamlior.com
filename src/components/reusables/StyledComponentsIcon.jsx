import React from "react"

const StyledComponentsIcon = ({ className, ...props }) => {
  return (
    <span className={`text-4xl ${className}`} {...props}>
      💅
    </span>
  )
}

export default StyledComponentsIcon
