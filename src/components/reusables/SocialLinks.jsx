import React from "react"

const SocialLinks = () => {
  const links = [
    {
      id: 0,
      name: "Github",
      url: "https://github.com/lulu70",
    },
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/lior2",
    },
  ]
  return (
    <div>
      {links.map(({ id, name, url }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  )
}

export default SocialLinks
