import React from "react"

export const RefsContext = React.createContext()

const RefsContextProvider = ({ children }) => {
  const personRef = React.useRef()
  const personLeftHandRef = React.useRef()
  const laptopLogoRef = React.useRef()
  const laptopScreenLightRef = React.useRef()
  const indexContainerRef = React.useRef()
  const audioRef = React.useRef()

  return (
    <RefsContext.Provider
      value={{
        personRef,
        indexContainerRef,
        personLeftHandRef,
        laptopLogoRef,
        laptopScreenLightRef,
        audioRef,
      }}
    >
      {children}
    </RefsContext.Provider>
  )
}

export default RefsContextProvider
