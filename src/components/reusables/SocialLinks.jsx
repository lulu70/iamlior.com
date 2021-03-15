import React from "react"
import FacebookIcon from "./FacebookIcon"
import GithubIcon from "./GithubIcon"

const SocialLinks = ({ links: linksProp }) => {
  const links = [
    {
      id: 0,
      name: "github",
      displayName: "Github",
      url: "https://github.com/lulu70",
      icon: GithubIcon,
    },
    {
      id: 1,
      name: "facebook",
      displayName: "Facebook",
      url: "https://www.facebook.com/lior2",
      icon: FacebookIcon,
    },
  ].filter(link => linksProp.includes(link.name))
  return (
    <div className="inline-flex space-x-5 mt-8">
      {links.map(({ id, displayName, url, icon: Icon }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="bg-gray-200 border-2 border-black px-3 py-1 rounded-full w-36 text-center flex justify-between"
        >
          <span>{displayName}</span>
          {Icon && <Icon className="w-5" />}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
