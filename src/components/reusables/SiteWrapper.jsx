import React from "react"
import "../../../src/utils/custom-bootstrap.scss"
import ErrorBoundary from "./ErrorBoundary"
import ContextProvider from "../../context/ContextProvider"
const SiteWrapper = ({ children }) => {
  return (
    <ContextProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ContextProvider>
  )
}

export default SiteWrapper
