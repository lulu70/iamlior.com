import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const Avatar = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "avatar" }) {
        ...NewGatsbyImage
      }
    }
  `)

  return (
    <GatsbyImage
      image={getImage(data.file.childImageSharp.gatsbyImageData)}
      alt="profile-image"
      className={`w-36 ${className}`}
    />
  )
}

export default Avatar
