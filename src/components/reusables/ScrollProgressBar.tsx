import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Progress = styled.progress`
  /* For Chrome or Safari */
  ::-webkit-progress-bar {
    ${tw`dark:bg-darkTheme-primary bg-lightTheme-primary`};
  }

  ::-webkit-progress-value {
    background-color: ${tw`bg-accent`} !important;
  }

  /* For Firefox */
  ${tw`dark:bg-darkTheme-primary bg-lightTheme-primary`}
  ::-moz-progress-bar {
    background-color: ${tw`bg-accent`} !important;
  }
`
const ScrollProgressBar = () => {
  const progressRef = React.useRef<HTMLProgressElement | null>(null)
  React.useEffect(() => {
    gsap.to(progressRef.current, {
      value: 100,
      scrollTrigger: {
        scrub: 0.3,
      },
    })
  }, [])
  return (
    <Progress ref={progressRef} value={0} max={100} className="w-full h-1" />
  )
}

export default ScrollProgressBar
