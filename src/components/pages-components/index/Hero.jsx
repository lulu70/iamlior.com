import React from "react"
import SocialLinks from "../../reusables/SocialLinks"

const Hero = ({ data }) => {
  const { title, subtitle } = data.childMdx.frontmatter
  return (
    <section id="hero" className="mt-16 lg:mt-40 space-y-8 text-center">
      <h1 className="text-5xl">{title}</h1>
      <h2 className="text-3xl">{subtitle}</h2>
      <SocialLinks />
    </section>
  )
}

export default Hero
