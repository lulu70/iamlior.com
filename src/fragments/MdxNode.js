import { graphql } from "gatsby"

export const fragment = graphql`
  fragment MdxNode on File {
    id
    childMdx {
      id
      body
      # fileRelativePath
      # rawFrontmatter
      # rawMdxBody
      frontmatter {
        title
      }
    }
  }
`
