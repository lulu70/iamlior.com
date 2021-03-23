import React from "react"
import { gsap } from "gsap"
import useRefsContext from "../hooks/useRefsContext"
const useTypingAnimation = () => {
  const typingTl = React.useMemo(
    () =>
      gsap.timeline({
        paused: true,
      }),
    []
  )
  const screenTl = React.useMemo(
    () =>
      gsap.timeline({
        paused: true,
      }),
    []
  )

  const {
    personLeftHandRef,
    laptopLogoRef,
    laptopScreenLightRef,
    audioRef,
  } = useRefsContext()

  React.useEffect(() => {
    typingTl.addLabel("start_typing").to(personLeftHandRef.current, {
      transformOrigin: "right",
      rotateZ: 1,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
    })

    screenTl
      .addLabel("light_screen_light")
      .to(laptopScreenLightRef.current, {
        autoAlpha: 1,
        delay: 0.2,
      })
      .addLabel("light_logo")
      .to(
        laptopLogoRef.current,
        {
          fill: "white",
        },
        "<"
      )
    //autoplay the animation
    // typingTl.play()
    // screenTl.play()
  }, [
    personLeftHandRef,
    laptopLogoRef,
    laptopScreenLightRef,
    screenTl,
    typingTl,
  ])

  const startTypingAnimation = () => {
    typingTl.play()
    screenTl.play()
    audioRef.current.play()
  }
  const stopTypingAnimation = () => {
    typingTl.pause()
    screenTl.reverse()
    audioRef.current.pause()
  }
  return { startTypingAnimation, stopTypingAnimation }
}

export default useTypingAnimation
