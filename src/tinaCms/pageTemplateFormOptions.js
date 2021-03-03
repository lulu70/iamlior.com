import React from "react"
import { ImageField } from "./tinaProxy"

const pageTemplateFormOptions = {
  fields: [
    {
      label: "Title",
      name: "frontmatter.title",
      description: "The Title",
      component: "text",
    },
    {
      label: "Image",
      name: "frontmatter.image",
      description: "Image",
      component: props => (
        <div className="w-1/2">
          <ImageField {...props} />
        </div>
      ),
      clearable: true,
      parse: media => {
        if (!media) return ""
        return `../images/${media.filename}`
      },
      previewSrc: (src, path, formValues) => {
        if (!formValues.frontmatter.image) return ""
        return formValues.frontmatter.image.childImageSharp.fluid.src
      },
      uploadDir: () => `/src/images/`,
    },
  ],
}
export default pageTemplateFormOptions
