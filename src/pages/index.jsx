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
  const description = data.about.childMdx.mdxAST.children
    .filter(child => child.type === "paragraph")
    .map(child => child.children[0].value)
    .join(" ")
  return (
    <>
      <SEO title="Home" description={description} />
      <Layout>
        <Hero data={data.hero} />
        <About data={data.about} />
        <MyWork data={data.myWork} projects={data.projects} />
        <Tech data={data.tech} />
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
          title
          subtitle
        }
      }
    }
    about: file(relativePath: { eq: "index/about/about.mdx" }) {
      childMdx {
        frontmatter {
          title
        }
        body
        mdxAST
      }
    }
    tech: file(relativePath: { eq: "index/tech/tech.mdx" }) {
      childMdx {
        frontmatter {
          title
          links
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
        }
      }
    }
  }
`
