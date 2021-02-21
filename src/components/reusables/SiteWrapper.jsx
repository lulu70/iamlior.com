import React from "react"
import "../../../src/styles/global.css"
import ErrorBoundary from "./ErrorBoundary"
import MainContextProvider from "../../context/MainContextProvider"
const SiteWrapper = ({ children }) => {
  return (
    <MainContextProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </MainContextProvider>
  )
}

export default SiteWrapper
