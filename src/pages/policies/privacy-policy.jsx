import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/reusables/Layout"
import SEO from "../../components/reusables/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import tw from "twin.macro"

const StyledSection = styled.section`
  p {
    ${tw`mt-6 max-w-xl mx-auto`}
  }
`

const PrivacyPolicy = ({ data }) => {
  const {
    frontmatter: { title },
    body,
  } = data.mdx

  return (
    <>
      <SEO title={title} />
      <Layout>
        <StyledSection id="main">
          <h1 className="text-4xl font-normal text-center mt-10">{title}</h1>
          <MDXRenderer>{body}</MDXRenderer>
        </StyledSection>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    mdx(frontmatter: { title: { eq: "Privacy Policy" } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default PrivacyPolicy
