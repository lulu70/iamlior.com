import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import PersonSVG from "../../reusables/PersonSVG"
import styled from "styled-components"
import tw from "twin.macro"
import SectionHeader from "../../reusables/SectionHeader"
const MdxWrapper = styled.div`
  ${tw`mt-5`}
  p {
    ${tw`mt-2`}
  }
`

const About = ({ data }) => {
  const {
    body,
    frontmatter: { title },
  } = data.childMdx
  return (
    <section id="about" className="flex flex-col lg:flex-row mt-48">
      <div className="flex-1">
        <SectionHeader>{title}</SectionHeader>
        <MdxWrapper>
          <MDXRenderer>{body}</MDXRenderer>
        </MdxWrapper>
      </div>
      <PersonSVG className="bg-gradient-to-br from-gray-500 to-black lg:w-2/5 rounded-2xl pt-5 mt-48 lg:mt-0" />
    </section>
  )
}

export default About
