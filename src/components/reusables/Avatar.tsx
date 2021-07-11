import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { AvatarQuery } from "../../../gatsby-graphql"

const Avatar = ({ className }: { className?: string }) => {
  const data: AvatarQuery = useStaticQuery(graphql`
    query avatar {
      file(name: { eq: "avatar" }) {
        ...NewGatsbyImage
      }
    }
  `)
  const image = getImage(data.file?.childImageSharp?.gatsbyImageData)
  return image ? (
    <GatsbyImage
      {...{ image }}
      alt="profile-image"
      className={`w-36 mt-4 ${className}`}
      imgStyle={{ borderRadius: "9999px" }}
    />
  ) : (
    <span />
  )
}

export default Avatar
