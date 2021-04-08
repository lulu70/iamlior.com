import React from "react"
import PersonSVG from "../../reusables/PersonSVG"
import { RefsContext } from "../../../context/RefsContextProvider"
import useTypingAnimation from "../../../hooks/useTypingAnimation"
const Hero = ({ data }) => {
  const { title, subtitle } = data.childMdx.frontmatter
  const { heroTitleRef, heroSubtitleRef } = React.useContext(RefsContext)
  const { resumeTypingAnimation } = useTypingAnimation({
    title,
    subtitle,
  })
  return (
    <section id="hero" className="mt-24 lg:text-left">
      <div className="dark:text-darkTheme-bg text-lightTheme-bg">
        <h1 ref={heroTitleRef} className="text-6xl">
          {title}
        </h1>
        <h2 ref={heroSubtitleRef} className="text-2xl lg:text-4xl mt-4">
          {subtitle}
        </h2>
      </div>
      <div>
        <PersonSVG
          onPointerEnter={() => {
            resumeTypingAnimation()
          }}
          className="rounded-2xl opacity-0 invisible max-w-md lg:max-w-xl mr-0 ml-auto mt-12 lg:mt-0"
        />
      </div>
    </section>
  )
}

export default Hero
