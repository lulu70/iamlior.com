import React from "react"

const StyledComponentsIcon = ({
  className,
  ...props
}: {
  className: string
}) => {
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
