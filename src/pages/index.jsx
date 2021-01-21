import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"

export default function Home({ data }) {
  // content slices
  const slices = data.sections.main.slices
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <section id="main" className="my-5">
          <h1 className="text-center">{slices[0]}</h1>
          <div className="row">
            <div className="col-6 mx-auto">
              <GatsbyImage
                fluid={data.imageName.childImageSharp.fluid}
                alt={data.imageName.name}
              />
            </div>
          </div>
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
    sections: indexContentJson {
      main {
        slices
      }
    }
  }
`
