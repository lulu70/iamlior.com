import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"

export default function Home({ data }) {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <section id="main" className="my-10">
          <h1 className="text-center font-bold text-4xl">Hello World</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="w-9/12 lg:w-1/3 mx-auto mt-10">
              <GatsbyImage
                fluid={data.imageName.childImageSharp.fluid}
                alt={data.imageName.name}
              />
            </div>
          </div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </section>
      </Layout>
    </>
  )
}
export const query = graphql`
  query {
    imageName: file(name: { eq: "image-name" }) {
      ...FluidImage
    }
    mdx: file(name: { eq: "home" }) {
      ...MdxNode
    }
  }
`
