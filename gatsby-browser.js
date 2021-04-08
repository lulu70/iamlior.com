import React from "react"
import SiteWrapper from "./src/components/reusables/SiteWrapper"
import isBrowser from "./src/helpers/isBrowser"

export const wrapRootElement = ({ element }) => {
  // Display Browser is not supported for IE
  if (isBrowser()) {
    if (window.document.documentMode) {
      return (
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "5rem",
          }}
        >
          This Browser is not supported
        </h1>
      )
    }
  }

  return <SiteWrapper>{element}</SiteWrapper>
}
