import React from "react"
import SectionHeader from "../../reusables/SectionHeader"
import ReactIcon from "../../reusables/ReactIcon"
import ShopifyIcon from "../../reusables/ShopifyIcon"
import GatsbyIcon from "../../reusables/GatsbyIcon"
import ElectronIcon from "../../reusables/ElectronIcon"
import JavascriptIcon from "../../reusables/JavascriptIcon"

const Col = ({ links }) => {
  return (
    <div className="space-y-4 pb-4">
      {links.map(link => {
        let Icon
        switch (link) {
          case "React":
            Icon = ReactIcon
            break
          case "React Native":
            Icon = ReactIcon
            break
          case "Shopify":
            Icon = ShopifyIcon
            break
          case "Gatsby":
            Icon = GatsbyIcon
            break
          case "Electron":
            Icon = ElectronIcon
            break
          case "Javascript":
            Icon = JavascriptIcon
            break
          default:
            Icon = () => ""
        }
        return (
          <div
            key={link}
            className="bg-gray-200 border-2 border-black px-3 py-1 rounded-full flex items-center w-64"
          >
            <Icon className="w-5 mr-1" />
            <span>{link}</span>
          </div>
        )
      })}
    </div>
  )
}

const Tech = ({ data }) => {
  const { title, links } = data.childMdx.frontmatter
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
