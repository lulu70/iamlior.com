import React from "react"

const SectionHeader = ({ children, className }) => {
  return <h3 className={`text-4xl font-semibold ${className}`}>{children}</h3>
}

export default SectionHeader
