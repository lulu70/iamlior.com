import React from "react"
import SectionHeader from "../../reusables/SectionHeader"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import UnderlineText from "../../reusables/UnderlineText"
import MainContext from "../../../context/MainContext"
import getClassNamesByTabIsUsedState from "../../../helpers/getClassNamesByTabIsUsedState"
import Pointer from "../../reusables/Pointer"
import { HomeQuery } from "../../../../gatsby-graphql"

const MyWork = ({
  data,
  projects,
}: {
  data: HomeQuery["myWork"]
  projects: HomeQuery["projects"]
}) => {
  const { tabIsUsed } = React.useContext(MainContext)

  const sectionTitle = data?.childMdx?.frontmatter?.title
  const order = data?.childMdx?.frontmatter?.order ?? []
  const orderedProjects = [...projects.nodes].sort((a, b) => {
    const aTitle = a.childMdx?.frontmatter?.title ?? ""
    const bTitle = b.childMdx?.frontmatter?.title ?? ""
    return order.indexOf(aTitle) - order.indexOf(bTitle)
  })
  return (
    <section id="my-work" className="">
      <SectionHeader>{sectionTitle}</SectionHeader>
      <div id="projects-container" className="mt-4 space-y-12">
        {orderedProjects.map((project, index) => {
          const id = project.id
          const body = project.childMdx?.body
          const frontmatter = project.childMdx?.frontmatter
          const title = frontmatter?.title ?? ""
          const emoji = frontmatter?.emoji
          const category = frontmatter?.category
          const screenshot = getImage(
            frontmatter?.screenshot?.childImageSharp?.gatsbyImageData
          )
          const external = frontmatter?.external ?? ""
          const tags = frontmatter?.tags ?? []
          return (
            <div
              id="project-container"
              key={id}
              className={`bg-lightTheme-primary dark:bg-darkTheme-primary p-8 rounded-3xl space-y-4 max-w-xl ${
                index % 2 !== 0 ? "ml-auto" : "mr-auto"
              }`}
            >
              <div className="max-w-xl">
                <span id="emoji" className="mr-2">
                  {emoji}
                </span>
                <span id="category">{category}</span>
                <h4 id="title" className="text-xl font-normal mt-4">
                  {title}
                </h4>
                {body && <MDXRenderer>{body}</MDXRenderer>}
              </div>
              <a
                id={"link to" + title}
                className={`flex relative overflow-hidden ${getClassNamesByTabIsUsedState(
                  tabIsUsed
                )}`}
                href={external}
                target="_blank"
                rel="noreferrer"
              >
                {screenshot && (
                  <GatsbyImage
                    image={screenshot}
                    alt={title}
                    className="rounded-lg"
                  />
                )}
                <Pointer />
              </a>
              <div id="tags-container" className="flex flex-wrap max-w-xl">
                {tags.map(tag => (
                  <UnderlineText key={tag}>{tag}</UnderlineText>
                ))}
              </div>
              <a
                id={"external link to" + title}
                className={`inline-block ${getClassNamesByTabIsUsedState(
                  tabIsUsed
                )}`}
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
        })}
      </div>
    </section>
  )
}

export default MyWork
