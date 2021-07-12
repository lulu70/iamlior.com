import React from "react"

export const RefsContext = React.createContext<{
  heroTitleRef: React.RefObject<HTMLHeadingElement>
  heroSubtitleRef: React.RefObject<HTMLHeadingElement>
  personRef: React.RefObject<SVGSVGElement>
  personLeftHandRef: React.RefObject<SVGPathElement>
  laptopLogoRef: React.RefObject<SVGEllipseElement>
  laptopScreenLightRef: React.RefObject<SVGPathElement>
} | null>(null)

const RefsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const personRef = React.useRef(null)
  const personLeftHandRef = React.useRef(null)
  const laptopLogoRef = React.useRef(null)
  const laptopScreenLightRef = React.useRef(null)
  const heroTitleRef = React.useRef(null)
  const heroSubtitleRef = React.useRef(null)

  return (
    <RefsContext.Provider
      value={{
        heroTitleRef,
        heroSubtitleRef,
        personRef,
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
