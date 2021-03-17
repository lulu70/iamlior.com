import React from "react"
import FacebookIcon from "./FacebookIcon"
import GithubIcon from "./GithubIcon"
import TweeterIcon from "./TweeterIcon"

const SocialLinks = () => {
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
    {
      id: 2,
      name: "tweeter",
      displayName: "Tweeter",
      url: "https://twitter.com/liorco70",
      icon: TweeterIcon,
    },
  ]

  return (
    <div className="inline-flex flex-wrap">
      {links.map(({ id, displayName, url, icon: Icon }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="bg-lightTheme-primary dark:bg-darkTheme-primary border-2 border-lightTheme-text dark:border-darkTheme-text px-3 py-1 rounded-full w-36 text-center flex justify-between items-center focus mr-2 mb-4"
        >
          <span>{displayName}</span>
          {Icon && <Icon className="w-5 fill-current" />}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
