import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"
import { useMdxForm, usePlugin } from "../tinaCms/tinaProxy"

import pageTemplateFormOptions from "../tinaCms/pageTemplateFormOptions"
export default function Home({ data }) {
  const [tinaMdx, form] = useMdxForm(data.mdx.childMdx, pageTemplateFormOptions)
  const mdx = tinaMdx || data.mdx.childMdx
  usePlugin(form)
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <Layout>
        <section id="main" className="my-10">
          <h1 className="text-center font-bold text-4xl">
            {mdx.frontmatter.title}
          </h1>
          <div className="flex flex-col lg:flex-row">
            <div className="w-9/12 lg:w-1/3 mx-auto mt-10">
              <GatsbyImage
                fluid={mdx.frontmatter.image.childImageSharp.fluid}
                alt={mdx.frontmatter.image.name}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
export const query = graphql`
  query($id: String!) {
    mdx: file(childMdx: { id: { eq: $id } }) {
      ...MdxNode
    }
  }
`
