import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SectionHeader from "../../reusables/SectionHeader"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import UnderlineText from "../../reusables/UnderlineText"
import SocialLinks from "../../reusables/SocialLinks"
import ContactForm from "../../reusables/ContactForm"

const LetsTalk = ({ data }) => {
  const mdx = data.childMdx
  const {
    body,
    frontmatter: { title, profileImage, email, name },
  } = mdx
  return (
    <section id="lets-talk" className="mt-40 mb-24">
      <SectionHeader>{title}</SectionHeader>
      <div className="mt-5">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <div className="lg:flex lg:flex-row mt-20 lg:items-center">
        <div className="flex-1">
          <GatsbyImage
            image={getImage(profileImage)}
            alt="profile-image"
            className="rounded-full w-40 border-2 border-lightTheme-text dark:border-darkTheme-text"
            //safari fix:
            imgStyle={{ borderRadius: "9999px" }}
          />
          <div className="text-lg mt-5">
            <div>{name}</div>
            <a href={`mailto:${email}`} className="inline-block focus">
              <UnderlineText>{email}</UnderlineText>
            </a>
          </div>
          <SocialLinks />
        </div>
        <ContactForm className="border border-lightTheme-text dark:border-darkTheme-text p-5 rounded-lg flex-1 mt-20 lg:mt-0" />
      </div>
    </section>
  )
}

export default LetsTalk
