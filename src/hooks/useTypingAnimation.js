import React from "react"
import { gsap, SteppedEase } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import useRefsContext from "../hooks/useRefsContext"

gsap.registerPlugin(TextPlugin)

const useTypingAnimation = ({ body, title }) => {
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
    aboutTitleRef,
    aboutBodyFirstRef,
    aboutBodySecondRef,
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
    textTl.restart().timeScale(4)
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
      .to(aboutTitleRef.current, {
        delay: 0.3,
        duration: 1.5,
        ease: SteppedEase.config(title.length),
        text: {
          value: title,
          newClass: "text-lightTheme-text dark:text-darkTheme-text",
        },
      })
      .to(aboutBodyFirstRef.current, {
        duration: 1,
        ease: SteppedEase.config(body[0].length),
        text: {
          value: body[0],
          newClass: "text-lightTheme-text dark:text-darkTheme-text",
        },
      })
      .to(aboutBodySecondRef.current, {
        duration: 1.5,
        ease: SteppedEase.config(body[1].length),
        text: {
          value: body[1],
          newClass: "text-lightTheme-text dark:text-darkTheme-text",
        },
        onComplete() {
          stopTypingAnimation()
        },
      })

    //clear text
    clearTextTl.set(
      [
        aboutBodySecondRef.current,
        aboutBodyFirstRef.current,
        aboutTitleRef.current,
      ],
      {
        text: {
          value: "",
        },
      }
    )
    //autoplay the animation
    startTypingAnimation()
  }, [
    aboutBodyFirstRef,
    aboutBodySecondRef,
    aboutTitleRef,
    body,
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
    typingTl,
  ])

  return { startTypingAnimation, stopTypingAnimation, resumeTypingAnimation }
}

export default useTypingAnimation
