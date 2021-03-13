import React from "react"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"
import { graphql } from "gatsby"
import Hero from "../components/pages-components/index/Hero"
import About from "../components/pages-components/index/About"
import Tech from "../components/pages-components/index/Tech"

export default function Home({ data }) {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Hero data={data} />
        <About data={data} />
        <Tech data={data} />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    hero: file(relativePath: { eq: "index/hero/hero.mdx" }) {
      childMdx {
        frontmatter {
          greetings
          title
          subtitle
          links
        }
      }
    }
    about: file(relativePath: { eq: "index/about/about.mdx" }) {
      childMdx {
        body
        frontmatter {
          title
        }
      }
    }
    tech: file(relativePath: { eq: "index/tech/tech.mdx" }) {
      childMdx {
        exports {
          links {
            id
            name
            icon {
              ...NewGatsbyImage
            }
          }
        }
        frontmatter {
          title
        }
      }
    }
  }
`
