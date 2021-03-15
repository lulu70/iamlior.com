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
    <section id="lets-talk" className="mt-40 lg:w-2/3 lg:mx-auto mb-24">
      <SectionHeader>{title}</SectionHeader>
      <div className="mt-5">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <div className="flex mt-20 space-x-10 items-center">
        <GatsbyImage
          image={getImage(profileImage)}
          alt="profile-image"
          className="rounded-full w-40"
        />
        <div className="text-lg">
          <div>{name}</div>
          <a href={`mailto:${email}`}>
            <UnderlineText>{email}</UnderlineText>
          </a>
        </div>
      </div>
      <div className="mt-10">
        <SocialLinks />
      </div>
      <ContactForm />
    </section>
  )
}

export default LetsTalk
