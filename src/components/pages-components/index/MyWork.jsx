import React from "react"
import SectionHeader from "../../reusables/SectionHeader"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const MyWork = ({ data, projects }) => {
  const title = data.childMdx.frontmatter.title
  return (
    <section id="my-work" className="mt-48">
      <SectionHeader>{title}</SectionHeader>
      <div className="flex lg:flex-col overflow-x-scroll">
        {projects.nodes.map(
          ({
            childMdx: {
              body,
              frontmatter: { title, emoji, category, screenshot },
            },
            id,
          }) => (
            <div
              key={id}
              className="flex flex-col-reverse lg:flex-row lg:justify-between justify-end mr-20 lg:mr-0 mt-32"
            >
              <div className="mt-20 lg:mt-0">
                <div className="lg:w-9/12 mx-auto lg:mx-0">
                  <span className="mr-5">{emoji}</span>
                  <span>{category}</span>
                  <h4 className="text-xl font-semibold mt-1">{title}</h4>
                  <div className="">
                    <MDXRenderer>{body}</MDXRenderer>
                  </div>
                </div>
              </div>
              <div className="flex lg:justify-end">
                <GatsbyImage
                  image={getImage(screenshot)}
                  alt={title}
                  className="shadow-xl rounded-3xl w-80 h-64"
                />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default MyWork
