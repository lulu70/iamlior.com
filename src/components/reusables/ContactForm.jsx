import React from "react"
import { navigate } from "gatsby"
import useTabIsUsed from "../../hooks/useTabIsUsed"
import { css } from "styled-components"
import tw from "twin.macro"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"

const inputStyles = css`
  ${tw`mt-1 block w-full p-2 bg-lightTheme-bg dark:bg-darkTheme-bg border-0 border-b-4 dark:border-b-2 border-lightTheme-bg dark:border-darkTheme-bg focus:border-accent focus:ring-0`}
`

const ContactForm = props => {
  const [state, setState] = React.useState({})
  const [valid, setValid] = React.useState(false)

  React.useEffect(() => {
    function isDirty(inputName) {
      return state?.[inputName]?.length > 0
    }
    if (isDirty("full-name") && isDirty("email") && isDirty("message")) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [state])

  const tabIsdUsed = useTabIsUsed()

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        setState({})
        navigate(form.getAttribute("action"))
      })
      .catch(error => {
        throw new Error(error)
      })
  }
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  return (
    <form
      {...props}
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <h4 className="text-2xl font-normal">Send Me A message</h4>
      <div className="space-y-5 mt-5">
        <label className="block" htmlFor="full-name">
          <span>Full name: </span>
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            placeholder="John Doe"
            id="full-name"
            name="full-name"
            css={inputStyles}
            onChange={handleChange}
          />
        </label>
        <label className="block" htmlFor="email">
          <span>Email address</span>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            css={inputStyles}
            onChange={handleChange}
          />
        </label>
        <label className="block" htmlFor="message">
          <span>Your Message</span>
          <textarea
            id="message"
            placeholder="Your message goes here..."
            name="message"
            rows="2"
            css={inputStyles}
            onChange={handleChange}
          ></textarea>
        </label>
        <button
          disabled={!valid}
          type="submit"
          className={`bg-lightTheme-bg dark:bg-darkTheme-bg px-2 py-1 rounded-full w-32 ${
            !valid && "opacity-40 cursor-default"
          } ${getClassNamesByTabIsUsedState(tabIsdUsed)}`}
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm
