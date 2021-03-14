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
    <section id="about" className="flex mt-48">
      <div className="flex-1">
        <SectionHeader>{title}</SectionHeader>
        <MdxWrapper>
          <MDXRenderer>{body}</MDXRenderer>
        </MdxWrapper>
        {/* <p className="mt-5">I specify in FAST apps for the web and mobile.</p>
        <p className="mt-1">
          For me - User Experience, the look, and feel are first priority.
        </p> */}
      </div>
      <PersonSVG className="bg-gradient-to-br from-gray-500 to-black w-2/5 rounded-2xl pt-5" />
    </section>
  )
}

export default About
