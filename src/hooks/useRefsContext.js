import React from "react"
import { RefsContext } from "../context/RefsContextProvider"

const useRefsContext = () => {
  return React.useContext(RefsContext)
}

export default useRefsContext
