import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SectionHeader from "../../reusables/SectionHeader"
import SocialLinks from "../../reusables/SocialLinks"
import ContactForm from "../../reusables/ContactForm"
import Avatar from "../../reusables/Avatar"
import { HomeQuery } from "../../../../gatsby-graphql"

const LetsTalk = ({ data }: { data: HomeQuery["letsTalk"] }) => {
  const mdx = data?.childMdx
  const body = mdx?.body
  const title = mdx?.frontmatter?.title
  return (
    <section id="lets-talk" className="flex flex-col">
      <SectionHeader>{title}</SectionHeader>
      {body && (
        <div className="mt-4">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      )}
      <Avatar />
      <SocialLinks className="mt-8" />
      <ContactForm className="mt-4 bg-lightTheme-primary dark:bg-darkTheme-primary p-5 rounded-lg flex-1 max-w-xl w-full" />
    </section>
  )
}

export default LetsTalk
