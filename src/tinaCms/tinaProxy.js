/* IFDEBUG */
import { usePlugin as tinaUsePlugin } from "tinacms"
import { useMdxForm as tinaUseMdxForm } from "gatsby-tinacms-mdx"
import { ImageField as tinaImageField } from "tinacms"
/* FIDEBUG */

export const useMdxForm = (mdxNode, formOverrides) => {
  let returnValue = [undefined, undefined]
  /* IFDEBUG */
  returnValue = tinaUseMdxForm(mdxNode, formOverrides)
  /* FIDEBUG */
  return returnValue
}

export const usePlugin = plugins => {
  let returnValue = () => {}
  /* IFDEBUG */
  returnValue = tinaUsePlugin(plugins)
  /* FIDEBUG */
  return returnValue
}

export const ImageField = props => {
  let returnValue = () => {}
  /* IFDEBUG */
  returnValue = tinaImageField(props)
  /* FIDEBUG */
  return returnValue
}
