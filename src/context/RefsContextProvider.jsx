import React from "react"

export const RefsContext = React.createContext()

const RefsContextProvider = ({ children }) => {
  const personRef = React.useRef()
  const personLeftHandRef = React.useRef()
  const laptopLogoRef = React.useRef()
  const laptopScreenLightRef = React.useRef()
  const indexContainerRef = React.useRef()
  const heroTitleRef = React.useRef()
  const heroSubtitleRef = React.useRef()

  return (
    <RefsContext.Provider
      value={{
        heroTitleRef,
        heroSubtitleRef,
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
