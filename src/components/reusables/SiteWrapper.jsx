import React from "react"
import "../../../src/styles/global.css"
import ErrorBoundary from "./ErrorBoundary"
import MainContextProvider from "../../context/MainContextProvider"
import RefsContextProvider from "../../context/RefsContextProvider"
import "@fontsource/space-mono"

const SiteWrapper = ({ children }) => {
  return (
    <MainContextProvider>
      <RefsContextProvider>
        <ErrorBoundary>{children}</ErrorBoundary>
      </RefsContextProvider>
    </MainContextProvider>
  )
}

export default SiteWrapper
