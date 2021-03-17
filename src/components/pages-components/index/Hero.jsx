import React from "react"
import SocialLinks from "../../reusables/SocialLinks"

const Hero = ({ data }) => {
  const { greetings, title, subtitle } = data.childMdx.frontmatter
  return (
    <section id="hero" className="mt-16 lg:mt-40 space-y-8">
      <h1 className="text-5xl">
        {greetings}
        <span className="block mt-4">{title}</span>
      </h1>
      <h2 className="text-3xl">{subtitle}</h2>
      <SocialLinks />
    </section>
  )
}

export default Hero
