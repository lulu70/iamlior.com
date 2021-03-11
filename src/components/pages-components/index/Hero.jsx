import React from "react"

const Hero = ({ data }) => {
  const { greetings, title, subtitle } = data.hero.childMdx.frontmatter
  return (
    <section id="hero" className="mt-32">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <h1 className="text-5xl">
        {greetings}
        <span className="block mt-6">{title}</span>
      </h1>
      <h2 className="text-3xl mt-3">{subtitle}</h2>
    </section>
  )
}

export default Hero
