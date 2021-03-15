import React from "react"
import SectionHeader from "../../reusables/SectionHeader"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Col = ({ links }) => (
  <div className="space-y-4">
    {links.map(({ id, name, icon }) => (
      <div
        key={id}
        className="bg-gray-200 border-2 border-black px-3 py-1 rounded-full flex items-center w-64"
      >
        <GatsbyImage
          image={getImage(icon)}
          alt={name}
          className="w-6 h-6 mr-2"
        />
        <span>{name}</span>
      </div>
    ))}
  </div>
)

const Tech = ({ data }) => {
  const mdx = data.childMdx
  const title = mdx.frontmatter.title
  const links = mdx.exports.links
  return (
    <section id="tech" className="mt-48">
      <SectionHeader>{title}</SectionHeader>
      <div className="flex overflow-x-scroll mt-5 space-x-4">
        <Col links={links.slice(0, 2)} />
        <Col links={links.slice(2, 4)} />
        <Col links={links.slice(4, 6)} />
      </div>
    </section>
  )
}

export default Tech
