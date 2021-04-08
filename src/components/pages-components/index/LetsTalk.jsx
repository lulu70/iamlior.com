import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SectionHeader from "../../reusables/SectionHeader"
import SocialLinks from "../../reusables/SocialLinks"
import ContactForm from "../../reusables/ContactForm"
import Avatar from "../../reusables/Avatar"

const LetsTalk = ({ data }) => {
  const mdx = data.childMdx
  const {
    body,
    frontmatter: { title },
  } = mdx
  return (
    <section id="lets-talk" className="flex flex-col">
      <SectionHeader>{title}</SectionHeader>
      <div className="mt-4">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <Avatar />
      <SocialLinks className="mt-8" />
      <ContactForm className="mt-4 bg-lightTheme-primary dark:bg-darkTheme-primary p-5 rounded-lg flex-1 max-w-xl w-full" />
    </section>
  )
}

export default LetsTalk
