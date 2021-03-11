import React from "react"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"
import PersonSVG from "../components/reusables/PersonSVG"
import { graphql } from "gatsby"
import Hero from "../components/pages-components/index/Hero"

export default function Home({ data }) {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Hero data={data} />
        <div className="flex items-center">
          <div className="flex-1">
            <h2 className="text-3xl">About Me</h2>
            <p className="mt-5">
              I specify in FAST apps for the web and mobile.
            </p>
            <p className="mt-1">
              For me - User Experience, the look, and feel are first priority.
            </p>
          </div>
          <PersonSVG className="bg-gradient-to-br from-gray-500 to-black w-2/5 rounded-2xl pt-5" />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    hero: file(name: { eq: "hero" }) {
      childMdx {
        frontmatter {
          greetings
          title
          subtitle
        }
      }
    }
  }
`
