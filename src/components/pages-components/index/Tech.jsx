import React from "react"
import { v4 as uuidV4 } from "uuid"
import SectionHeader from "../../reusables/SectionHeader"
import ReactIcon from "../../reusables/ReactIcon"
import ShopifyIcon from "../../reusables/ShopifyIcon"
import GatsbyIcon from "../../reusables/GatsbyIcon"
import ElectronIcon from "../../reusables/ElectronIcon"
import JavascriptIcon from "../../reusables/JavascriptIcon"
import HtmlIcon from "../../reusables/HtmlIcon"
import CssIcon from "../../reusables/CssIcon"
import NodeIcon from "../../reusables/NodeIcon"
import FirebaseIcon from "../../reusables/FirebaseIcon"
import WordpressIcon from "../../reusables/WordpressIcon"
import ContentfulIcon from "../../reusables/ContentfulIcon"
import GraphQLIcon from "../../reusables/GraphQLIcon"
import ApolloIcon from "../../reusables/ApolloIcon"
import ReduxIcon from "../../reusables/ReduxIcon"

const Col = ({ links }) => {
  const icons = {
    React: ReactIcon,
    "React Native": ReactIcon,
    Shopify: ShopifyIcon,
    Gatsby: GatsbyIcon,
    Electron: ElectronIcon,
    Javascript: JavascriptIcon,
    Html: HtmlIcon,
    Css: CssIcon,
    Node: NodeIcon,
    Firebase: FirebaseIcon,
    Wordpress: WordpressIcon,
    Contentful: ContentfulIcon,
    GraphQL: GraphQLIcon,
    Apollo: ApolloIcon,
    Redux: ReduxIcon,
  }
  return (
    <div className="space-y-4 pb-4">
      {links.map(({ id, name }) => {
        const Icon = icons[name]
        return (
          <div
            key={id}
            className="bg-lightTheme-primary dark:bg-darkTheme-primary px-4 py-2 rounded-full flex items-center w-64"
          >
            <Icon className="h-12 mr-2" />
            <span>{name}</span>
          </div>
        )
      })}
    </div>
  )
}

const Tech = ({ data }) => {
  const { title, links: linksData } = data.childMdx.frontmatter
  const links = linksData.map(link => ({
    id: uuidV4(),
    name: link,
  }))
  return (
    <section id="tech">
      <SectionHeader>{title}</SectionHeader>
      <div className="flex overflow-x-scroll mt-4 space-x-4">
        {links.map(({ id }, index) => {
          const chunk = 3
          if (index % chunk !== 0) return ""
          return <Col key={id} links={links.slice(index, index + chunk)} />
        })}
      </div>
    </section>
  )
}

export default Tech
