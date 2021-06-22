import React from "react"
import SectionHeader from "../../reusables/SectionHeader"
import SocialLinks from "../../reusables/SocialLinks"
import { MDXRenderer } from "gatsby-plugin-mdx"

const About = ({ data }) => {
  const {
    frontmatter: { title },
    body,
  } = data.childMdx

  return (
    <section id="about" className="max-w-xl">
      <SectionHeader className="">{title}</SectionHeader>
      <div className="mx-auto lg:text-lg flex flex-col mt-4 space-y-4">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <div className="mt-8">
        <SocialLinks />
      </div>
    </section>
  )
}

export default About
