import React from "react"
import SectionHeader from "../../reusables/SectionHeader"
import SocialLinks from "../../reusables/SocialLinks"

const About = ({ data }) => {
  const {
    frontmatter: { title, body },
  } = data.childMdx

  return (
    <section id="about" className="max-w-lg">
      <SectionHeader className="">{title}</SectionHeader>
      <p className="mt-4 mx-auto lg:text-2xl">
        <span>{body[0]}</span>
        <br />
        <span>{body[1]}</span>
      </p>
      <div className="mt-8">
        <SocialLinks />
      </div>
    </section>
  )
}

export default About
