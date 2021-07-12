import React from "react"
import SectionHeader from "../../reusables/SectionHeader"
import SocialLinks from "../../reusables/SocialLinks"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { HomeQuery } from "../../../../gatsby-graphql"

const About = ({ data }: { data: HomeQuery["about"] }) => {
  const body = data?.childMdx?.body
  const title = data?.childMdx?.frontmatter?.title
  return (
    <section id="about" className="max-w-xl">
      <SectionHeader>{title}</SectionHeader>
      {body && (
        <div className="mx-auto lg:text-lg flex flex-col mt-4 space-y-4">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      )}
      <div className="mt-8">
        <SocialLinks />
      </div>
    </section>
  )
}

export default About
