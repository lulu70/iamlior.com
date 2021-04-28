import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SectionHeader from "../../reusables/SectionHeader"
import SocialLinks from "../../reusables/SocialLinks"

const About = ({ data }) => {
  const {
    body,
    frontmatter: { title },
  } = data.childMdx

  return (
    <section id="about" className="max-w-2xl">
      <SectionHeader className="">{title}</SectionHeader>
      <div className="mt-4 mx-auto lg:text-2xl">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <div className="mt-8">
        <SocialLinks />
      </div>
    </section>
  )
}

export default About
