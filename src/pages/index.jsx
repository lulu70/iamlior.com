import React from "react"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"
import { graphql } from "gatsby"
import Hero from "../components/pages-components/index/Hero"
import About from "../components/pages-components/index/About"
import Tech from "../components/pages-components/index/Tech"
import MyWork from "../components/pages-components/index/MyWork"
import LetsTalk from "../components/pages-components/index/LetsTalk"

export default function Home({ data }) {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Tech data={data.tech} />
        <MyWork data={data.myWork} projects={data.projects} />
        <LetsTalk data={data.letsTalk} />
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
    myWork: file(relativePath: { eq: "index/my-work/my-work.mdx" }) {
      childMdx {
        frontmatter {
          title
        }
      }
    }
    projects: allFile(
      filter: {
        childMdx: { fileAbsolutePath: { regex: "/index/my-work/projects/" } }
      }
      sort: { fields: childrenMdx___frontmatter___position }
    ) {
      nodes {
        id
        childMdx {
          frontmatter {
            title
            category
            emoji
            screenshot {
              ...NewGatsbyImage
            }
            external
            tags
            visible
          }
          body
        }
      }
    }
    letsTalk: file(relativePath: { eq: "index/lets-talk/lets-talk.mdx" }) {
      childMdx {
        body
        frontmatter {
          title
          profileImage {
            ...NewGatsbyImage
          }
          email
          name
        }
      }
    }
  }
`
