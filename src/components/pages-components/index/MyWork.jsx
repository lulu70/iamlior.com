import React from "react"
import SectionHeader from "../../reusables/SectionHeader"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import UnderlineText from "../../reusables/UnderlineText"
import useTabIsUsed from "../../../hooks/useTabIsUsed"

const MyWork = ({ data, projects }) => {
  const tabIsUsed = useTabIsUsed()
  const title = data.childMdx.frontmatter.title

  return (
    <section id="my-work" className="space-y-4">
      <SectionHeader>{title}</SectionHeader>
      <div id="projects-container">
        {projects.nodes.map(
          (
            {
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
            },
            index
          ) =>
            visible && (
              <div
                id="project-container"
                key={id}
                className={`bg-lightTheme-primary dark:bg-darkTheme-primary p-8 rounded-3xl space-y-4 max-w-2xl mt-12 ${
                  index % 2 !== 0 ? "ml-auto" : "mr-auto"
                }`}
              >
                <div id="description-container" className="max-w-xl">
                  <span id="emoji" className="mr-2">
                    {emoji}
                  </span>
                  <span id="category">{category}</span>
                  <h4 id="title" className="text-xl font-semibold mt-4">
                    {title}
                  </h4>
                  <MDXRenderer>{body}</MDXRenderer>
                </div>
                <a
                  id={"link to" + title}
                  className={`flex ${
                    tabIsUsed ? "focus" : "focus:outline-none"
                  }`}
                  href={external}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GatsbyImage
                    image={getImage(screenshot)}
                    alt={title}
                    className="rounded-lg"
                  />
                </a>
                <div id="tags-container" className="flex flex-wrap max-w-xl">
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
            )
        )}
      </div>
    </section>
  )
}

export default MyWork
