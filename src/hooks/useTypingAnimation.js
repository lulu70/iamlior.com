import React from "react"
import { gsap, SteppedEase } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import useRefsContext from "../hooks/useRefsContext"

gsap.registerPlugin(TextPlugin)

const useTypingAnimation = ({ title, subtitle }) => {
  //create timelines
  const fadeInTl = React.useMemo(
    () =>
      gsap.timeline({
        paused: true,
      }),
    []
  )
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
  const textTl = React.useMemo(
    () =>
      gsap.timeline({
        paused: true,
      }),
    []
  )
  const clearTextTl = React.useMemo(
    () =>
      gsap.timeline({
        paused: true,
      }),
    []
  )
  //get the refs
  const {
    heroTitleRef,
    heroSubtitleRef,
    personRef,
    personLeftHandRef,
    laptopLogoRef,
    laptopScreenLightRef,
  } = useRefsContext()

  // actions
  const startTypingAnimation = React.useCallback(async () => {
    await fadeInTl.play()
    typingTl.play()
    screenTl.play()
    textTl.play()
  }, [fadeInTl, textTl, typingTl, screenTl])

  const resumeTypingAnimation = React.useCallback(() => {
    textTl.restart().timeScale(2)
    typingTl.resume()
    screenTl.play()
  }, [textTl, typingTl, screenTl])

  const stopTypingAnimation = React.useCallback(() => {
    typingTl.pause()
    screenTl.reverse()
  }, [typingTl, screenTl])

  //define timelines
  React.useEffect(() => {
    //fades in the person svg
    fadeInTl.to(personRef.current, {
      autoAlpha: 1,
    })
    //start typing
    typingTl.addLabel("start_typing").to(personLeftHandRef.current, {
      transformOrigin: "right",
      rotateZ: 1,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
    })
    //screen lights up
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
    //animate text
    textTl
      .to(heroTitleRef.current, {
        delay: 0.3,
        duration: 1.5,
        ease: SteppedEase.config(title.length),
        text: {
          value: title,
          newClass: "text-lightTheme-text dark:text-darkTheme-text",
        },
      })
      .to(heroSubtitleRef.current, {
        duration: 1.5,
        ease: SteppedEase.config(subtitle.length),
        text: {
          value: subtitle,
          newClass: "text-lightTheme-text dark:text-darkTheme-text",
        },
        onComplete() {
          stopTypingAnimation()
        },
      })

    //autoplay the animation
    startTypingAnimation()
  }, [
    heroTitleRef,
    heroSubtitleRef,
    clearTextTl,
    fadeInTl,
    laptopLogoRef,
    laptopScreenLightRef,
    personLeftHandRef,
    personRef,
    screenTl,
    startTypingAnimation,
    stopTypingAnimation,
    textTl,
    title,
    subtitle,
    typingTl,
  ])

  return { resumeTypingAnimation }
}

export default useTypingAnimation
