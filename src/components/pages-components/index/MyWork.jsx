import React from "react"
import SectionHeader from "../../reusables/SectionHeader"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

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
              frontmatter: {
                title,
                emoji,
                category,
                screenshot,
                visible,
                external,
                tags,
              },
            },
            id,
          }) =>
            visible && (
              <div className="flex flex-col-reverse lg:flex-row lg:justify-between justify-end  lg:mr-0 mt-32 mr-20">
                <div className="mt-20 lg:mt-0">
                  <div className="lg:w-9/12 mx-auto lg:mx-0">
                    <span className="mr-5">{emoji}</span>
                    <span>{category}</span>
                    <h4 className="text-xl font-semibold mt-1">{title}</h4>
                    <MDXRenderer>{body}</MDXRenderer>
                    <div className="mt-12 flex flex-wrap">
                      {tags.map(tag => (
                        <div className="relative mr-4">
                          <span className="bg-gray-200 absolute bottom-0 right-0 left-0 h-2" />
                          <span className="relative" key={tag}>
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      className="mt-4 block"
                      href={external}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="text-gray-400 w-8 h-8 -ml-1"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex lg:justify-end">
                  <GatsbyImage
                    image={getImage(screenshot)}
                    alt={title}
                    className="shadow-xl rounded-3xl w-96 h-72"
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
