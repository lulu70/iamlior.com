import React from "react"
import FacebookIcon from "./FacebookIcon"
import GithubIcon from "./GithubIcon"
import MailIcon from "./MailIcon"
import TweeterIcon from "./TweeterIcon"

const Col = ({ links }) => (
  <div className="w-32 lg:w-40 lg:text-lg">
    {links.map(({ id, displayName, url, icon: Icon }) => (
      <a
        key={id}
        href={url}
        target="_blank"
        rel="noreferrer"
        className="bg-lightTheme-primary dark:bg-darkTheme-primary px-3 py-1 lg:px-4 lg:py-2 rounded-full flex justify-between items-center focus mb-4"
      >
        <span>{displayName}</span>
        {Icon && <Icon className="w-5 lg:w-8 fill-current" />}
      </a>
    ))}
  </div>
)
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
      name: "facebook",
      displayName: "Facebook",
      url: "https://www.facebook.com/lior2",
      icon: FacebookIcon,
    },
    {
      id: 2,
      name: "github",
      displayName: "Github",
      url: "https://github.com/lulu70",
      icon: GithubIcon,
    },
    {
      id: 3,
      name: "twitter",
      displayName: "Twitter",
      url: "https://twitter.com/liorco70",
      icon: TweeterIcon,
    },
  ]
  const slicer = Math.round(links.length / 2)
  return (
    <div className={`flex space-x-4 ${className}`}>
      <Col links={links.slice(0, slicer)} />
      <Col links={links.slice(slicer)} />
    </div>
  )
}

export default SocialLinks
