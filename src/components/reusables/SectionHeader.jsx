import React from "react"

const SectionHeader = ({ children, className }) => {
  return (
    <h3 className={`text-5xl lg:text-7xl pt-24 ${className}`}>{children}</h3>
  )
}

export default SectionHeader
