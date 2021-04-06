import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SectionHeader from "../../reusables/SectionHeader"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SocialLinks from "../../reusables/SocialLinks"
import ContactForm from "../../reusables/ContactForm"

const LetsTalk = ({ data }) => {
  const mdx = data.childMdx
  const {
    body,
    frontmatter: { title, profileImage },
  } = mdx
  return (
    <section id="lets-talk" className="flex flex-col items-center">
      <SectionHeader className="text-center">{title}</SectionHeader>
      <div className="mt-4 text-center text-xl">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <GatsbyImage
        image={getImage(profileImage)}
        alt="profile-image"
        className="w-32"
      />
      <SocialLinks className="mt-4" />
      <ContactForm className="bg-lightTheme-primary dark:bg-darkTheme-primary p-5 rounded-lg flex-1 max-w-xl mx-auto w-full" />
    </section>
  )
}

export default LetsTalk
