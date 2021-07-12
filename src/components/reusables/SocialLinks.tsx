import React from "react"
// import FacebookIcon from "./FacebookIcon"
// import TweeterIcon from "./TweeterIcon"
import GithubIcon from "./GithubIcon"
import MailIcon from "./MailIcon"
import LinkedInIcon from "./LinkedInIcon"
import DocumentIcon from "./DocumentIcon"
import MainContext from "../../context/MainContext"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"

interface Link {
  id: number
  name: string
  displayName: string
  url: string
  icon: React.FC<{ className: string }>
}
const Col = ({ links }: { links: Link[] }) => {
  const { tabIsUsed } = React.useContext(MainContext)
  return (
    <div className="w-32 lg:w-40 lg:text-lg mr-4">
      {links.map(({ id, displayName, url, icon: Icon }) => {
        return (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noreferrer"
            className={`bg-lightTheme-primary dark:bg-darkTheme-primary px-3 py-1 lg:px-4 lg:py-2 rounded-full flex justify-between items-center mb-4 ${getClassNamesByTabIsUsedState(
              tabIsUsed
            )}`}
          >
            <span>{displayName}</span>
            {Icon && <Icon className="w-5 h-5 lg:w-8 lg:h-8 fill-current" />}
          </a>
        )
      })}
    </div>
  )
}
const SocialLinks = ({ className }: { className?: string }) => {
  const links = [
    {
      id: 0,
      name: "email",
      displayName: "Email",
      url: "mailto:dev@iamlior.com",
      icon: MailIcon,
    },
    // {
    //   id: 1,
    //   name: "facebook",
    //   displayName: "Facebook",
    //   url: "https://www.facebook.com/lior2",
    //   icon: FacebookIcon,
    // },
    {
      id: 4,
      name: "github",
      displayName: "Github",
      url: "https://github.com/lulu70",
      icon: GithubIcon,
    },
    {
      id: 2,
      name: "linkedin",
      displayName: "Linked in",
      url: "https://www.linkedin.com/in/iamlior",
      icon: LinkedInIcon,
    },
    // {
    //   id: 3,
    //   name: "twitter",
    //   displayName: "Twitter",
    //   url: "https://twitter.com/liorco70",
    //   icon: TweeterIcon,
    // },
    {
      id: 5,
      name: "resume",
      displayName: "Resume",
      url: "/resume.pdf",
      icon: DocumentIcon,
    },
  ]
  return (
    <div className={`flex flex-wrap justify-start ${className} `}>
      <Col links={links.slice(0, 2)} />
      <Col links={links.slice(2, 4)} />
      <Col links={links.slice(4)} />
    </div>
  )
}

export default SocialLinks
