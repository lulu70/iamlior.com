import React from "react"
import SectionHeader from "../../reusables/SectionHeader"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Tech = ({ data }) => {
  const mdx = data.tech.childMdx
  const title = mdx.frontmatter.title
  const links = mdx.exports.links
  return (
    <section id="tech" className="mt-48">
      <SectionHeader>{title}</SectionHeader>
      <div className="inline-flex mt-8 flex-wrap justify-between">
        {links.map(({ id, name, icon }) => (
          <div
            key={id}
            className="bg-gray-100 border-2 border-black px-3 py-1 rounded-full w-1/4 text-center flex mr-4 mb-4 items-center"
          >
            <GatsbyImage
              image={getImage(icon)}
              alt={name}
              className="w-6 mr-2"
            />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tech
