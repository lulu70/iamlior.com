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
    <section id="about" className="flex flex-col lg:flex-row">
      <div className="flex-1">
        <SectionHeader>
          <div
            ref={aboutTitleRef}
            className="dark:text-lightTheme-text text-darkTheme-text"
          >
            {title}
          </div>
        </SectionHeader>
        <p
          ref={aboutBodyFirstRef}
          className="mt-4 dark:text-lightTheme-text text-darkTheme-text"
        >
          {body[0]}
        </p>
        <p
          ref={aboutBodySecondRef}
          className="dark:text-lightTheme-text text-darkTheme-text"
        >
          {body[1]}
        </p>
      </div>
      <PersonSVG
        onPointerEnter={() => {
          resumeTypingAnimation()
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
