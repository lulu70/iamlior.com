import React from "react"

interface SectionHeaderProps {
  children: React.ReactNode
  className?: string
}
const SectionHeader = ({ children, className }: SectionHeaderProps) => {
  return <h3 className={`text-6xl pt-24 ${className}`}>{children}</h3>
}

export default SectionHeader
