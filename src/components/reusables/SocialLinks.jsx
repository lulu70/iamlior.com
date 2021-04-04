import React from "react"
import FacebookIcon from "./FacebookIcon"
import GithubIcon from "./GithubIcon"
import MailIcon from "./MailIcon"
import TweeterIcon from "./TweeterIcon"

const SocialLinks = ({ className }) => {
  const links = [
    {
      id: 0,
      name: "email",
      displayName: "Email",
      url: "mailto:liorco7079@gmail.com",
      icon: MailIcon,
    },
    {
      id: 1,
      name: "github",
      displayName: "Github",
      url: "https://github.com/lulu70",
      icon: GithubIcon,
    },
    {
      id: 2,
      name: "facebook",
      displayName: "Facebook",
      url: "https://www.facebook.com/lior2",
      icon: FacebookIcon,
    },
    {
      id: 3,
      name: "twitter",
      displayName: "Twitter",
      url: "https://twitter.com/liorco70",
      icon: TweeterIcon,
    },
  ]

  return (
    <div
      className={`flex flex-wrap max-w-xl justify-center mx-auto ${className}`}
    >
      {links.map(({ id, displayName, url, icon: Icon }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="bg-lightTheme-primary dark:bg-darkTheme-primary px-3 py-1 rounded-full w-1/3 flex justify-between items-center focus mr-2 mb-4"
        >
          <span>{displayName}</span>
          {Icon && <Icon className="w-5 fill-current" />}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
