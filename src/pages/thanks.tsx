import React from "react"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ThanksQuery } from "../../gatsby-graphql"
export default function Thanks({ data }: { data: ThanksQuery }) {
  const body = data.thanks?.childMdx?.body
  const title = data.thanks?.childMdx?.frontmatter?.title
  return (
    <>
      <SEO title="Thanks" />
      <Layout>
        <div className="text-center">
          <h1 className="text-4xl mt-32">{title}</h1>
          {body && (
            <div className="mt-5 text-lg">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          )}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query thanks {
    thanks: file(relativePath: { eq: "thanks/thanks.mdx" }) {
      childMdx {
        body
        frontmatter {
          title
        }
      }
    }
  }
`
