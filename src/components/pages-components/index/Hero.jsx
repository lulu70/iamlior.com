import React from "react"
import SocialLinks from "../../reusables/SocialLinks"

const Hero = ({ data }) => {
  const { greetings, title, subtitle } = data.hero.childMdx.frontmatter
  return (
    <section id="hero" className="mt-40">
      <h1 className="text-5xl">
        {greetings}
        <span className="block mt-6">{title}</span>
      </h1>
      <h2 className="text-3xl mt-3">{subtitle}</h2>
      <SocialLinks />
    </section>
  )
}

export default Hero
