import React from "react"

export const RefsContext = React.createContext()

const RefsContextProvider = ({ children }) => {
  const personRef = React.useRef()
  const personLeftHandRef = React.useRef()
  const laptopLogoRef = React.useRef()
  const laptopScreenLightRef = React.useRef()
  const indexContainerRef = React.useRef()
  const aboutTitleRef = React.useRef()
  const aboutBodyFirstRef = React.createRef()
  const aboutBodySecondRef = React.createRef()

  return (
    <RefsContext.Provider
      value={{
        aboutBodyFirstRef,
        aboutBodySecondRef,
        aboutTitleRef,
        personRef,
        indexContainerRef,
        personLeftHandRef,
        laptopLogoRef,
        laptopScreenLightRef,
      }}
    >
      {children}
    </RefsContext.Provider>
  )
}

export default RefsContextProvider
