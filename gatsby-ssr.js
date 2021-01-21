import React from "react"
import SiteWrapper from "./src/components/reusables/SiteWrapper"

export const wrapRootElement = ({ element }) => (
  <SiteWrapper>{element}</SiteWrapper>
)
