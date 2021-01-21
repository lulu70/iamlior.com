import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment FluidImage on File {
    name
    publicURL
    childImageSharp {
      original {
        src
      }
      fluid(quality: 100, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`
