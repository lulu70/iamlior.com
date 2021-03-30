import React from "react"
import PersonSVG from "../../reusables/PersonSVG"
import SectionHeader from "../../reusables/SectionHeader"
import { RefsContext } from "../../../context/RefsContextProvider"
import useTypingAnimation from "../../../hooks/useTypingAnimation"

const About = ({ data }) => {
  const {
    frontmatter: { title, body },
  } = data.childMdx
  const {
    aboutTitleRef,
    aboutBodyFirstRef,
    aboutBodySecondRef,
  } = React.useContext(RefsContext)
  const { resumeTypingAnimation, stopTypingAnimation } = useTypingAnimation({
    title,
    body,
  })

  return (
    <section id="about" className="">
      <SectionHeader>
        <div
          ref={aboutTitleRef}
          className="dark:text-lightTheme-text text-darkTheme-text"
        >
          {title}
        </div>
      </SectionHeader>
      <p className="mt-4 dark:text-lightTheme-text text-darkTheme-text text-xl max-w-lg">
        <span ref={aboutBodyFirstRef}>{body[0]}</span>
        <br />
        <span ref={aboutBodySecondRef}>{body[1]}</span>
      </p>
      <PersonSVG
        onPointerEnter={() => {
          resumeTypingAnimation()
        }}
        onPointerLeave={() => {
          stopTypingAnimation()
        }}
        className="rounded-2xl md:-mt-24 opacity-0 invisible max-w-lg ml-auto"
      />
    </section>
  )
}

export default About
