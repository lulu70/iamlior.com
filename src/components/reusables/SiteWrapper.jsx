import React from "react"
import "../../../src/styles/global.css"
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
