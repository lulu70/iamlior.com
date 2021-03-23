import React from "react"
import PersonSVG from "../../reusables/PersonSVG"
import SectionHeader from "../../reusables/SectionHeader"
import { RefsContext } from "../../../context/RefsContextProvider"
import { gsap, Power0 } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import useTypingAnimation from "../../../hooks/useTypingAnimation"

gsap.registerPlugin(TextPlugin)

const About = ({ data }) => {
  const {
    frontmatter: { title, body },
  } = data.childMdx
  const { personRef } = React.useContext(RefsContext)
  const titleRef = React.useRef()
  const bodyRefs = body.map(() => React.createRef())
  const { startTypingAnimation, stopTypingAnimation } = useTypingAnimation()

  React.useEffect(() => {
    gsap
      .timeline()
      .to(personRef.current, {
        duration: 0.8,
        ease: Power0.easeOut,
        autoAlpha: 1,
        onComplete() {
          startTypingAnimation()
        },
      })
      .to(titleRef.current, {
        delay: 0.3,
        duration: 1,
        text: {
          value: title,
          newClass: "text-lightTheme-text dark:text-darkTheme-text",
        },
      })
      .to(bodyRefs[0].current, {
        duration: 1.5,
        text: {
          value: body[0],
          newClass: "text-lightTheme-text dark:text-darkTheme-text",
        },
      })
      .to(bodyRefs[1].current, {
        duration: 3,
        text: {
          value: body[1],
          newClass: "text-lightTheme-text dark:text-darkTheme-text",
        },
        onComplete() {
          stopTypingAnimation()
        },
      })
  }, [
    body,
    bodyRefs,
    personRef,
    startTypingAnimation,
    title,
    stopTypingAnimation,
  ])

  return (
    <section id="about" className="flex flex-col lg:flex-row">
      <div className="flex-1">
        <SectionHeader>
          <div
            ref={titleRef}
            className="dark:text-lightTheme-text text-darkTheme-text"
          >
            {title}
          </div>
        </SectionHeader>
        <p
          ref={bodyRefs[0]}
          className="mt-4 dark:text-lightTheme-text text-darkTheme-text"
        >
          {body[0]}
        </p>
        <p
          ref={bodyRefs[1]}
          className="dark:text-lightTheme-text text-darkTheme-text"
        >
          {body[1]}
        </p>
      </div>
      <PersonSVG
        onPointerEnter={() => {
          startTypingAnimation()
        }}
        onPointerLeave={() => {
          stopTypingAnimation()
        }}
        className="bg-gradient-to-br from-gray-500 to-black lg:w-2/5 rounded-2xl pt-5 mt-16 lg:mt-0 opacity-0 invisible"
      />
    </section>
  )
}

export default About
