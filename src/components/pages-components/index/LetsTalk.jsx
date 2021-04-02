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
    <section id="lets-talk">
      <SectionHeader>{title}</SectionHeader>
      <div className="mt-4">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <div className="lg:flex lg:flex-row mt-12 lg:items-center">
        <div className="flex-1 space-y-4">
          <GatsbyImage
            image={getImage(profileImage)}
            alt="profile-image"
            className="rounded-full w-36 border"
            //safari fix:
            imgStyle={{ borderRadius: "9999px" }}
          />
          <div className="text-lg">
            <div>{name}</div>
            <a href={`mailto:${email}`} className="inline-block focus">
              <UnderlineText>{email}</UnderlineText>
            </a>
          </div>
          <SocialLinks />
        </div>
        <ContactForm className="bg-lightTheme-primary dark:bg-darkTheme-primary p-5 rounded-lg flex-1 mt-16 lg:mt-0 max-w-xl" />
      </div>
    </section>
  )
}

export default LetsTalk
