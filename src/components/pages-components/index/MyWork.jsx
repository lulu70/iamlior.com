import React from "react"
import SectionHeader from "../../reusables/SectionHeader"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import UnderlineText from "../../reusables/UnderlineText"

const MyWork = ({ data, projects }) => {
  const title = data.childMdx.frontmatter.title
  return (
    <section id="my-work" className="mt-48">
      <SectionHeader>{title}</SectionHeader>
      <div id="projects-container" className="mt-12 space-y-32">
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
              <div
                id="project-container"
                key={id}
                className="flex flex-col-reverse lg:flex-row lg:justify-between bg-gray-200 dark:bg-gray-700 p-8 rounded-3xl"
              >
                <div
                  id="description-container"
                  className="mt-10 lg:mt-0 lg:w-7/12"
                >
                  <div
                    id="description-inner-container"
                    className="lg:w-9/12 mx-auto lg:mx-0 space-y-4"
                  >
                    <span id="emoji" className="mr-2">
                      {emoji}
                    </span>
                    <span id="category">{category}</span>
                    <h4 id="title" className="text-xl font-semibold">
                      {title}
                    </h4>
                    <MDXRenderer>{body}</MDXRenderer>
                    <div id="tags-container" className="flex flex-wrap">
                      {tags.map(tag => (
                        <UnderlineText key={tag}>{tag}</UnderlineText>
                      ))}
                    </div>
                    <a
                      id={"external link to" + title}
                      className="focus inline-block"
                      href={external}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={title}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="text-gray-400 w-8 h-8"
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
                <div id="image-container" className="lg:w-5/12">
                  <a
                    className="focus flex"
                    href={external}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GatsbyImage
                      image={getImage(screenshot)}
                      alt={title}
                      className="shadow-xl rounded-lg"
                    />
                  </a>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  )
}

export default MyWork
